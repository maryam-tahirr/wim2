import { Link } from "../router";
import { ClosingCTA, PageHero, Reveal, SectionHead, Verify } from "../components/ui";
import { CHAPTER_REGIONS } from "../content/site";
import { SHOW_VERIFY } from "../config";

export default function Chapters() {
  const regions = CHAPTER_REGIONS.filter((r) => r.confirmed || SHOW_VERIFY);
  return (
    <>
      <PageHero crumb="Chapters" eyebrow="Chapters & global community" title="Born in Dubai. Connected by a shared purpose." lead="WIM's community reaches across regions, connecting people who believe professional growth is stronger when knowledge, encouragement and opportunity are shared. Our chapters help bring that purpose into local communities while remaining part of a wider network." />
      <section className="visual-break" aria-label="Global at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/global.svg" alt="Illustration celebrating global and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" aria-labelledby="explore">
        <div className="wrap">
          <SectionHead eyebrow="Explore our chapters" title={<span id="explore">Where WIM is connected</span>} />
          <Verify>Public WIM pages reference Dubai, GCC, United Kingdom, Egypt, South Africa, Kenya and West Africa in different places. Confirm the official list and whether each is an active chapter, regional network or developing presence, then add region, lead, introduction, activities, contact route and social links. Only confirmed locations appear when WIM_SHOW_VERIFY=false.</Verify>
          <div className="grid grid-3 mt-1">
            {regions.map((r) => (
              <Reveal key={r.name}>
                <article className="card card-hover" style={{ height: "100%", borderStyle: r.confirmed ? "solid" : "dashed" }}>
                  <span className={r.confirmed ? "badge" : "badge badge-planned"}>{r.status}</span>
                  <h3 style={{ marginTop: ".8rem" }}>{r.name}</h3>
                  {r.text && <p style={{ color: "#4a474d" }}>{r.text}</p>}
                  {!r.confirmed && <p className="muted" style={{ fontSize: ".9rem" }}>Not yet confirmed as an established chapter.</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blush" aria-labelledby="become">
        <div className="wrap split">
          <div><p className="eyebrow">Become part of a chapter</p><h2 id="become">Your local perspective can help the community grow.</h2></div>
          <div>
            <p className="lead">Whether you are a student, professional, mentor or potential partner, your local perspective can help the community grow in meaningful ways. Contact WIM to learn about current activity in your region or express interest in helping build a chapter.</p>
            <p className="mt-2 row"><Link to="/contact?type=General%20enquiry" className="btn btn-primary">Connect with a Chapter</Link><Link to="/experts-and-ambassadors#ambassadors" className="btn btn-outline">Become an Ambassador</Link></p>
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
