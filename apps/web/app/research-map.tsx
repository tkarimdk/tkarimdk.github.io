"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, projectSlug } from "./projects";
const domains = [
  {
    title: "Artificial intelligence",
    description:
      "Exploring systems that learn from data and connect representations.",
    links: [1, 4],
    project: 0,
  },
  {
    title: "Machine learning",
    description:
      "Model experimentation, graph representations and leakage-controlled evaluation.",
    links: [0, 2, 3],
    project: 0,
  },
  {
    title: "Graph neural networks",
    description:
      "Relational structure as a way to understand audio and context.",
    links: [1, 3],
    project: 0,
  },
  {
    title: "Language & transformers",
    description:
      "DistilBERT representations and the relationship between audio and meaning.",
    links: [1, 2],
    project: 0,
  },
  {
    title: "Software architecture",
    description:
      "Connecting interfaces, APIs and structured data in practical applications.",
    links: [0, 5, 6],
    project: 1,
  },
  {
    title: "Computational systems",
    description: "Graphics, realtime state and low-level system logic.",
    links: [4, 6],
    project: 4,
  },
  {
    title: "Cybersecurity",
    description:
      "An area of interest: understanding trust, system boundaries and secure design. No research achievement is claimed.",
    links: [4, 5],
    project: null,
  },
];
export default function ResearchMap() {
  const [active, setActive] = useState(1);
  const current = domains[active];
  return (
    <section className="research-map">
      <div className="eyebrow">RESEARCH CONSTELLATION / SELECT A DOMAIN</div>
      <div className="domain-layout">
        <div className="domain-nodes" aria-label="Research domains">
          {domains.map((d, i) => (
            <button
              className={
                i === active
                  ? "active"
                  : current.links.includes(i)
                    ? "connected"
                    : "unrelated"
              }
              key={d.title}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              {d.title}
              <small>
                {current.links.includes(i)
                  ? "CONNECTED"
                  : i === active
                    ? "SELECTED"
                    : "DOMAIN"}
              </small>
            </button>
          ))}
        </div>
        <div className="domain-panel" aria-live="polite">
          <div className="eyebrow">EXPLORATION / 0{active + 1}</div>
          <h2>{current.title}</h2>
          <p>{current.description}</p>
          <div className="domain-connections">
            <span className="eyebrow">CONNECTED IDEAS</span>
            {current.links.map((i) => (
              <button key={i} onClick={() => setActive(i)}>
                {domains[i].title} /
              </button>
            ))}
          </div>
          {current.project !== null && (
            <Link
              className="text-action"
              href={`/projects/${projectSlug(projects[current.project])}`}
            >
              Related: {projects[current.project].name}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
