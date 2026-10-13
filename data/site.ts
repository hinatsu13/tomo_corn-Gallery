// Site-wide settings and commission details. Edit this file to update the site.

export const site = {
  name: "tomo_corn",
  tagline: "Anime-style illustrator drawing characters, fan art, and cozy little moments.",
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
      description: "Rough anime-style sketch, one character, bust-up, light color.",
      price: "from $40",
    },
    {
      name: "Chibi",
      description: "Cute chibi character in full color, great for icons and stickers.",
      price: "from $60",
    },
    {
      name: "Illustration",
      description: "Full color anime-style illustration, up to two characters, simple background.",
      price: "from $120",
    },
  ],
  steps: [
    { title: "Inquire", text: "Tell me your idea, size, and timeline using the form below." },
    { title: "Sketch", text: "I send a rough sketch. A 50% deposit starts the work." },
    { title: "Revisions", text: "Up to two rounds of changes at the sketch stage." },
    { title: "Final", text: "I finish the piece and send the full-size files." },
  ],
  willDraw: ["Original characters", "Pets and animals", "Fan art", "Chibi and mascots", "Cozy scenes and food"],
  wontDraw: ["NSFW", "Hateful or political content", "Heavy mecha or complex machinery", "Realism or styles other than anime"],
};
