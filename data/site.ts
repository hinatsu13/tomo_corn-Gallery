// Site-wide settings and commission details. Edit this file to update the site.

export const site = {
  name: "tomo_corn",
  tagline: "Painter & illustrator making quiet, cozy pictures.",
  email: "tomocorn.contact@gmail.com",
  socials: [
    { label: "X", handle: "@tomonari_corn", href: "https://x.com/tomonari_corn" },
    { label: "YouTube", handle: "@tomo_corn", href: "https://www.youtube.com/@tomo_corn" },
  ],
};

export type CommissionStatus = "open" | "closed";

export const commissions = {
  status: "open" as CommissionStatus,
  /** Set to null to hide the slot count. */
  slotsLeft: 3 as number | null,
  turnaround: "2–4 weeks from sketch approval",
  types: [
    {
      name: "Sketch",
      description: "Clean pencil or ink sketch, one character, simple background.",
      price: "from $40",
    },
    {
      name: "Illustration",
      description: "Full color illustration, up to two characters, simple scene.",
      price: "from $120",
    },
    {
      name: "Painting",
      description: "Original gouache or watercolor on paper, shipped to you.",
      price: "from $220",
    },
  ],
  steps: [
    { title: "Inquire", text: "Tell me your idea, size, and timeline using the form below." },
    { title: "Sketch", text: "I send a rough sketch. A 50% deposit starts the work." },
    { title: "Revisions", text: "Up to two rounds of changes at the sketch stage." },
    { title: "Final", text: "I finish the piece and send the files (or ship the original)." },
  ],
  willDraw: ["Original characters", "Pets and animals", "Fan art", "Cozy scenes and food", "Landscapes"],
  wontDraw: ["NSFW", "Hateful or political content", "Heavy mecha or complex machinery", "Copying another artist's style"],
};
