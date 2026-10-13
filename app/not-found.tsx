import Link from "next/link";
import { CornBuddy } from "@/components/Doodles";

export default function NotFound() {
  return (
    <div className="container narrow centered" style={{ paddingTop: "3rem" }}>
      <CornBuddy mood="sleepy" />
      <h1>This page wandered off</h1>
      <p className="lede">It might be napping somewhere in the cornfield. Let&apos;s head back.</p>
      <Link href="/" className="btn">
        Back to the work
      </Link>
    </div>
  );
}
