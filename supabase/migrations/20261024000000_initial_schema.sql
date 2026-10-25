begin;

-- ICE TRACK roles and workflow statuses
create type public.user_role as enum ('admin', 'member');

create type public.order_status as enum (
  'pending',
  'processing',
  'ready_to_ship',
  'shipped',
  'delivered',
  'cancelled'
);

create type public.shipment_status as enum (
  'pending',
  'packed',
  'shipped',
  'in_transit',
  'delivered',
  'delayed',
  'cancelled'
);

create type public.ticket_priority as enum (
  'low',
  'medium',
  'high',
  'urgent'
);

create type public.ticket_status as enum (
  'open',
  'in_progress',
  'resolved',
  'closed'
);

-- Authentication credentials remain in Supabase's auth.users table.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role public.user_role not null default 'member',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null check (btrim(name) <> ''),
  email text,
  phone text,
  address_line_1 text,
  address_line_2 text,
  city text,
  state text,
  postal_code text,
  notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.inventory_items (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique check (btrim(sku) <> ''),
  name text not null check (btrim(name) <> ''),
  description text,
  category text,
  quantity_on_hand integer not null default 0 check (quantity_on_hand >= 0),
  reorder_level integer not null default 0 check (reorder_level >= 0),
  unit_price numeric(12, 2) not null default 0 check (unit_price >= 0),
  is_active boolean not null default true,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number bigint generated always as identity unique,
  customer_id uuid not null references public.customers(id) on delete restrict,
  status public.order_status not null default 'pending',
  notes text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  inventory_item_id uuid not null references public.inventory_items(id) on delete restrict,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12, 2) not null check (unit_price >= 0),
  line_total numeric(12, 2)
    generated always as (quantity * unit_price) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (order_id, inventory_item_id)
);

create table public.shipments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  carrier text,
  tracking_number text unique,
  status public.shipment_status not null default 'pending',
  shipped_at timestamptz,
  estimated_delivery_date date,
  delivered_at timestamptz,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (
    delivered_at is null
    or shipped_at is null
    or delivered_at >= shipped_at
  )
);

-- Append-only history for shipment progress.
create table public.shipment_events (
  id uuid primary key default gen_random_uuid(),
  shipment_id uuid not null references public.shipments(id) on delete cascade,
  status public.shipment_status not null,
  location text,
  notes text,
  occurred_at timestamptz not null default now(),
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.trouble_tickets (
  id uuid primary key default gen_random_uuid(),
  ticket_number bigint generated always as identity unique,
  order_id uuid references public.orders(id) on delete set null,
  shipment_id uuid references public.shipments(id) on delete set null,
  title text not null check (btrim(title) <> ''),
  description text not null check (btrim(description) <> ''),
  priority public.ticket_priority not null default 'medium',
  status public.ticket_status not null default 'open',
  created_by uuid references public.profiles(id) on delete set null,
  assigned_to uuid references public.profiles(id) on delete set null,
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Keep updated_at current whenever a row changes.
create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger customers_set_updated_at
before update on public.customers
for each row execute function public.set_updated_at();

create trigger inventory_items_set_updated_at
before update on public.inventory_items
for each row execute function public.set_updated_at();

create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

create trigger order_items_set_updated_at
before update on public.order_items
for each row execute function public.set_updated_at();

create trigger shipments_set_updated_at
before update on public.shipments
for each row execute function public.set_updated_at();

create trigger trouble_tickets_set_updated_at
before update on public.trouble_tickets
for each row execute function public.set_updated_at();

-- Create a public profile whenever Supabase Auth creates a user.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(
      nullif(btrim(new.raw_user_meta_data ->> 'full_name'), ''),
      nullif(split_part(new.email, '@', 1), ''),
      'User'
    )
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Add profiles for users who existed before this migration.
insert into public.profiles (id, full_name)
select
  id,
  coalesce(
    nullif(btrim(raw_user_meta_data ->> 'full_name'), ''),
    nullif(split_part(email, '@', 1), ''),
    'User'
  )
from auth.users
on conflict (id) do nothing;

-- Foreign-key and workflow lookup indexes.
create index customers_created_by_idx
  on public.customers(created_by);

create index inventory_items_category_idx
  on public.inventory_items(category);

create index inventory_items_created_by_idx
  on public.inventory_items(created_by);

create index orders_customer_id_idx
  on public.orders(customer_id);

create index orders_status_idx
  on public.orders(status);

create index orders_created_by_idx
  on public.orders(created_by);

create index order_items_order_id_idx
  on public.order_items(order_id);

create index order_items_inventory_item_id_idx
  on public.order_items(inventory_item_id);

create index shipments_order_id_idx
  on public.shipments(order_id);

create index shipments_status_idx
  on public.shipments(status);

create index shipment_events_shipment_time_idx
  on public.shipment_events(shipment_id, occurred_at desc);

create index trouble_tickets_status_idx
  on public.trouble_tickets(status);

create index trouble_tickets_order_id_idx
  on public.trouble_tickets(order_id);

create index trouble_tickets_shipment_id_idx
  on public.trouble_tickets(shipment_id);

create index trouble_tickets_assigned_to_idx
  on public.trouble_tickets(assigned_to);

-- Secure by default. Access policies will be added after the team finalizes
-- administrator and member permissions.
alter table public.profiles enable row level security;
alter table public.customers enable row level security;
alter table public.inventory_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.shipments enable row level security;
alter table public.shipment_events enable row level security;
alter table public.trouble_tickets enable row level security;

commit;
