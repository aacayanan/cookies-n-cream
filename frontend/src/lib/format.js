// Human-readable status labels: "ready_to_ship" → "Ready to ship".
// Lives outside component files so react-refresh fast-refresh stays happy
// (component modules must only export components).
const LABEL_OVERRIDES = {
  ok: "OK", // customer status — plain capitalize would yield "Ok"
};

export function formatStatus(status) {
  if (LABEL_OVERRIDES[status]) return LABEL_OVERRIDES[status];
  const text = status.replaceAll("_", " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}