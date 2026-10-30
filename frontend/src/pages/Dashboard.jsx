import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  Info,
  LifeBuoy,
  MapPin,
  Package,
  PackageCheck,
  Plus,
  Receipt,
  ShoppingCart,
  Truck,
  UserPlus,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusPill } from "@/components/StatusPill";
import { formatStatus } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  alerts,
  kpis,
  lowStockItems,
  openTickets,
  quickActions,
  recentOrders,
  recentShipments,
} from "@/lib/dashboard-data";

// Icon resolution lives here so the data module stays plain serializable data.
const KPI_ICONS = {
  "open-orders": ShoppingCart,
  "ready-to-ship": PackageCheck,
  "in-transit": Truck,
  "low-stock": Boxes,
  "open-tickets": LifeBuoy,
  "overdue-invoices": Receipt,
};

const ACTION_ICONS = {
  plus: Plus,
  "user-plus": UserPlus,
  package: Package,
  "map-pin": MapPin,
  "life-buoy": LifeBuoy,
  "bar-chart": BarChart3,
};

// KPI tiles whose value turns red when non-zero.
const CRITICAL_KPI_IDS = new Set(["low-stock", "overdue-invoices"]);

function SectionLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
    >
      {children}
    </Link>
  );
}

function KpiTile({ id, label, value, hint }) {
  const Icon = KPI_ICONS[id];
  const alerting = CRITICAL_KPI_IDS.has(id) && value > 0;

  return (
    <Card size="sm" className="gap-2">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardAction>
          <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "text-2xl font-semibold tracking-tight tabular-nums",
            alerting && "text-destructive",
          )}
        >
          {value}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  );
}

function AlertRow({ severity, text, to }) {
  const Icon = severity === "danger" ? AlertTriangle : Info;
  return (
    <li className="flex gap-3 py-2.5 first:pt-0">
      <Icon
        className={cn(
          "mt-0.5 size-4 shrink-0",
          severity === "danger" ? "text-destructive" : "text-muted-foreground",
        )}
        aria-hidden="true"
      />
      <p className="text-sm">
        {to ? (
          <Link to={to} className="underline-offset-4 hover:underline">
            {text}
          </Link>
        ) : (
          text
        )}
      </p>
    </li>
  );
}

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Overview of orders, shipments, inventory, and tickets. Data shown is
        placeholder content until the backend is connected.
      </p>

      {/* KPI tiles: 2 across on mobile → 3 → 6 on wide screens */}
      <section
        aria-label="Key metrics"
        className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6"
      >
        {kpis.map((kpi) => (
          <KpiTile key={kpi.id} {...kpi} />
        ))}
      </section>

      {/* Two columns: quick actions + recent activity | alerts rail */}
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="min-w-0 space-y-6 xl:col-span-2">
          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Quick actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {quickActions.map((action) => {
                  const Icon = ACTION_ICONS[action.icon];
                  return (
                    <Link
                      key={action.id}
                      to={action.to}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full justify-start gap-2",
                      )}
                    >
                      <Icon aria-hidden="true" />
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Recent orders</CardTitle>
              <CardAction>
                <SectionLink to="/orders">View all</SectionLink>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {recentOrders.map((order) => (
                  <li
                    key={order.id}
                    className="flex items-center justify-between gap-3 py-2.5 first:pt-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        #{order.orderNumber}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {order.customer}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-sm tabular-nums">{order.total}</span>
                      <StatusPill status={order.status} />
                      <span className="text-xs whitespace-nowrap text-muted-foreground">
                        {order.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Recent shipments</CardTitle>
              <CardAction>
                <SectionLink to="/shipments">View all</SectionLink>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {recentShipments.map((shipment) => (
                  <li
                    key={shipment.id}
                    className="flex items-center justify-between gap-3 py-2.5 first:pt-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium tabular-nums">
                        {shipment.trackingNumber}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {shipment.carrier}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <StatusPill status={shipment.status} />
                      <span className="text-xs whitespace-nowrap text-muted-foreground">
                        {shipment.eta}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <aside aria-label="Alerts and follow-ups" className="min-w-0 space-y-6">
          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Important alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {alerts.map((alert) => (
                  <AlertRow key={alert.id} {...alert} />
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Low-stock inventory</CardTitle>
              <CardAction>
                <SectionLink to="/inventory">View all</SectionLink>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {lowStockItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 py-2.5 first:pt-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {item.sku}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-medium tabular-nums text-destructive">
                      {item.quantityOnHand} / {item.reorderLevel}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Open trouble tickets</CardTitle>
              <CardAction>
                <SectionLink to="/trouble-tickets">View all</SectionLink>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {openTickets.map((ticket) => (
                  <li
                    key={ticket.id}
                    className="flex items-start justify-between gap-3 py-2.5 first:pt-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {ticket.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        #{ticket.ticketNumber} · {formatStatus(ticket.status)}
                      </p>
                    </div>
                    <StatusPill status={ticket.priority} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;