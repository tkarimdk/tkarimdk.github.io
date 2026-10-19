import ProjectCover from "./project-cover";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, projectSlug } from "./projects";
import { toolkit } from "./site";
export default function Home() {
  return (
    <div className="architect-home">
      <section className="architect-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="small-dot" /> COMPUTER SCIENCE / SOFTWARE
          </div>
          <h1 className="personal-name">
            Tanzimul
            <br />
            <em>Karim.</em>
          </h1>
          <p>
            I'm Tanzim, a Computer Science student exploring intelligent
            systems, machine learning, and thoughtfully engineered software.
          </p>
          <div className="portfolio-actions">
            <Link className="button" href="/work">
              Explore my work <ArrowUpRight size={18} />
            </Link>
            <Link className="text-action" href="/about">
              About me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-terminal" aria-label="A terminal-style introduction to Tanzim">
          <div className="terminal-bar">
            <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
            <span>tanzim@portfolio: ~</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-command"><span>❯</span> whoami</div>
            <p>Tanzimul Karim</p>
            <p className="terminal-muted">Computer Science student. Curious builder.</p>
            <div className="terminal-command"><span>❯</span> cat interests.txt</div>
            <p>machine learning · web · graphics · systems</p>
            <div className="terminal-command"><span>❯</span> cat current-research.txt</div>
            <p className="terminal-highlight">Road Deterioration Prediction</p>
            <p className="terminal-muted">Ongoing undergraduate thesis</p>
            <div className="terminal-command terminal-prompt"><span>❯</span><span className="terminal-cursor" aria-hidden="true" /></div>
          </div>
          <Link className="terminal-link" href="/projects/road-deterioration-prediction">Explore my research <ArrowUpRight size={15} /></Link>
        </div>
        <div className="hero-bottom">
          <span>TANZIMUL KARIM / PORTFOLIO</span>
          <a href="#selected">SCROLL TO EXPLORE</a>
        </div>
      </section>
      <section id="selected" className="home-section">
        <div className="section-top">
          <div>
            <div className="eyebrow">01 / SELECTED WORK</div>
            <h2>
              Ideas, translated
              <br />
              into systems.
            </h2>
          </div>
          <Link className="text-action" href="/work">
            All {projects.length} projects <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="home-projects">
          {projects.filter((p) => ["road", "river", "audio"].includes(p.visual)).map((p, i) => (
            <Link
              className={`home-project hp-${p.visual}`}
              key={p.repo}
              href={`/projects/${projectSlug(p)}`}
            >
              {p.cover ? (
                <div className="project-preview has-cover">
                  <ProjectCover project={p} />
                </div>
              ) : (
                <div className="project-preview" aria-hidden="true">
                  <span className="preview-label">
                    {p.label} / CONCEPTUAL STUDY
                  </span>
                  {p.visual === "audio" ? (
                    <div className="hero-wave">
                      {Array.from({ length: 45 }, (_, j) => (
                        <i key={j} style={{ height: 20 + ((j * 31) % 100) }} />
                      ))}
                    </div>
                  ) : (
                    <svg viewBox="0 0 400 150">
                      <path
                        d="M30 140 Q220 90 130 20 T330 20 M130 70L270 115L360 65"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="270" cy="115" r="6" fill="currentColor" />
                    </svg>
                  )}
                  <span className="preview-number">0{i + 1}</span>
                </div>
              )}
              <div className="home-project-info">
                <div className="project-meta">
                  {p.category} / {p.course}
                  {p.status && ` / ${p.status}`}
                </div>
                <h3>
                  {p.name}
                  <ArrowUpRight size={21} />
                </h3>
                <p>{p.description}</p>
                <span className="technical-tags">{p.tags.join(" / ")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section toolkit">
        <div className="eyebrow">03 / ENGINEERING TOOLKIT</div>
        <h2>
          The tools behind
          <br />
          the thinking.
        </h2>
        <div className="toolkit-grid">
          {toolkit.map((t) => (
            <article key={t.name}>
              <h3>{t.name}</h3>
              <p>{t.items.join(" / ")}</p>
              <span>{t.context}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section closing">
        <div className="eyebrow">05 / CONNECT</div>
        <h2>
          Let's build something
          <br />
          <em>meaningful.</em>
        </h2>
        <Link className="text-action" href="/contact">
          Start a conversation <ArrowUpRight />
        </Link>
      </section>
    </div>
  );
}
