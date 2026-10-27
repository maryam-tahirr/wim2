import { Link } from "../router";
import { PageHero } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Page not found" title="We couldn't find that page." lead="The link may be out of date, or the page may have moved. Try one of these instead." />
      <section className="section">
        <div className="wrap row">
          <Link to="/" className="btn btn-primary">Go to the homepage</Link>
          <Link to="/programs" className="btn btn-outline">Explore programs</Link>
          <Link to="/contact" className="btn btn-outline">Contact WIM</Link>
        </div>
      </section>
    </>
  );
}
