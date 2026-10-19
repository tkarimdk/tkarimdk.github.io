import ProjectCover from "../project-cover";
import ResearchMap from "../research-map";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, projectSlug } from "../projects";
export const metadata = { title: "Research" };
export default function Research() {
  const thesis = projects.find(
    (project) => project.status === "Ongoing thesis",
  )!;
  return (
    <div className="inner-page">
      <div className="page-heading">
        <div className="eyebrow">02 / RESEARCH</div>
        <h1>
          Curiosity, structured <em>into inquiry.</em>
        </h1>
        <p>
          Exploring practical questions through machine learning and
          implementation.
        </p>
      </div>
      <article className="thesis ongoing-thesis">
        <div className="eyebrow">
          <span className="small-dot" /> UNDERGRADUATE THESIS / ONGOING
        </div>
        <h2>{thesis.name}</h2>
        <p>{thesis.description}</p>
        <Link className="text-action" href={`/projects/${projectSlug(thesis)}`}>
          Explore the thesis <ArrowUpRight size={17} />
        </Link>
        <Link
          className="thesis-cover"
          href={`/projects/${projectSlug(thesis)}`}
          aria-label="View Road Deterioration Prediction thesis"
        >
          <ProjectCover project={thesis} />
        </Link>
      </article>
      <ResearchMap />
      <Link className="next-chapter" href="/about">
        Next chapter: a little about me <ArrowRight />
      </Link>
    </div>
  );
}
