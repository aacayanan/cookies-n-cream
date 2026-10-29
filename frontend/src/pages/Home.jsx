import { Link, Navigate } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { isAuthenticated } from "@/lib/auth";
import heroImage from "@/assets/hero.png";

// Public landing page. Basic information only for now — polish later.
function Home() {
  if (isAuthenticated()) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <main className="flex min-h-svh flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <span className="text-base font-semibold tracking-tight">ICE TRACK</span>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className={buttonVariants({ variant: "ghost" })}
          >
            Sign in
          </Link>
          <Link to="/signup" className={buttonVariants()}>
            Create account
          </Link>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row-reverse">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-56 max-w-full md:w-80"
        />
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            ICE TRACK
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Business management for customers, orders, inventory, shipments,
            and trouble tickets — one place to keep operations on track.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              to="/login"
              className={buttonVariants({ size: "lg" })}
            >
              Sign in to get started
            </Link>
            <Link
              to="/signup"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-4 text-center text-sm text-muted-foreground">
        Built by the Cookies & Cream team
      </footer>
    </main>
  );
}

export default Home;