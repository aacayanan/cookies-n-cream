import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Shipments from "./pages/Shipments";
import TroubleTickets from "./pages/TroubleTickets";
import Reports from "./pages/Reports";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public: landing page and auth flow */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* App section: AppLayout renders the sidebar and redirects
            unauthenticated visitors to /login */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/trouble-tickets" element={<TroubleTickets />} />
          {/* Reports: reachable from the dashboard quick action; no sidebar entry yet */}
          <Route path="/reports" element={<Reports />} />
          <Route path="/account" element={<Account />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;