import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  CircleUserRound,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Package,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { isAuthenticated, clearSession } from "@/lib/auth";

// Single source of truth for the app section: the sidebar reads from this,
// so adding a page is one entry here plus one <Route> in App.jsx.
const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/customers", label: "Customers", icon: Users },
  { to: "/orders", label: "Orders", icon: ShoppingCart },
  { to: "/inventory", label: "Inventory", icon: Package },
  { to: "/shipments", label: "Shipments", icon: Truck },
  { to: "/trouble-tickets", label: "Trouble Tickets", icon: LifeBuoy },
  { to: "/account", label: "Account", icon: CircleUserRound },
];

function navLinkClasses({ isActive }) {
  return [
    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-muted text-foreground"
      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
  ].join(" ");
}

function AppLayout() {
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  function handleSignOut() {
    clearSession();
    navigate("/login");
  }

  return (
    <div className="flex min-h-svh bg-background">
      <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-5 py-4">
          <span className="text-base font-semibold tracking-tight">
            ICE TRACK
          </span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={navLinkClasses}>
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-border p-3">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground"
            onClick={handleSignOut}
          >
            <LogOut className="size-4" aria-hidden="true" />
            Sign out
          </Button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;