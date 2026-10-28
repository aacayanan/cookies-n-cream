import "./ShipmentTracking.css"

function Navbar() {
  return (
    <nav className = "navbar">
      <div className = "logo">IceTracker</div>

      <div className = "nav-links">
        <a href = "/">Home</a>
        <a className = "active" href = "/Shipping">Shipping and Tracking</a>
        <a href = "/orders">Orders</a>
        <a href = "/support">Support</a>
      </div>

      <button className = "admin-button">Administrator</button>

      <div className = "profile-icon">Profile Icon</div>
    </nav>
  );
}

function OrderCard({orderNumber, description, status}){
  return(
    <div className = "order-card">
      <div className = "order-info">
        <h2>Order #{orderNumber}</h2>
        <p>{description}</p>
      </div>

      <div className = {`status ${status.toLowerCase()}`}>{status}</div>
    </div>
  );
}

function ShipmentTracking() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <section className="hero">
          <h1>Shipping and Tracking!</h1>
          <p>Track your order here!</p>
        </section>

        <section className="orders">
          <OrderCard
            orderNumber="12345"
            description="Cookies and cream ice cream order"
            status="Active"
          />

          <OrderCard
            orderNumber="67890"
            description="Vanilla ice cream order"
            status="Complete"
          />
        </section>
      </main>
    </div>
  );
}

export default ShipmentTracking;