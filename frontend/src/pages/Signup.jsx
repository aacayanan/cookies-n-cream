import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { setSession } from "@/lib/auth";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setMessageType("");
    setPasswordError("");

    // Client-side password match check
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Account creation failed");
      }

      if (data.session) {
        // Signed in immediately — enter the app.
        setSession({ user: data.user, session: data.session });
        navigate("/dashboard", { replace: true });
        return;
      }

      // No session: auto sign-in after creation failed (rare) — the account
      // exists, so tell the user to sign in instead.
      setMessage(data.message || "Account created — sign in to continue.");
      setMessageType("success");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unable to connect to the backend";
      setMessage(errorMessage);
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>
            Sign up to get started with Cookies-n-Cream.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="full-name">Full name</Label>
              <Input
                id="full-name"
                type="text"
                placeholder="Jane Doe"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
              />
              {passwordError && (
                <p
                  className="text-sm font-medium text-destructive"
                  role="alert"
                >
                  {passwordError}
                </p>
              )}
            </div>

            {message && (
              <p
                className={
                  messageType === "error"
                    ? "text-sm font-medium text-destructive"
                    : "text-sm font-medium text-muted-foreground"
                }
                role={messageType === "error" ? "alert" : "status"}
              >
                {message}
              </p>
            )}
          </CardContent>

          <CardFooter className="mt-6 flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>

            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}

export default Signup;