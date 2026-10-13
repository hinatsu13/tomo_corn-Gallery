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
            <span key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
              {" · "}
            </span>
          ))}
          <a href={`mailto:${site.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
