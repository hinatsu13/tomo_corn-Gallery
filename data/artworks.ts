// All artwork shown on the site lives here. There's no limit on how many.
// To add a piece: put the image in /public/art, then copy one of the entries
// below and change its details. Pieces appear in the grid in this order.
// The image's width/height are read from the file automatically.

export type Category = "painting" | "illustration";

export type Artwork = {
  id: string;
  title: string;
  category: Category;
  medium: string;
  size: string;
  year: number;
  /** Path inside /public, e.g. "/art/my-painting.jpg". */
  src: string;
  /** Describe what is in the image for screen readers. */
  alt: string;
  story?: string;
};

export const artworks: Artwork[] = [
  {
    id: "morning-field",
    title: "Morning Field",
    category: "painting",
    medium: "Gouache on paper",
    size: "30 × 40 cm",
    year: 2025,
    src: "/art/morning-field.svg",
    alt: "A soft gouache landscape of a cornfield at sunrise, pale gold rows fading into a hazy blue sky.",
    story:
      "Painted on a slow walk home after a night shift. The light only lasted ten minutes, so most of this is memory.",
  },
  {
    id: "tea-cat",
    title: "Tea Cat",
    category: "illustration",
    medium: "Digital illustration",
    size: "3000 × 3000 px",
    year: 2025,
    src: "/art/tea-cat.svg",
    alt: "A round orange cat curled inside a large teacup, steam rising in little curls above its ears.",
  },
  {
    id: "harbor-blue",
    title: "Harbor Blue",
    category: "painting",
    medium: "Watercolor on cotton paper",
    size: "42 × 29.7 cm",
    year: 2024,
    src: "/art/harbor-blue.svg",
    alt: "A watercolor harbor at dusk with small boats resting on calm blue water and a lighthouse in the distance.",
    story: "From a sketchbook trip along the coast. The boats kept moving, so none of them are quite where they were.",
  },
  {
    id: "little-gardener",
    title: "Little Gardener",
    category: "illustration",
    medium: "Ink and digital color",
    size: "A4",
    year: 2025,
    src: "/art/little-gardener.svg",
    alt: "A small child in oversized boots watering a row of sprouts that are taller than they are.",
  },
  {
    id: "still-life-pears",
    title: "Still Life with Pears",
    category: "painting",
    medium: "Oil on panel",
    size: "20 × 25 cm",
    year: 2024,
    src: "/art/still-life-pears.svg",
    alt: "An oil still life of three green pears on a linen cloth beside a chipped blue jug.",
  },
  {
    id: "night-bus",
    title: "Night Bus",
    category: "illustration",
    medium: "Digital illustration",
    size: "4000 × 2250 px",
    year: 2025,
    src: "/art/night-bus.svg",
    alt: "A glowing city bus driving through a quiet night street, passengers visible as warm silhouettes in the windows.",
    story: "Commissioned as a book cover. The client wanted it to feel like the last bus home after a good day.",
  },
  {
    id: "corn-friends",
    title: "Corn Friends",
    category: "illustration",
    medium: "Colored pencil",
    size: "15 × 15 cm",
    year: 2026,
    src: "/art/corn-friends.svg",
    alt: "Three tiny corn characters with leaf hats holding hands and smiling on a cream background.",
  },
  {
    id: "rain-window",
    title: "Rain at the Window",
    category: "painting",
    medium: "Acrylic on canvas",
    size: "50 × 70 cm",
    year: 2023,
    src: "/art/rain-window.svg",
    alt: "An acrylic painting of rain streaking down a window, with blurred green trees and a potted plant on the sill.",
  },
  {
    id: "market-day",
    title: "Market Day",
    category: "illustration",
    medium: "Gouache and ink",
    size: "A3",
    year: 2024,
    src: "/art/market-day.svg",
    alt: "A busy illustrated street market with striped awnings, fruit stalls, and shoppers carrying woven baskets.",
  },
  {
    id: "quiet-hills",
    title: "Quiet Hills",
    category: "painting",
    medium: "Oil on linen",
    size: "60 × 30 cm",
    year: 2026,
    src: "/art/quiet-hills.svg",
    alt: "A wide oil painting of rolling sage-green hills under a pale sky, with a single tree on the far ridge.",
    story: "The first painting finished in the new studio.",
  },
];
