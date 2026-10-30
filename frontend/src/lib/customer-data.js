// PLACEHOLDER DATA for the Customers pages — visual mock only; no backend hookup yet.
// Field names mirror the `customers` table in supabase/migrations/20261024000000_initial_schema.sql
// where possible. Two fields have NO schema backing yet (future backend concerns,
// same treatment as "overdue invoices" on the dashboard):
//   - `status` (Preferred / OK / Shaky) — customers table has no status column
//   - `billingAddress` — schema has a single address only (address_line_1, city, …)
// Shipping address uses the schema's exact column names (address_line_1, etc.).
// Related orders/tickets reference real order_status / ticket_status enum values.

// Customers must be reused by orders, shipments, and trouble tickets later —
// this module is the seam those features will share (swap for an API fetch).

export const customers = [
  {
    id: "c1",
    name: "ACME Distribution",
    email: "orders@acme-dist.example",
    phone: "555-0142",
    status: "preferred",
    notes: "Standing weekly order; prefers morning delivery windows.",
    shippingAddress: {
      address_line_1: "1200 Harbor Blvd",
      address_line_2: "Suite 400",
      city: "Seattle",
      state: "WA",
      postal_code: "98104",
    },
    billingAddress: {
      address_line_1: "1200 Harbor Blvd",
      address_line_2: "Attn: Accounts Payable",
      city: "Seattle",
      state: "WA",
      postal_code: "98104",
    },
    createdAt: "Mar 12, 2026",
    relatedOrders: [
      { id: "o1", orderNumber: 1042, status: "processing", total: "$412.50", date: "Oct 28" },
      { id: "o4", orderNumber: 1039, status: "shipped", total: "$675.20", date: "Oct 26" },
      { id: "o7", orderNumber: 1036, status: "delivered", total: "$2,110.00", date: "Oct 14" },
    ],
    relatedTickets: [
      { id: "t4", ticketNumber: 102, title: "Short shipment on #1039", priority: "high", status: "resolved" },
    ],
  },
  {
    id: "c2",
    name: "Globex Corp",
    email: "buyer@globex.example",
    phone: "555-0199",
    status: "preferred",
    notes: "Net-30 terms; consolidates shipments when possible.",
    shippingAddress: {
      address_line_1: "88 Industrial Way",
      address_line_2: null,
      city: "Portland",
      state: "OR",
      postal_code: "97203",
    },
    billingAddress: {
      address_line_1: "88 Industrial Way",
      address_line_2: "Floor 3",
      city: "Portland",
      state: "OR",
      postal_code: "97203",
    },
    createdAt: "Jan 28, 2026",
    relatedOrders: [
      { id: "o2", orderNumber: 1041, status: "ready_to_ship", total: "$1,240.00", date: "Oct 27" },
      { id: "o8", orderNumber: 1034, status: "delivered", total: "$860.75", date: "Oct 9" },
    ],
    relatedTickets: [],
  },
  {
    id: "c3",
    name: "Initech",
    email: "ap@initech.example",
    phone: "555-0177",
    status: "shaky",
    notes: "Two late payments this quarter — confirm before shipping.",
    shippingAddress: {
      address_line_1: "4100 Park Lane",
      address_line_2: "Unit B",
      city: "Austin",
      state: "TX",
      postal_code: "78704",
    },
    billingAddress: {
      address_line_1: "4100 Park Lane",
      address_line_2: null,
      city: "Austin",
      state: "TX",
      postal_code: "78704",
    },
    createdAt: "Feb 3, 2026",
    relatedOrders: [
      { id: "o3", orderNumber: 1040, status: "pending", total: "$89.99", date: "Oct 27" },
      { id: "o9", orderNumber: 1031, status: "cancelled", total: "$450.00", date: "Sep 30" },
    ],
    relatedTickets: [
      { id: "t5", ticketNumber: 100, title: "Invoice amount mismatch", priority: "medium", status: "open" },
    ],
  },
  {
    id: "c4",
    name: "Umbrella Foods",
    email: "supply@umbrellafoods.example",
    phone: "555-0113",
    status: "ok",
    notes: null,
    shippingAddress: {
      address_line_1: "27 Cold Storage Rd",
      address_line_2: null,
      city: "Denver",
      state: "CO",
      postal_code: "80216",
    },
    billingAddress: {
      address_line_1: "27 Cold Storage Rd",
      address_line_2: null,
      city: "Denver",
      state: "CO",
      postal_code: "80216",
    },
    createdAt: "Apr 21, 2026",
    relatedOrders: [
      { id: "o6", orderNumber: 1037, status: "delivered", total: "$1,025.40", date: "Oct 18" },
    ],
    relatedTickets: [],
  },
  {
    id: "c5",
    name: "Hooli Logistics",
    email: "dispatch@hooli.example",
    phone: "555-0188",
    status: "ok",
    notes: "Reships for multiple sub-brands — always include PO number.",
    shippingAddress: {
      address_line_1: "9 Freeway Access Rd",
      address_line_2: "Dock 12",
      city: "San Jose",
      state: "CA",
      postal_code: "95110",
    },
    billingAddress: {
      address_line_1: "9 Freeway Access Rd",
      address_line_2: null,
      city: "San Jose",
      state: "CA",
      postal_code: "95110",
    },
    createdAt: "May 9, 2026",
    relatedOrders: [
      { id: "o5", orderNumber: 1038, status: "delivered", total: "$310.00", date: "Oct 25" },
    ],
    relatedTickets: [
      { id: "t6", ticketNumber: 99, title: "Damaged packaging on arrival", priority: "low", status: "in_progress" },
    ],
  },
  {
    id: "c6",
    name: "Northside Grocers",
    email: "produce@northside.example",
    phone: "555-0164",
    status: "preferred",
    notes: "New account — onboarded September 2026.",
    shippingAddress: {
      address_line_1: "505 Market St",
      address_line_2: "Receiving Bay 2",
      city: "Chicago",
      state: "IL",
      postal_code: "60614",
    },
    billingAddress: {
      address_line_1: "505 Market St",
      address_line_2: null,
      city: "Chicago",
      state: "IL",
      postal_code: "60614",
    },
    createdAt: "Sep 2, 2026",
    relatedOrders: [],
    relatedTickets: [],
  },
  {
    id: "c7",
    name: "Campus Cafe Co-op",
    email: "manager@campuscafe.example",
    phone: "555-0126",
    status: "ok",
    notes: null,
    shippingAddress: {
      address_line_1: "1 University Quad",
      address_line_2: null,
      city: "Ann Arbor",
      state: "MI",
      postal_code: "48104",
    },
    billingAddress: {
      address_line_1: "1 University Quad",
      address_line_2: "Business Office",
      city: "Ann Arbor",
      state: "MI",
      postal_code: "48104",
    },
    createdAt: "Aug 14, 2026",
    relatedOrders: [
      { id: "o10", orderNumber: 1035, status: "delivered", total: "$96.75", date: "Oct 12" },
    ],
    relatedTickets: [],
  },
  {
    id: "c8",
    name: "Sweet Tooth Parlour",
    email: "hello@sweettooth.example",
    phone: "555-0151",
    status: "shaky",
    notes: "Rescheduling deliveries frequently — reconfirm each order.",
    shippingAddress: {
      address_line_1: "77 Candy Cane Ln",
      address_line_2: null,
      city: "Nashville",
      state: "TN",
      postal_code: "37203",
    },
    billingAddress: {
      address_line_1: "77 Candy Cane Ln",
      address_line_2: null,
      city: "Nashville",
      state: "TN",
      postal_code: "37203",
    },
    createdAt: "Jun 30, 2026",
    relatedOrders: [
      { id: "o11", orderNumber: 1033, status: "delivered", total: "$204.10", date: "Oct 5" },
    ],
    relatedTickets: [
      { id: "t7", ticketNumber: 98, title: "Melted product on arrival", priority: "urgent", status: "open" },
    ],
  },
];