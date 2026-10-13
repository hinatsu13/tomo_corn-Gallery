import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CornBuddy } from "@/components/Doodles";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container">
      <div className="about">
        <div className="about-photo">
          {/* TODO: replace /studio.svg with a real photo of the artist or workspace */}
          <Image
            src="/studio.svg"
            alt="The artist's sunny desk by a window."
            width={900}
            height={1100}
            sizes="(max-width: 760px) 100vw, 45vw"
            unoptimized
            priority
          />
          <CornBuddy mood="sleepy" />
        </div>

        <div>
          <h1>About me</h1>
          <p className="lede">
            Hi! I&apos;m {site.name}, an anime-style illustrator who likes drawing characters in small, happy moments:
            a day at the beach, breakfast on the stove, a plushie held close.
          </p>
          <p>
            I draw digitally, and only in an anime style. Most of my work is fan art of characters I love, plus my own
            characters, chibis, and the occasional silly comic.
          </p>
          <p>
            When I&apos;m not drawing, I&apos;m probably playing games, watching anime, or collecting more characters to
            draw next.
          </p>

          <blockquote className="statement">
            I want my pictures to feel like a deep breath: soft, warm, and a little bit funny if you look closely.
          </blockquote>

          <p>
            <Link href="/commissions" className="btn">
              See commission info
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
