import Link from "next/link";
export default function NotFound() {
  return (
    <div className="inner-page">
      <div className="page-heading">
        <div className="eyebrow">404 / UNMAPPED TERRITORY</div>
        <h1>
          A connection
          <br />
          not yet made.
        </h1>
        <p>
          This page could not be found. Return to the portfolio or explore the
          selected work.
        </p>
      </div>
      <Link className="button" href="/work">
        Explore projects
      </Link>
    </div>
  );
}
