import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import OrderEntry from "./pages/OrderEntry";
import Inventory from "./pages/Inventory";
import ShipmentTracking from "./pages/ShipmentTracking";
import TroubleTickets from "./pages/TroubleTickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order-entry" element={<OrderEntry />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/shipment-tracking" element={<ShipmentTracking />} />
        <Route path="/trouble-tickets" element={<TroubleTickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;