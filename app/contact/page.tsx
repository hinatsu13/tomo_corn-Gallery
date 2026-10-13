import type { Metadata } from "next";
import Link from "next/link";
import { CornBuddy } from "@/components/Doodles";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container narrow centered">
      <CornBuddy />
      <h1>Say hello</h1>
      <p className="lede">
        Questions, collaborations, or just want to share something nice? I read every message.
      </p>

      <ul className="contact-links">
        {site.socials.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              <strong>{s.label}</strong>
              <small>{s.handle}</small>
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${site.email}`}>
            <strong>Email</strong>
            <small>{site.email}</small>
          </a>
        </li>
      </ul>

      <p className="form-note">
        Looking to order a piece? The <Link href="/commissions#inquire">commission form</Link> is the quickest way.
      </p>
    </div>
  );
}
