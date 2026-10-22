import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Supabase authentication will be connected later.
    setMessage("Login submitted. Authentication is not connected yet.");
  }

  return (
    <div className="login-page">
      <section className="login-card">
        <div className="login-brand">
          <div className="login-logo">IC</div>

          <div>
            <h1>ICE TRACK</h1>
            <p>Order and inventory management</p>
          </div>
        </div>

        <div className="login-heading">
          <h2>Welcome back</h2>
          <p>Enter your information to access your account.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>

          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <div className="password-heading">
            <label htmlFor="password">Password</label>
            <a href="#forgot-password">Forgot password?</a>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          <label className="remember-option">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          <button className="login-button" type="submit">
            Sign in
          </button>

          {message && <p className="login-message">{message}</p>}
        </form>

        <p className="signup-link">
          Need an account? <Link to="/signup">Create an account</Link>
        </p>
      </section>
    </div>
  );
}

export default Login;