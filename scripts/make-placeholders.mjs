// Generates soft placeholder "paintings" in /public/art so the layout can be
// previewed before real artwork is added. Safe to delete once real images exist.
import { writeFileSync, mkdirSync } from "node:fs";

const pieces = [
  ["morning-field", 900, 1200, ["#F3E3C3", "#E8C98F", "#BFD0DC", "#D9A85B"]],
  ["tea-cat", 1000, 1000, ["#F4E6D8", "#E59A62", "#C9D6CF", "#8C6A55"]],
  ["harbor-blue", 1400, 990, ["#DCE6EE", "#7F9DB8", "#3F5F7A", "#F1D9B5"]],
  ["little-gardener", 900, 1270, ["#EEF0E2", "#A9BE8B", "#6F8F5C", "#D88C6C"]],
  ["still-life-pears", 1000, 1250, ["#EDE4D6", "#B7C27A", "#6F8BA4", "#C9B79C"]],
  ["night-bus", 1600, 900, ["#2F3B52", "#4B5D7E", "#F2C46D", "#1E2638"]],
  ["corn-friends", 1000, 1000, ["#FBF3E0", "#F2CF63", "#8DB07A", "#E9A07A"]],
  ["rain-window", 1000, 1400, ["#CFD8D6", "#86A28E", "#5B7A6A", "#E9E3D6"]],
  ["market-day", 1400, 1000, ["#F6E9D7", "#D9785B", "#E7BE5C", "#7FA3A0"]],
  ["quiet-hills", 1400, 700, ["#EEF0EA", "#B9C9A7", "#88A383", "#5C7559"]],
];

// Small seeded random so output is stable between runs.
function rng(seed) {
  let s = [...seed].reduce((a, c) => a + c.charCodeAt(0), 0) * 9301;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}

mkdirSync("public/art", { recursive: true });

for (const [id, w, h, [bg, a, b, c]] of pieces) {
  const r = rng(id);
  const blobs = Array.from({ length: 5 }, (_, i) => {
    const cx = (0.15 + r() * 0.7) * w;
    const cy = (0.2 + r() * 0.6) * h;
    const rx = (0.12 + r() * 0.22) * w;
    const ry = (0.08 + r() * 0.18) * h;
    const fill = [a, b, c][i % 3];
    return `<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="${rx.toFixed(0)}" ry="${ry.toFixed(0)}" fill="${fill}" opacity="${(0.45 + r() * 0.35).toFixed(2)}"/>`;
  }).join("");
  const horizon = h * (0.55 + r() * 0.2);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
<filter id="paper"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.45  0 0 0 0 0.4  0 0 0 0.08 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
<filter id="soft"><feGaussianBlur stdDeviation="${Math.round(w / 60)}"/></filter>
</defs>
<rect width="100%" height="100%" fill="${bg}"/>
<g filter="url(#soft)">${blobs}</g>
<path d="M0 ${horizon.toFixed(0)} Q ${w * 0.3} ${(horizon - h * 0.08).toFixed(0)} ${w * 0.6} ${horizon.toFixed(0)} T ${w} ${(horizon - h * 0.03).toFixed(0)} V ${h} H 0 Z" fill="${c}" opacity="0.55"/>
<rect width="100%" height="100%" fill="${bg}" filter="url(#paper)"/>
</svg>`;
  writeFileSync(`public/art/${id}.svg`, svg);
}

// Studio photo placeholder for the About page.
writeFileSync(
  "public/studio.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100">
<rect width="900" height="1100" fill="#EFE8DC"/>
<rect x="90" y="120" width="420" height="520" rx="6" fill="#DCE4EA"/>
<rect x="110" y="140" width="380" height="480" fill="#C9D6E0"/>
<path d="M110 520 Q 260 440 490 500 V 620 H 110 Z" fill="#A9BE8B" opacity=".7"/>
<rect x="0" y="760" width="900" height="340" fill="#D8C7AE"/>
<rect x="560" y="560" width="200" height="200" rx="10" fill="#6F8BA4" opacity=".55"/>
<circle cx="650" cy="520" r="70" fill="#E8C98F"/>
<rect x="180" y="800" width="260" height="30" rx="15" fill="#B08D6A"/>
<rect x="470" y="810" width="120" height="16" rx="8" fill="#2B2B2B" opacity=".5"/>
</svg>`,
);

console.log(`Wrote ${pieces.length} artwork placeholders + studio photo.`);
