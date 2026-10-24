import Image from "next/image";
import { site, publicAsset } from "../site";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { existsSync } from "node:fs";
import path from "node:path";
export const metadata = { title: "About" };
export default function About() {
  const cvAvailable = existsSync(path.join(process.cwd(), "public", "cv.pdf"));
  return (
    <div className="inner-page">
      <div className="page-heading">
        <div className="eyebrow">03 / ABOUT ME</div>
        <h1>
          Curious by nature.
          <br />
          <em>A builder by practice.</em>
        </h1>
      </div>
      <div className="about-layout">
        <figure className="about-portrait">
          <Image
            src={publicAsset(site.portrait.src)}
            width={site.portrait.width}
            height={site.portrait.height}
            alt={site.portrait.alt}
            sizes="(max-width: 720px) 88vw, 40vw"
            preload
          />
          <figcaption>TANZIMUL KARIM / COMPUTER SCIENCE</figcaption>
        </figure>
        <div className="about-copy">
          <h2>Hi, I'm Tanzim.</h2>
          <p>
            I'm a computer science student at BRAC University, currently working
            on my undergraduate thesis on road deterioration prediction.
          </p>
          <p>
            Outside of code, I love space and learning about the universe. It is
            one of the things that keeps me curious and reminds me there is
            always more to learn.
          </p>
          <p>
            That curiosity carries into my projects: machine learning, realtime
            web applications, computer graphics, and low-level systems. I follow
            ideas through to working implementations, learning along the way.
          </p>
          <h3>Haifa AI — Image &amp; Video Generation</h3>
          <p>
            Contributed to the image and video generation capabilities of Haifa
            AI, collaborating with the team to build its generative AI tools.
          </p>
          <p>
            <a href="https://www.haifa-ai.com/">
              Meet the Haifa AI team <ArrowRight size={16} aria-hidden="true" />
            </a>
          </p>
          <div className="cv-area">
            {cvAvailable ? (
              <a
                className="button"
                href={publicAsset("/cv.pdf")}
                download="Tanzimul-Karim-CV.pdf"
              >
                Download CV <Download size={17} />
              </a>
            ) : null}
          </div>
          <div className="interest-list">
            {[
              [
                "01",
                "Machine learning",
                "Audio, language & the connections between them.",
              ],
              ["02", "Web applications", "Data, maps & realtime experiences."],
              [
                "03",
                "Graphics & systems",
                "Interactive worlds & the fundamentals underneath.",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link className="next-chapter" href="/contact">
        Have something in mind? <ArrowRight />
      </Link>
    </div>
  );
}
