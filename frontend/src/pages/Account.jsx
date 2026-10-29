import { getSession } from "@/lib/auth";

function Account() {
  const session = getSession();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Profile and account settings will appear here.
      </p>

      <dl className="mt-6 max-w-sm space-y-2 text-sm">
        <div className="flex justify-between gap-4 border-b border-border pb-2">
          <dt className="text-muted-foreground">Signed in as</dt>
          <dd className="font-medium">{session?.user?.email ?? "Unknown"}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Account;