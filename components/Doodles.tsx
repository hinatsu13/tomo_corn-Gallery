// Small hand-drawn details. Replace CornBuddy with the artist's own doodle
// (e.g. an exported SVG) whenever it's ready.

type DoodleProps = { className?: string; mood?: "happy" | "wink" | "sleepy" };

/** The little corn mascot used beside the name, on About, Contact and 404. */
export function CornBuddy({ className = "doodle", mood = "happy" }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" aria-hidden="true">
      {/* cob */}
      <path
        d="M30 6c10 0 15.5 12 15 27-.4 13-5 25-15 25S14.6 46 14.4 33C14 18 20 6 30 6Z"
        fill="#F2CF63"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* kernels */}
      <g stroke="#D9A83B" strokeWidth="1.4" strokeLinecap="round">
        <path d="M22 18c5 1.2 11 1.2 16 0M19.5 27c6 1.3 15 1.3 21 0M24 11.5c4 .8 8 .8 12 0" />
        <path d="M30 8v8M24.5 12l-.8 8M35.5 12l.8 8" />
      </g>
      {/* face */}
      {mood === "sleepy" ? (
        <path d="M23.5 34.5q2 1.6 4 0M32.5 34.5q2 1.6 4 0" stroke="#2B2B2B" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <>
          <circle cx="25.5" cy="34" r="1.9" fill="#2B2B2B" />
          {mood === "wink" ? (
            <path d="M32.5 34.3q2-1.6 4 0" stroke="#2B2B2B" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <circle cx="34.5" cy="34" r="1.9" fill="#2B2B2B" />
          )}
        </>
      )}
      <path d="M27 39.5q3 2.6 6 0" stroke="#2B2B2B" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21.5" cy="38.5" r="2.4" fill="#E9A07A" opacity=".55" />
      <circle cx="38.5" cy="38.5" r="2.4" fill="#E9A07A" opacity=".55" />
      {/* husk leaves */}
      <path
        d="M30 74C18 72 9 60 8 44c5 6 10 9 16 10-1 7 1 14 6 20Z"
        fill="#9DBB84"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 74c12-2 21-14 22-30-5 6-10 9-16 10 1 7-1 14-6 20Z"
        fill="#B4CC9C"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Wraps a phrase with a hand-drawn underline. */
export function Scribble({ children }: { children: React.ReactNode }) {
  return (
    <span className="scribble">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M2 8c30-5 60-6 95-3s70 2 101-3"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
