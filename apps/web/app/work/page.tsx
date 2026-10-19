"use client";
import ProjectCover from "../project-cover";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects, projectSlug } from "../projects";
const filters = [
  "All projects",
  "Machine learning",
  "Web applications",
  "Computer graphics",
  "Systems",
];
export default function Work() {
  const [filter, setFilter] = useState("All projects");
  const visible = projects.filter(
    (p) => filter === "All projects" || p.category === filter,
  );
  return (
    <div className="inner-page">
      <div className="page-heading">
        <div className="eyebrow">01 / THE WORK</div>
        <h1>
          Ideas, translated <em>into systems.</em>
        </h1>
        <p>
          Projects and research briefs. Different scales, different tools, the
          same curiosity.
        </p>
      </div>
      <div className="filters" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            {f === "All projects" && <sup>{projects.length}</sup>}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} projects shown
      </p>
      <div className="work-grid">
        {visible.map((p) => (
          <Link
            className={`work-card ${p.visual}`}
            key={p.repo}
            href={`/projects/${projectSlug(p)}`}
          >
            {p.cover ? (
              <ProjectCover project={p} />
            ) : (
              <div className="work-art" aria-hidden="true">
                <span className="eyebrow">{p.label}</span>
                {p.visual === "audio" ? (
                  <div className="waveform">
                    {Array.from({ length: 35 }, (_, i) => (
                      <i
                        key={i}
                        style={{ height: `${15 + ((i * 37) % 80)}%` }}
                      />
                    ))}
                  </div>
                ) : p.visual === "river" || p.visual === "map" ? (
                  <svg viewBox="0 0 400 180" fill="none">
                    <path
                      d="M50 180C260 90 30 50 210 0M170 130L320 95L360 20M80 45L150 70"
                      stroke="currentColor"
                      strokeWidth={p.visual === "river" ? 3 : 1.5}
                    />
                    <circle cx="170" cy="130" r="8" fill="currentColor" />
                    <circle cx="320" cy="95" r="5" fill="currentColor" />
                  </svg>
                ) : p.visual === "parking" ? (
                  <div className="assembly">
                    MOV AX, @DATA
                    <br />
                    MOV DS, AX
                    <br />
                    <b>CALL PARK_VEHICLE</b>
                  </div>
                ) : (
                  <div className="geometry">
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                <span className="work-number">0{projects.indexOf(p) + 1}</span>
                <span className="art-open">
                  <ArrowUpRight />
                </span>
              </div>
            )}
            <div className="work-info">
              <div className="project-meta">
                {p.category}
                <span>
                  {p.course}
                  {p.status && ` / ${p.status}`}
                </span>
              </div>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="source">
                <span>
                  <Github size={14} /> Read case study
                </span>
                <span>{p.repo ? "Project notes" : "Research brief"} ↗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <p className="caption">
        Project covers are presentation artwork. GRD uses a conceptual
        illustration.
      </p>
    </div>
  );
}
