import { cn } from "@/lib/utils";
import { formatStatus } from "@/lib/format";

// Statuses that warrant the destructive (red) pill; everything else is neutral gray.
const CRITICAL_STATUS_IDS = new Set(["delayed", "cancelled", "urgent", "shaky"]);

// Shared status pill (dashboard statuses, customer statuses, order/shipment
// statuses when those pages are built). Critical list is the single source of
// truth for which statuses render red.
export function StatusPill({ status }) {
  const critical = CRITICAL_STATUS_IDS.has(status);
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium",
        critical
          ? "border-destructive/30 bg-destructive/10 text-destructive"
          : "border-border bg-muted text-muted-foreground",
      )}
    >
      {formatStatus(status)}
    </span>
  );
}