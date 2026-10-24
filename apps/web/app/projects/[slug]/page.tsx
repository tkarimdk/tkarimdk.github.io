import ProjectCover from "../../project-cover";
export const dynamicParams = false;
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import {
  projects,
  projectSlug,
  sourceUrl,
  architecture,
  roadSections,
} from "../../projects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p) }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => projectSlug(p) === slug);
  return { title: p?.name ?? "Project not found", description: p?.description };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => projectSlug(p) === slug);
  if (!p) notFound();
  const a = architecture[p.visual];
  const source = sourceUrl(p);
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <article className="inner-page case-study">
      <Link href="/work" className="text-action">
        <ArrowLeft size={16} /> All projects
      </Link>
      <div className="page-heading">
        <div className="eyebrow">
          PROJECT / {p.category} / {p.course}
          {p.status && ` / ${p.status}`}
        </div>
        <h1>{p.name}</h1>
        <p>{p.description}</p>
      </div>
      <div className="tags">
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {p.cover && (
        <div className="case-cover">
          <ProjectCover project={p} caption />
        </div>
      )}
      <section className="case-visual">
        <span className="eyebrow">
          CONCEPTUAL SYSTEM OVERVIEW / NOT AN APPLICATION SCREENSHOT
        </span>
        <div className="pipeline">
          {a.stages.map((s, i) => (
            <div key={s}>
              <span>0{i + 1}</span>
              <h2>{s}</h2>
              {i < a.stages.length - 1 && <ArrowRight size={18} />}
            </div>
          ))}
        </div>
      </section>
      <div className="case-columns">
        <section>
          <div className="eyebrow">01 / CONTEXT</div>
          <h2>
            {p.owner
              ? "A collaborative data system."
              : "From an idea to an implementation."}
          </h2>
          <p>{p.description}</p>
          <p>
            {p.owner
              ? "My role is Contributor. Specific responsibilities and individual contributions are not yet documented here."
              : p.visual === "road"
                ? "This is my ongoing undergraduate thesis on road deterioration prediction. Detailed methods and findings will be added as the research progresses."
                : p.visual === "numpynet"
                  ? "I am still learning neural-network fundamentals. This personal project helps me work through forward passes, gradients, and optimization step by step, with reproducible experiments and mathematical notes in the repository."
                  : `This ${p.course === "Personal project" ? "personal project" : p.course + " coursework"} brings together ${p.tags.join(", ")}.`}
          </p>
        </section>
        <section>
          <div className="eyebrow">02 / ENGINEERING</div>
          <h2>Under the surface.</h2>
          <p>{a.note}</p>
          {p.visual !== "road" && (
            <details className="architecture-details">
              <summary>Architecture view / inspect components</summary>
              <ol>
                {a.stages.map((s, i) => (
                  <li key={s}>
                    <span>Component {i + 1}</span>
                    <strong>{s}</strong>
                  </li>
                ))}
              </ol>
              <p>
                This view organizes the known components. Consult the repository
                for exact interfaces, data shapes and implementation.
              </p>
            </details>
          )}
        </section>
      </div>
      <section className="case-missing">
        <div className="eyebrow">03 / EVIDENCE & LIMITATIONS</div>
        <h2>Source first. Claims second.</h2>
        <p>
          {p.visual === "numpynet" ? (
            <>The repository includes numerical gradient checks, automated tests,
            and reproducible training experiments. XOR results concern only four
            training samples, and the multiclass demonstration uses synthetic
            spiral data. I am continuing to learn; these experiments do not
            establish performance on real datasets. </>
          ) : <>Verified results, benchmarks and a detailed engineering retrospective
          have not been supplied for this portfolio. No numerical outcomes are
          claimed.{" "}</>}
          {source
            ? "The source repository is available for technical review."
            : "A repository link has not been supplied."}
        </p>
        {source && (
          <a className="button" href={source} target="_blank" rel="noreferrer">
            Explore source code <ArrowUpRight size={17} />
          </a>
        )}
      </section>
      {p.visual === "road" && (
        <section className="case-missing">
          <div className="eyebrow">
            RESEARCH DOCUMENTATION / AWAITING DETAILS
          </div>
          <div className="pending-research">
            {roadSections.map((s) => (
              <div key={s}>
                <h3>{s}</h3>
                <p>Details to be supplied.</p>
              </div>
            ))}
          </div>
        </section>
      )}
      <Link className="next-chapter" href={`/projects/${projectSlug(next)}`}>
        Next: {next.name}
        <ArrowRight />
      </Link>
    </article>
  );
}
