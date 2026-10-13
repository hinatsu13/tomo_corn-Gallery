import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import StatusPill from "@/components/StatusPill";
import { Scribble } from "@/components/Doodles";
import { commissions, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Commissions",
  description: `Commission an anime-style illustration from ${site.name}. Prices, process, and turnaround.`,
};

export default function CommissionsPage() {
  const isOpen = commissions.status === "open";

  return (
    <div className="container narrow">
      <div className="commission-hero">
        <StatusPill />
      </div>
      <h1>
        {isOpen ? (
          <>
            Commissions <Scribble>open!</Scribble>
          </>
        ) : (
          "Commissions"
        )}
      </h1>
      <p className="lede">
        {isOpen
          ? "I'd love to draw something just for you in my anime style: your OC, a favorite character, or your pet."
          : "Commissions are closed right now. Follow me on X to hear when they reopen."}
      </p>
      {isOpen && (
        <a href="#inquire" className="btn" style={{ marginTop: "0.5rem" }}>
          Start an inquiry ↓
        </a>
      )}

      <section className="section" aria-labelledby="types">
        <h2 id="types">What you can order</h2>
        <div className="price-grid">
          {commissions.types.map((t) => (
            <div className="card" key={t.name}>
              <h3>{t.name}</h3>
              <p>{t.description}</p>
              <p className="price">{t.price}</p>
            </div>
          ))}
        </div>
        <p className="form-note" style={{ marginTop: "1rem" }}>
          Final price depends on size, detail, and number of characters. Commercial use is quoted separately.
        </p>
      </section>

      <section className="section" aria-labelledby="process">
        <h2 id="process">How it works</h2>
        <ol className="steps">
          {commissions.steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="turnaround">
          <span aria-hidden="true">⏳</span>
          <span>
            <strong>Turnaround:</strong> {commissions.turnaround}
          </span>
        </div>
      </section>

      <section className="section" aria-labelledby="scope">
        <h2 id="scope">What I&apos;ll draw</h2>
        <div className="two-col">
          <div>
            <h3>Happy to draw</h3>
            <ul className="tick-list yes">
              {commissions.willDraw.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Won&apos;t draw</h3>
            <ul className="tick-list no">
              {commissions.wontDraw.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="inquire" aria-labelledby="inquire-title" style={{ scrollMarginTop: "90px" }}>
        <h2 id="inquire-title">{isOpen ? "Send an inquiry" : "Get notified"}</h2>
        {isOpen ? (
          <InquiryForm />
        ) : (
          <p>
            Commissions are closed for now, but you&apos;re welcome to{" "}
            <a href={`mailto:${site.email}`}>email me</a> or follow along on{" "}
            <a href={site.socials[0].href} target="_blank" rel="noopener noreferrer">
              X
            </a>
            .
          </p>
        )}
      </section>
    </div>
  );
}
