import Image from "next/image";
import type { Project } from "./projects";
import { publicAsset } from "./site";

export default function ProjectCover({
  project,
  caption = false,
}: {
  project: Project;
  caption?: boolean;
}) {
  if (!project.cover) return null;
  const cover = project.cover;
  return (
    <figure className="project-cover">
      <Image
        src={publicAsset(cover.src)}
        width={cover.width}
        height={cover.height}
        alt={cover.alt}
        sizes="(max-width: 720px) 88vw, (max-width: 1440px) 44vw, 640px"
      />
      {caption && <figcaption>{cover.caption}</figcaption>}
    </figure>
  );
}
