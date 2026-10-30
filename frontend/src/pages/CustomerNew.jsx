import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusPill } from "@/components/StatusPill";
import { cn } from "@/lib/utils";

// Must match the Input component's styling so <select>s blend into the form.
const fieldClasses =
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function CustomerNew() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "ok",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    postal_code: "",
    billingSame: true,
    billing_line_1: "",
    billing_line_2: "",
    billing_city: "",
    billing_state: "",
    billing_postal: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  function update(field) {
    return (event) => {
      const value = event.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      // Clear this field's error as soon as the user edits it.
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Enter a valid email address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Placeholder only — no backend yet. The created record would POST to
    // /api/customers and redirect to its detail page once the API exists.
    console.log("placeholder customer create:", form);
    navigate("/customers");
  }

  return (
    <div className="max-w-2xl">
      <Link
        to="/customers"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to customers
      </Link>

      <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        Add customer
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        New records are placeholder-only until the backend is connected.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Name and contact details reused by orders and shipments.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Field id="name" label="Name" error={errors.name}>
              <Input
                id="name"
                value={form.name}
                onChange={update("name")}
                placeholder="ACME Distribution"
                aria-invalid={Boolean(errors.name)}
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="email" label="Email" error={errors.email}>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="orders@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>
              <Field id="phone" label="Phone">
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="555-0142"
                />
              </Field>
            </div>

            <Field id="status" label="Status">
              <select
                id="status"
                value={form.status}
                onChange={update("status")}
                className={fieldClasses}
              >
                <option value="preferred">Preferred</option>
                <option value="ok">OK</option>
                <option value="shaky">Shaky</option>
              </select>
            </Field>
            <div>
              <p className="mb-1.5 text-xs text-muted-foreground">
                Preview:
              </p>
              <StatusPill status={form.status} />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Shipping address</CardTitle>
            <CardDescription>
              Fields match the schema’s address columns.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Field id="address_line_1" label="Address line 1">
              <Input
                id="address_line_1"
                value={form.address_line_1}
                onChange={update("address_line_1")}
                placeholder="1200 Harbor Blvd"
              />
            </Field>
            <Field id="address_line_2" label="Address line 2 (optional)">
              <Input
                id="address_line_2"
                value={form.address_line_2}
                onChange={update("address_line_2")}
                placeholder="Suite 400"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field id="city" label="City">
                <Input
                  id="city"
                  value={form.city}
                  onChange={update("city")}
                  placeholder="Seattle"
                />
              </Field>
              <Field id="state" label="State">
                <Input
                  id="state"
                  value={form.state}
                  onChange={update("state")}
                  placeholder="WA"
                />
              </Field>
              <Field id="postal_code" label="Postal code">
                <Input
                  id="postal_code"
                  value={form.postal_code}
                  onChange={update("postal_code")}
                  placeholder="98104"
                />
              </Field>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Billing address</CardTitle>
            <CardDescription>
              Not modeled in the schema yet — separate billing address is
              placeholder-only for now.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="size-4 accent-primary"
                checked={form.billingSame}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    billingSame: event.target.checked,
                  }))
                }
              />
              Same as shipping address
            </label>

            {!form.billingSame && (
              <>
                <Field id="billing_line_1" label="Address line 1">
                  <Input
                    id="billing_line_1"
                    value={form.billing_line_1}
                    onChange={update("billing_line_1")}
                    placeholder="1200 Harbor Blvd"
                  />
                </Field>
                <Field id="billing_line_2" label="Address line 2 (optional)">
                  <Input
                    id="billing_line_2"
                    value={form.billing_line_2}
                    onChange={update("billing_line_2")}
                    placeholder="Attn: Accounts Payable"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field id="billing_city" label="City">
                    <Input
                      id="billing_city"
                      value={form.billing_city}
                      onChange={update("billing_city")}
                      placeholder="Seattle"
                    />
                  </Field>
                  <Field id="billing_state" label="State">
                    <Input
                      id="billing_state"
                      value={form.billing_state}
                      onChange={update("billing_state")}
                      placeholder="WA"
                    />
                  </Field>
                  <Field id="billing_postal" label="Postal code">
                    <Input
                      id="billing_postal"
                      value={form.billing_postal}
                      onChange={update("billing_postal")}
                      placeholder="98104"
                    />
                  </Field>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Optional internal notes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Field id="notes" label="Notes">
              <textarea
                id="notes"
                value={form.notes}
                onChange={update("notes")}
                rows={3}
                className={cn(
                  fieldClasses,
                  "h-auto resize-y py-2",
                )}
                placeholder="Delivery preferences, terms, account history…"
              />
            </Field>
          </CardContent>
          <CardFooter className="mt-4 flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              to="/customers"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Cancel
            </Link>
            <Button type="submit">Save customer</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default CustomerNew;