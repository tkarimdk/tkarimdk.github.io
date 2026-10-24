import type { Metadata } from "next";
import Shell from "./shell";
import { site } from "./site";
import "./globals.css";
const description =
  "Software projects, machine learning experiments and computational systems by Tanzimul Karim, a Computer Science student at BRAC University.";
export const metadata: Metadata = {
  metadataBase: new URL(site.domain || "http://localhost:3000"),
  title: {
    default: "Tanzimul Karim - Software & Systems",
    template: "%s | Tanzimul Karim",
  },
  description,
  openGraph: {
    type: "website",
    title: "Tanzimul Karim - Software & Systems",
    description,
    siteName: "Tanzimul Karim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzimul Karim - Software & Systems",
    description,
  },
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              sameAs: [site.github, site.linkedin],
            }),
          }}
        />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
