import { Link } from "../router";
import { ClosingCTA, PageHero, Reveal, SectionHead, Timeline, Verify } from "../components/ui";
import { FOUNDER, TEAM_TO_VERIFY, TIMELINE, VALUES } from "../content/site";
import { SHOW_VERIFY } from "../config";

export default function About() {
  return (
    <>
      <PageHero crumb="About WIM" eyebrow="About WIM" wide title="We started with a question. We're building a community around the answer." lead="What becomes possible when talented people no longer have to navigate their careers alone? Women In Mentoring was created to turn that question into action: through mentoring, connection, shared learning and access to opportunity." />
      <section className="visual-break" aria-label="Community at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/community.svg" alt="Illustration celebrating community and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" aria-labelledby="story">
        <div className="wrap split top">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 id="story">Talent is everywhere. Access is not.</h2>
          </Reveal>
          <Reveal>
            <div className="prose">
              <p>WIM began with a simple observation: talent is everywhere, but access to guidance and opportunity is not always equal. Students and professionals can be ambitious and capable while still lacking someone to ask, a network to turn to or a clear view of the next step.</p>
              <p>Founded by Sabrine Makkes in Dubai, WIM set out to create a supportive community where emerging talent and experienced professionals can learn from one another. What began as a focused community has grown into a broader platform for mentoring, events, thought leadership and regional connection.</p>
              <p>Our story is still being written by every mentor who shares a lesson, every mentee who asks a brave question, every member who opens a door and every partner who helps make opportunity more accessible.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blush" aria-label="Mission and vision">
        <div className="wrap grid grid-2">
          <Reveal><div className="card" style={{ height: "100%" }}><p className="eyebrow">Our mission</p><p style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", lineHeight: 1.35, color: "var(--maroon)" }}>To help the next generation of leaders in Law, Governance, Risk &amp; Compliance and beyond build careers they are proud of through mentorship, community, learning and access to meaningful opportunities.</p></div></Reveal>
          <Reveal><div className="card" style={{ height: "100%" }}><p className="eyebrow">Our vision</p><p style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", lineHeight: 1.35, color: "var(--maroon)" }}>A professional world where people, regardless of background or geography, can access the guidance, relationships and opportunities that help them build meaningful careers and lasting impact.</p></div></Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="values">
        <div className="wrap">
          <SectionHead eyebrow="Our values" title={<span id="values">What we stand for.</span>} />
          <div className="grid grid-3">
            {VALUES.map((v) => (
              <Reveal key={v.title}><div className="card card-hover" style={{ height: "100%" }}><h3>{v.title}</h3><p className="muted" style={{ color: "#4a474d" }}>{v.text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="journey">
        <div className="wrap split top">
          <div>
            <p className="eyebrow">Our journey</p>
            <h2 id="journey">From a question to a community.</h2>
            <Verify>Confirm all dates and descriptions in this timeline before launch.</Verify>
          </div>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      <section className="section" aria-labelledby="people">
        <div className="wrap">
          <SectionHead eyebrow="Meet the people behind WIM" title={<span id="people">A community is built by the people who show up.</span>} lead="Our team, ambassadors and advisors help bring WIM's mission to life in their regions and areas of expertise." />
          <div className="grid grid-3">
            <Reveal>
              <article className="card card-hover" style={{ height: "100%" }}>
                <span className="badge">Founder</span>
                <h3 style={{ marginTop: ".9rem" }}>{FOUNDER.name}</h3>
                <p className="muted">{FOUNDER.role}</p>
                <p className="mt-1" style={{ fontSize: ".95rem" }}>Founded WIM in Dubai in December 2024.</p>
                <Verify>Add an approved portrait, biography and LinkedIn link.</Verify>
              </article>
            </Reveal>
            {SHOW_VERIFY && TEAM_TO_VERIFY.map((n) => (
              <article className="card" key={n} style={{ borderStyle: "dashed" }}>
                <h3>{n}</h3>
                <Verify>Publicly featured on WIM pages. Confirm spelling, WIM role, professional title, region and consent before showing.</Verify>
              </article>
            ))}
          </div>
          <p className="mt-3 row"><Link to="/join" className="btn btn-primary">Join WIM</Link><Link to="/partnerships" className="btn btn-outline">Work with WIM</Link></p>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
