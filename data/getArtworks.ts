import "server-only";
import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import { artworks, type Artwork } from "./artworks";

export type SizedArtwork = Artwork & { width: number; height: number };

/** Adds each image's pixel size (read from /public at build time) so the grid keeps its proportions. */
export function getArtworks(): SizedArtwork[] {
  const seen = new Set<string>();
  for (const { id } of artworks) {
    if (seen.has(id)) throw new Error(`Two artworks share the id "${id}" in data/artworks.ts. Each id must be unique.`);
    seen.add(id);
  }

  return artworks.map((art) => {
    const file = path.join(process.cwd(), "public", art.src);
    let size;
    try {
      size = imageSize(readFileSync(file));
    } catch {
      throw new Error(`Artwork "${art.id}": couldn't read image at public${art.src}. Check the file name in data/artworks.ts.`);
    }
    // Phone photos can be stored sideways with a rotation flag; swap so proportions match what's shown.
    const rotated = size.orientation !== undefined && size.orientation >= 5;
    return {
      ...art,
      width: rotated ? size.height : size.width,
      height: rotated ? size.width : size.height,
    };
  });
}
