import Gallery from "@/components/Gallery";
import StatusPill from "@/components/StatusPill";
import { CornBuddy } from "@/components/Doodles";
import { getArtworks } from "@/data/getArtworks";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1>Hi, I&apos;m {site.name}</h1>
          <p className="lede">{site.tagline}</p>
        </div>
        <CornBuddy mood="wink" />
      </div>
      <StatusPill link />

      <Gallery artworks={getArtworks()} />
    </div>
  );
}
