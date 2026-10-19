import { site } from "../site";
import { ArrowUpRight, Github } from "lucide-react";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <div className="inner-page contact-page">
      <div className="eyebrow">04 / AN OPEN CONVERSATION</div>
      <h1>
        Let's build something
        <br />
        <em>meaningful.</em>
      </h1>
      <p>
        Explore the code, take a closer look at a project, or connect with me
        through GitHub.
      </p>
      <a
        className="contact-link"
        href={site.github}
        target="_blank"
        rel="noreferrer"
      >
        <Github size={30} />
        <div>
          <span>FIND ME ON GITHUB</span>
          <h2>@tkarimdk</h2>
        </div>
        <ArrowUpRight size={34} />
      </a>
      <div className="contact-signature">
        Tanzimul Karim <span>↗</span>
      </div>
    </div>
  );
}
