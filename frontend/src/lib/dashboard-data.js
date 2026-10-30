// PLACEHOLDER DATA for the Dashboard — visual mock only; no backend hookup yet.
// Shapes mirror the enums/tables in supabase/migrations/20261024000000_initial_schema.sql
// so the later swap to API fetches can return the same structure.
// Note: "overdue invoices" has no schema backing yet (no invoices/payments table).

export const kpis = [
  { id: "open-orders", label: "Open orders", value: 18, hint: "pending + processing" },
  { id: "ready-to-ship", label: "Ready for shipment", value: 5, hint: "packed, awaiting pickup" },
  { id: "in-transit", label: "Shipments in transit", value: 12, hint: "across all carriers" },
  { id: "low-stock", label: "Low-stock inventory", value: 4, hint: "at or below reorder level" },
  { id: "open-tickets", label: "Open trouble tickets", value: 3, hint: "1 urgent" },
  // Placeholder: schema has no invoices table yet — future backend concern.
  { id: "overdue-invoices", label: "Overdue invoices", value: 2, hint: "past due" },
];

export const alerts = [
  // severity: "danger" | "info"; `to` optional (omit when no page backs it yet)
  { id: "a1", severity: "danger", text: "Shipment TRK-8842193 delayed — weather hold in transit.", to: "/shipments" },
  { id: "a2", severity: "danger", text: "4 inventory items are at or below reorder level.", to: "/inventory" },
  { id: "a3", severity: "danger", text: "Urgent ticket #104 has been open for 2 days.", to: "/trouble-tickets" },
  { id: "a4", severity: "info", text: "2 invoices are overdue." },
];

export const recentOrders = [
  // statuses from the order_status enum; total is mock (backend will sum order_items.line_total)
  { id: "o1", orderNumber: 1042, customer: "ACME Distribution", status: "processing", total: "$412.50", date: "Oct 28" },
  { id: "o2", orderNumber: 1041, customer: "Globex Corp", status: "ready_to_ship", total: "$1,240.00", date: "Oct 27" },
  { id: "o3", orderNumber: 1040, customer: "Initech", status: "pending", total: "$89.99", date: "Oct 27" },
  { id: "o4", orderNumber: 1039, customer: "Umbrella Foods", status: "shipped", total: "$675.20", date: "Oct 26" },
  { id: "o5", orderNumber: 1038, customer: "Hooli Logistics", status: "delivered", total: "$310.00", date: "Oct 25" },
];

export const recentShipments = [
  // statuses from the shipment_status enum
  { id: "s1", trackingNumber: "TRK-8842193", carrier: "FrostLine Freight", status: "delayed", eta: "Nov 2" },
  { id: "s2", trackingNumber: "TRK-8841057", carrier: "FrostLine Freight", status: "in_transit", eta: "Oct 31" },
  { id: "s3", trackingNumber: "TRK-8840912", carrier: "Polar Parcel", status: "in_transit", eta: "Oct 30" },
  { id: "s4", trackingNumber: "TRK-8839844", carrier: "Polar Parcel", status: "delivered", eta: "Delivered Oct 28" },
  { id: "s5", trackingNumber: "TRK-8838701", carrier: "CryoExpress", status: "shipped", eta: "Nov 4" },
];

export const lowStockItems = [
  // low-stock = quantityOnHand <= reorderLevel (per schema check)
  { id: "i1", sku: "DRI-BLK-10", name: "Dry Ice Blocks 10lb", quantityOnHand: 5, reorderLevel: 20 },
  { id: "i2", sku: "ICE-VAN-05", name: "Vanilla Extract 5 gal", quantityOnHand: 3, reorderLevel: 10 },
  { id: "i3", sku: "PKG-TAPE-02", name: "Packaging Tape 2in", quantityOnHand: 12, reorderLevel: 12 },
  { id: "i4", sku: "PKG-LIN-M", name: "Insulated Liners M", quantityOnHand: 40, reorderLevel: 50 },
];

export const openTickets = [
  // priority/status from the ticket_priority / ticket_status enums
  { id: "t1", ticketNumber: 104, title: "Melted product on arrival", priority: "urgent", status: "open" },
  { id: "t2", ticketNumber: 103, title: "Wrong address on shipment", priority: "high", status: "in_progress" },
  { id: "t3", ticketNumber: 101, title: "Missing item from order", priority: "medium", status: "open" },
];

export const quickActions = [
  // `icon` is a string key, resolved to a lucide component in Dashboard.jsx
  { id: "create-order", label: "Create order", to: "/orders", icon: "plus" },
  { id: "add-customer", label: "Add customer", to: "/customers", icon: "user-plus" },
  { id: "view-inventory", label: "View inventory", to: "/inventory", icon: "package" },
  { id: "track-shipment", label: "Track shipment", to: "/shipments", icon: "map-pin" },
  { id: "new-ticket", label: "Create trouble ticket", to: "/trouble-tickets", icon: "life-buoy" },
  { id: "view-reports", label: "View reports", to: "/reports", icon: "bar-chart" },
];