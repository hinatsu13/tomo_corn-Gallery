import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {site.name}. All artwork is mine, so please don&apos;t reuse it without asking.
        </span>
        <span>
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
          {" · "}
          <a href={`mailto:${site.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
