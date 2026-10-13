import type { Metadata, Viewport } from "next";
import { Caveat, DM_Sans, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const heading = Fraunces({ subsets: ["latin"], variable: "--font-heading", axes: ["SOFT"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", weight: "500" });

export const metadata: Metadata = {
  title: { default: `${site.name} | painter & illustrator`, template: `%s | ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, type: "website" },
};

export const viewport: Viewport = { themeColor: "#FAF7F2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
