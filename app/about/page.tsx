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
            alt="The artist's sunny studio desk with a painting in progress, a jar of brushes, and a window behind."
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
            Hi! I&apos;m {site.name}, a painter and illustrator who likes small, quiet moments: morning light, sleepy
            cats, and the corner of a messy kitchen.
          </p>
          <p>
            I work mostly in gouache, watercolor and oil, and draw digitally for illustration work. Most of my paintings
            start as tiny sketches in a pocket notebook, and a few of them grow up into finished pieces.
          </p>
          <p>
            When I&apos;m not painting, I&apos;m probably walking somewhere with a sketchbook, drinking too much tea, or
            looking at other people&apos;s gardens.
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
