"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SizedArtwork } from "@/data/getArtworks";

// SVG placeholders can't go through Next's optimizer; real JPG/PNG files will.
const isSvg = (src: string) => src.endsWith(".svg");

export default function Gallery({ artworks: visible }: { artworks: SizedArtwork[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const current = index === null ? null : visible[index];

  const open = useCallback((i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  // Keep the URL in sync so a single piece can be linked to (e.g. from X).
  useEffect(() => {
    if (current) history.replaceState(null, "", `#${current.id}`);
    else if (location.hash) history.replaceState(null, "", location.pathname);
  }, [current]);

  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    const i = visible.findIndex((a) => a.id === id);
    if (i >= 0) open(i);
  }, [visible, open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  return (
    <>
      <div className="masonry">
        {visible.map((art, i) => (
          <button key={art.id} className="tile" onClick={() => open(i)} aria-label={`View ${art.title}`}>
            <Image
              src={art.src}
              alt={art.alt}
              width={art.width}
              height={art.height}
              sizes="(max-width: 600px) 50vw, (max-width: 1120px) 33vw, 360px"
              unoptimized={isSvg(art.src)}
              priority={i < 3}
            />
            <span className="tile-caption">
              <span>{art.title}</span>
              <span>{art.year}</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current ? current.title : "Artwork"}
        onClose={() => setIndex(null)}
        onClick={(e) => {
          // Clicking the empty area around the image closes it.
          if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("lightbox-figure")) {
            dialogRef.current?.close();
          }
        }}
      >
        {current && (
          <>
            <figure
              className="lightbox-figure"
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
            >
              <Image
                key={current.id}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(max-width: 860px) 100vw, 75vw"
                unoptimized={isSvg(current.src)}
                quality={90}
              />
            </figure>

            <div className="lightbox-info">
              <h2>{current.title}</h2>
              <dl>
                <dt>Medium</dt>
                <dd>{current.medium}</dd>
                <dt>Size</dt>
                <dd>{current.size}</dd>
                <dt>Year</dt>
                <dd>{current.year}</dd>
              </dl>
              {current.story && <p className="lightbox-story">{current.story}</p>}
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "2rem" }}>
                Want something like this? <a href="/commissions#inquire">Commission a piece →</a>
              </p>
            </div>

            <button className="lb-btn lb-close" onClick={() => dialogRef.current?.close()} aria-label="Close">
              <Icon d="M6 6l12 12M18 6L6 18" />
            </button>
            {visible.length > 1 && (
              <>
                <button className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous artwork">
                  <Icon d="M15 5l-7 7 7 7" />
                </button>
                <button className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next artwork">
                  <Icon d="M9 5l7 7-7 7" />
                </button>
              </>
            )}
          </>
        )}
      </dialog>
    </>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
