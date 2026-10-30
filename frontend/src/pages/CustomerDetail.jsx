import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusPill } from "@/components/StatusPill";
import { formatStatus } from "@/lib/format";
import { cn } from "@/lib/utils";
import { customers } from "@/lib/customer-data";

// Matches the Input component's styling so the edit-mode <select> blends in.
const fieldClasses =
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

// Seed the edit form from a mock record (or blanks when not found).
function formFrom(record) {
  if (!record) {
    return {
      name: "",
      email: "",
      phone: "",
      status: "ok",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      postal_code: "",
      notes: "",
    };
  }
  return {
    name: record.name,
    email: record.email,
    phone: record.phone,
    status: record.status,
    address_line_1: record.shippingAddress.address_line_1,
    address_line_2: record.shippingAddress.address_line_2 ?? "",
    city: record.shippingAddress.city,
    state: record.shippingAddress.state,
    postal_code: record.shippingAddress.postal_code,
    notes: record.notes ?? "",
  };
}

function AddressBlock({ title, address, description }) {
  return (
    <Card>
      <CardHeader className="border-b border-border pb-4">
        <CardTitle>{title}</CardTitle>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <address className="text-sm not-italic leading-relaxed">
          {address.address_line_1}
          {address.address_line_2 ? (
            <>
              <br />
              {address.address_line_2}
            </>
          ) : null}
          <br />
          {address.city}, {address.state} {address.postal_code}
        </address>
      </CardContent>
    </Card>
  );
}

function CustomerDetail() {
  const { id } = useParams();
  const customer = customers.find((c) => c.id === id);
  // Local edits applied after "Save" — mock only (no backend); resets when
  // navigating to a different customer or reloading the page.
  const [edits, setEdits] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prevId, setPrevId] = useState(id);
  const [form, setForm] = useState(() => formFrom(customer));

  // Drop saved edits when navigating between customers — adjust state during
  // render (React's recommended pattern; setState-in-effect is banned).
  if (prevId !== id) {
    setPrevId(id);
    setEdits(null);
    setIsEditing(false);
    setForm(formFrom(customer));
  }

  function update(field) {
    return (event) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  if (!customer) {
    return (
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Customer not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          No customer with id “{id}”.
        </p>
        <Link
          to="/customers"
          className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
        >
          Back to customers
        </Link>
      </div>
    );
  }

  // What the page displays: saved edits layered over the mock record.
  const display = edits ?? customer;

  function handleSave(event) {
    event.preventDefault();
    // Placeholder only — no backend yet. Would PUT /api/customers/:id here.
    console.log("placeholder customer update:", customer.id, form);
    setEdits({
      ...display,
      name: form.name,
      email: form.email,
      phone: form.phone,
      status: form.status,
      notes: form.notes || null,
      shippingAddress: {
        address_line_1: form.address_line_1,
        address_line_2: form.address_line_2 || null,
        city: form.city,
        state: form.state,
        postal_code: form.postal_code,
      },
    });
    setIsEditing(false);
  }

  function handleCancel() {
    setForm(formFrom(display));
    setIsEditing(false);
  }

  return (
    <div>
      <Link
        to="/customers"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to customers
      </Link>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            {display.name}
          </h1>
          <StatusPill status={display.status} />
        </div>
        {!isEditing && (
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => {
              setForm(formFrom(display));
              setIsEditing(true);
            }}
          >
            <Pencil className="size-4" aria-hidden="true" />
            Edit
          </Button>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Added {display.createdAt}
        {display.phone ? ` · ${display.phone}` : ""}
      </p>

      {isEditing ? (
        <form onSubmit={handleSave} noValidate>
          <Card className="mt-6">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Edit customer</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="edit-email">Email</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="edit-phone">Phone</Label>
                  <Input
                    id="edit-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-status">Status</Label>
                <select
                  id="edit-status"
                  value={form.status}
                  onChange={update("status")}
                  className={fieldClasses}
                >
                  <option value="preferred">Preferred</option>
                  <option value="ok">OK</option>
                  <option value="shaky">Shaky</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-2 sm:col-span-3">
                  <Label htmlFor="edit-address-line-1">Address line 1</Label>
                  <Input
                    id="edit-address-line-1"
                    value={form.address_line_1}
                    onChange={update("address_line_1")}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-3">
                  <Label htmlFor="edit-address-line-2">
                    Address line 2 (optional)
                  </Label>
                  <Input
                    id="edit-address-line-2"
                    value={form.address_line_2}
                    onChange={update("address_line_2")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="edit-city">City</Label>
                  <Input id="edit-city" value={form.city} onChange={update("city")} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="edit-state">State</Label>
                  <Input
                    id="edit-state"
                    value={form.state}
                    onChange={update("state")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="edit-postal">Postal code</Label>
                  <Input
                    id="edit-postal"
                    value={form.postal_code}
                    onChange={update("postal_code")}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-notes">Notes</Label>
                <textarea
                  id="edit-notes"
                  value={form.notes}
                  onChange={update("notes")}
                  rows={3}
                  className={cn(fieldClasses, "h-auto resize-y py-2")}
                />
              </div>
            </CardContent>
            <div className="flex justify-end gap-3 px-(--card-spacing) pb-(--card-spacing)">
              <Button type="button" variant="ghost" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </div>
          </Card>
        </form>
      ) : (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Email</dt>
                <dd className="truncate">{display.email}</dd>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="tabular-nums">{display.phone || "—"}</dd>
                <dt className="text-muted-foreground">Status</dt>
                <dd>
                  <StatusPill status={display.status} />
                </dd>
                <dt className="text-muted-foreground">Notes</dt>
                <dd>{display.notes || "—"}</dd>
              </dl>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <AddressBlock
              title="Shipping address"
              address={display.shippingAddress}
            />
            <AddressBlock
              title="Billing address"
              address={display.billingAddress}
              description="Separate billing address — not modeled in the schema yet."
            />
          </div>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Related orders</CardTitle>
              <CardAction>
                <Link
                  to="/orders"
                  className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  View all
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              {display.relatedOrders.length === 0 ? (
                <p className="py-3 text-sm text-muted-foreground">
                  No orders yet.
                </p>
              ) : (
                <ul className="divide-y divide-border">
                  {display.relatedOrders.map((order) => (
                    <li
                      key={order.id}
                      className="flex items-center justify-between gap-3 py-2.5 first:pt-0"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          #{order.orderNumber}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {order.total} · {order.date}
                        </p>
                      </div>
                      <StatusPill status={order.status} />
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border pb-4">
              <CardTitle>Related trouble tickets</CardTitle>
              <CardAction>
                <Link
                  to="/trouble-tickets"
                  className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  View all
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              {display.relatedTickets.length === 0 ? (
                <p className="py-3 text-sm text-muted-foreground">
                  No tickets.
                </p>
              ) : (
                <ul className="divide-y divide-border">
                  {display.relatedTickets.map((ticket) => (
                    <li
                      key={ticket.id}
                      className="flex items-start justify-between gap-3 py-2.5 first:pt-0"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {ticket.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          #{ticket.ticketNumber} ·{" "}
                          {formatStatus(ticket.status)}
                        </p>
                      </div>
                      <StatusPill status={ticket.priority} />
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default CustomerDetail;