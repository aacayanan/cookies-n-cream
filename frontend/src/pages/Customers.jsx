import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search, UserPlus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
import { customers } from "@/lib/customer-data";

function Customers() {
  const [query, setQuery] = useState("");

  // Plain-text match against name, email, and phone.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter((customer) =>
      [customer.name, customer.email, customer.phone]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Customers</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Customer records reused by orders, shipments, and trouble tickets.
            Data shown is placeholder content until the backend is connected.
          </p>
        </div>
        <Link to="/customers/new" className={buttonVariants()}>
          <UserPlus aria-hidden="true" />
          Add customer
        </Link>
      </div>

      <Card className="mt-6">
        <CardHeader className="border-b border-border pb-4">
          <CardTitle>Customer list</CardTitle>
          <CardAction>
            <span className="text-sm text-muted-foreground">
              {filtered.length} of {customers.length}
            </span>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="pb-4">
            <Label htmlFor="customer-search" className="sr-only">
              Search customers
            </Label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="customer-search"
                type="search"
                placeholder="Search by name, email, or phone…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="border-t border-border py-6 text-center text-sm text-muted-foreground">
              No customers match “{query}”.
            </p>
          ) : (
            <ul className="divide-y divide-border border-t border-border">
              {filtered.map((customer) => (
                <li key={customer.id}>
                  <Link
                    to={`/customers/${customer.id}`}
                    className="flex items-center justify-between gap-3 py-3 hover:bg-muted/60"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {customer.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {customer.email}
                        {customer.phone ? ` · ${customer.phone}` : ""}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <StatusPill status={customer.status} />
                      <ChevronRight
                        className="size-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Customers;