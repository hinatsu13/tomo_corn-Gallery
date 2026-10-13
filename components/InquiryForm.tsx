"use client";

import { useState } from "react";
import { commissions, site } from "@/data/site";

// Optional: set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) to receive
// inquiries directly. Without it, the form opens the visitor's email app instead.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export default function InquiryForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    if (!endpoint) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Type: ${data.type}`,
        `Deadline: ${data.deadline || "flexible"}`,
        "",
        data.idea,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Commission inquiry: ${data.type}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-sent" role="status">
        <strong>Thank you!</strong> Your inquiry is on its way. I usually reply within 2–3 days.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="type">Commission type</label>
          <select id="type" name="type" defaultValue={commissions.types[0].name}>
            {commissions.types.map((t) => (
              <option key={t.name}>{t.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="deadline">
            Deadline <span style={{ fontWeight: 400, color: "var(--muted)" }}>(optional)</span>
          </label>
          <input id="deadline" name="deadline" type="date" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="idea">Tell me about your idea</label>
        <textarea
          id="idea"
          name="idea"
          required
          placeholder="Who or what should be in it, the mood, colors, and where it'll be used. Links to reference images help a lot!"
        />
      </div>
      <div>
        <button className="btn" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
      {state === "error" && (
        <p className="form-note" role="alert">
          Something went wrong. You can email me directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <p className="form-note">No payment is needed yet. I&apos;ll reply with a quote before anything starts.</p>
    </form>
  );
}
