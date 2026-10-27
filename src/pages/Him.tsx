import { Link } from "../router";
import { Icon } from "../components/Icon";
import { Checks, ClosingCTA, PageHero, Reveal, SectionHead, Verify } from "../components/ui";
import { EMAILS } from "../config";

export default function Him() {
  const ways = [
    { t: "Mentorship", d: "Share your professional perspective and help a mentee think through career questions and development goals." },
    { t: "Events and conversations", d: "Take part in WIM gatherings, panels, webinars and discussions that encourage learning and collaboration." },
    { t: "Thought leadership", d: "Contribute articles, interviews, practical insight or expert commentary to WIM platforms." },
    { t: "Community and allyship", d: "Support fairer access to opportunities and champion inclusive practices within your professional sphere." },
  ];
  return (
    <div className="him">
      <PageHero crumb="WIM for HIM" eyebrow="WIM for HIM" wide title="Progress is stronger when we build it together." lead="WIM was built by a woman, for women, and that commitment remains central to who we are. WIM for HIM recognises that lasting progress also depends on men who use their experience, influence and leadership to support a more inclusive professional future.">
        <div className="row mt-2">
          <Link to="/contact?type=General%20enquiry" className="btn btn-light">Join WIM for HIM</Link>
          <Link to="/join-as-a-mentor" className="btn btn-ghost-light">Mentor a Future Leader</Link>
        </div>
      </PageHero>
      <section className="visual-break" aria-label="Community at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/community.svg" alt="Illustration celebrating community and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" aria-labelledby="what">
        <div className="wrap split top">
          <Reveal>
            <p className="eyebrow">What it is</p>
            <h2 id="what">A space for allies, mentors and leaders.</h2>
            <p className="lead mt-1">WIM for HIM creates space for male allies, mentors and leaders who want to contribute to the next generation of professionals in Law, GRC and related fields through guidance, knowledge-sharing and meaningful participation.</p>
          </Reveal>
          <Reveal>
            <div className="card"><h3>Who is WIM for HIM for?</h3>
              <Checks items={["Experienced male professionals who want to mentor and support emerging talent.", "Leaders who value fair access to development and opportunity.", "Industry contributors interested in speaking, writing, joining panels or sharing expertise.", "Professionals who want to connect with peers committed to constructive allyship."]} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="ways">
        <div className="wrap">
          <SectionHead eyebrow="Ways to get involved" title={<span id="ways">Four ways to take part.</span>} />
          <div className="grid grid-4">
            {ways.map((w) => <Reveal key={w.t}><div className="card card-hover" style={{ height: "100%" }}><h3>{w.t}</h3><p style={{ color: "#4a474d" }}>{w.d}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="quote-block">
            <h2 style={{ color: "#fff", maxWidth: "20ch" }}>Be the mentor you once needed, or the ally someone needs today.</h2>
            <p className="lead mt-1" style={{ color: "#f3dde2" }}>If you believe experience should be shared and opportunity should be widened, we invite you to get involved.</p>
            <div className="row mt-2">
              <Link to="/contact?type=General%20enquiry" className="btn btn-light">Join WIM for HIM <Icon name="arrow" size={18} /></Link>
              <Link to="/join-as-a-mentor" className="btn btn-ghost-light">Mentor a Future Leader</Link>
            </div>
            <Verify>Confirm the current WIM for HIM application route and social links. Public contact shown: {EMAILS.general}.</Verify>
          </div>
        </div>
      </section>
      <ClosingCTA />
    </div>
  );
}
