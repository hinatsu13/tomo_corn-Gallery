// All artwork shown on the site lives here. There's no limit on how many.
// To add a piece: put the image in /public/art, then copy one of the entries
// below and change its details. Pieces appear in the grid in this order.
// The image's width/height are read from the file automatically.

export type Artwork = {
  id: string;
  title: string;
  medium: string;
  size: string;
  year: number;
  /** Path inside /public, e.g. "/art/my-drawing.jpg". */
  src: string;
  /** Describe what is in the image for screen readers. */
  alt: string;
  story?: string;
};

export const artworks: Artwork[] = [
  {
    id: "ashveil-summer",
    title: "Ashveil Summer",
    medium: "Digital illustration",
    size: "2039 × 1378 px",
    year: 2026,
    src: "/art/ashveil-summer.jpg",
    alt: "An anime-style beach scene: a dark-haired character in a straw hat and orange floral shirt holds an iced orange drink beside a monkey plush, while two small friends in straw hats play by the turquoise sea.",
  },
  {
    id: "frieren",
    title: "Frieren",
    medium: "Digital illustration",
    size: "1200 × 1800 px",
    year: 2026,
    src: "/art/frieren.jpg",
    alt: "An elf with long pale twin tails and green eyes wears a crown of blue flowers and a white and gold robe, hugging three small plush dolls under a bright blue sky.",
  },
  {
    id: "three-panel-comic",
    title: "Three-Panel Comic",
    medium: "Digital comic, screentone",
    size: "1080 × 1920 px",
    year: 2026,
    src: "/art/three-panel-comic.jpg",
    alt: "A black and white three-panel comic of two horse-eared girls in sailor uniforms: one laughs and points, turns away giggling, then goes quiet when the other rests a hand on her shoulder.",
  },
  {
    id: "breakfast",
    title: "Breakfast",
    medium: "Digital illustration",
    size: "1920 × 1080 px",
    year: 2026,
    src: "/art/breakfast.jpg",
    alt: "Seen from above, a black-haired character in a blue apron looks up with a small smile, holding a frying pan with an egg and sausages in one hand and pointing a wooden spatula at the viewer.",
  },
  {
    id: "art-trade",
    title: "Art Trade",
    medium: "Digital illustration",
    size: "1200 × 1800 px",
    year: 2026,
    src: "/art/art-trade.jpg",
    alt: "Two blonde, green-eyed characters pose together on a mint green background, one with fox ears making a peace sign, each holding a card with a handwritten X and YouTube name.",
  },
  {
    id: "still-in-love",
    title: "Still in Love",
    medium: "Digital illustration",
    size: "2039 × 1378 px",
    year: 2026,
    src: "/art/still-in-love.jpg",
    alt: "A horse-eared girl with long brown hair, red eyes and a red dress with a sheer veil raises a white-gloved hand as her hair sweeps behind her against a red background.",
  },
  {
    id: "heart-hands",
    title: "Heart Hands",
    medium: "Digital illustration",
    size: "1000 × 1000 px",
    year: 2025,
    src: "/art/heart-hands.jpg",
    alt: "A blonde, green-eyed character with a braid tied with a tiny corn cob smiles while a friend makes a heart shape with their hands above, surrounded by a penguin, two chibi plushies and a blue-haired friend peeking in.",
  },
  {
    id: "harumasa",
    title: "Harumasa",
    medium: "Digital illustration",
    size: "1378 × 2039 px",
    year: 2025,
    src: "/art/harumasa.jpg",
    alt: "A dark blue-haired character with golden eyes lies on a pillow in a bar of light, holding up a white cat plush with yellow ears, with pills scattered on the dark floor.",
  },
  {
    id: "phainon",
    title: "Phainon",
    medium: "Digital illustration",
    size: "1000 × 1000 px",
    year: 2025,
    src: "/art/phainon.jpg",
    alt: "A chibi character with fluffy pale blue hair and bright blue eyes grins and makes a peace sign on a light blue background.",
  },
  {
    id: "dr-ratio",
    title: "Dr. Ratio",
    medium: "Digital illustration",
    size: "1378 × 2039 px",
    year: 2025,
    src: "/art/dr-ratio.jpg",
    alt: "A purple-haired character in gold glasses and a gold laurel hairpin reads a book with an apple balanced on his head, a purple cat curled in front, and a rubber duck floating in a starry blue background.",
  },
  {
    id: "himeko-sketch",
    title: "Himeko",
    medium: "Digital sketch",
    size: "800 × 600 px",
    year: 2025,
    src: "/art/himeko-sketch.jpg",
    alt: "A loose sketch of a woman with golden eyes, her long hair hatched in red and a black flower ornament at the side of her head, with a handwritten Japanese note in the corner.",
  },
];
