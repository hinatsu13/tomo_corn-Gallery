import Link from "next/link";
import { commissions } from "@/data/site";

export function statusLabel() {
  if (commissions.status === "closed") return "Commissions closed";
  if (commissions.slotsLeft !== null) {
    return `Commissions open · ${commissions.slotsLeft} ${commissions.slotsLeft === 1 ? "slot" : "slots"} left`;
  }
  return "Commissions open";
}

export default function StatusPill({ link = false }: { link?: boolean }) {
  const className = `status-pill${commissions.status === "closed" ? " closed" : ""}`;
  return link ? (
    <Link href="/commissions" className={className}>
      {statusLabel()}
    </Link>
  ) : (
    <span className={className}>{statusLabel()}</span>
  );
}
