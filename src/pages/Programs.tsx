import { Link } from "../router";
import { Icon } from "../components/Icon";
import { ClosingCTA, PageHero, Reveal, SectionHead, Steps, Verify } from "../components/ui";
import { EVENT_TYPES, MENTEE_JOURNEY, MENTOR_JOURNEY, PLANNED_PROGRAMMES } from "../content/site";
import { SHOW_VERIFY } from "../config";

export default function Programs() {
  return (
    <>
      <PageHero crumb="Programs" eyebrow="Programs & mentorship" title="Growth, with intention." lead="Professional growth should not be left to chance. WIM brings people together through structured mentoring, practical learning, community experiences and opportunities to contribute. Explore the pathways below and choose the one that fits your goals." />
      <section className="visual-break" aria-label="Mentoring at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/mentoring.svg" alt="Illustration celebrating mentoring and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" id="mentoring" aria-labelledby="mentee-h">
        <div className="wrap grid grid-2" style={{ gap: "3rem" }}>
          <Reveal>
            <span className="badge badge-active">Open pathway</span>
            <h2 id="mentee-h" style={{ marginTop: ".8rem" }}>The mentee journey</h2>
            <p className="lead mt-1" style={{ marginBottom: "1.6rem" }}>You don't need to have it all figured out. You just need a place to start.</p>
            <Steps items={MENTEE_JOURNEY} />
            <p className="mt-2"><Link to="/join-as-a-mentee" className="btn btn-primary">Join as a Mentee <Icon name="arrow" size={18} /></Link></p>
          </Reveal>
          <Reveal>
            <span className="badge badge-active">Open pathway</span>
            <h2 style={{ marginTop: ".8rem" }}>The mentor journey</h2>
            <p className="lead mt-1" style={{ marginBottom: "1.6rem" }}>Share what you know. Help someone see what's possible.</p>
            <Steps items={MENTOR_JOURNEY} />
            <p className="mt-2"><Link to="/join-as-a-mentor" className="btn btn-primary">Become a Mentor <Icon name="arrow" size={18} /></Link></p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="more-h">
        <div className="wrap">
          <SectionHead eyebrow="More ways to take part" title={<span id="more-h">Programmes and experiences</span>} />
          <div className="grid grid-2">
            <Reveal><article className="card card-hover" id="ambassadors" style={{ height: "100%" }}>
              <span className="badge badge-active">Ambassador programme</span>
              <h3 style={{ marginTop: ".8rem" }}>WIM Ambassador Programme</h3>
              <p>Bring the WIM spirit to your community. Ambassadors help build local relationships, raise awareness of WIM, connect professionals and students, and support activities that reflect the needs of their region.</p>
              <p className="mt-1"><Link to="/experts-and-ambassadors#ambassadors" className="link-arrow">Apply to Be a WIM Ambassador <Icon name="arrow" size={16} /></Link></p>
              <Verify>Publish responsibilities, selection criteria, time commitment and term length.</Verify>
            </article></Reveal>
            <Reveal><article className="card card-hover" style={{ height: "100%" }}>
              <span className="badge badge-active">Industry experts</span>
              <h3 style={{ marginTop: ".8rem" }}>Industry Experts</h3>
              <p>Put your experience into the conversation. WIM welcomes experienced practitioners and subject-matter experts who want to contribute through mentoring, workshops, panels, articles, interviews or other approved activities.</p>
              <p className="mt-1"><Link to="/experts-and-ambassadors#experts" className="link-arrow">Join as an Industry Expert <Icon name="arrow" size={16} /></Link></p>
            </article></Reveal>
            <Reveal><article className="card card-hover" style={{ height: "100%" }}>
              <span className="badge badge-active">Events</span>
              <h3 style={{ marginTop: ".8rem" }}>Events and experiences</h3>
              <p>Learn together. Meet your people. Leave with something useful. WIM events create opportunities to exchange ideas, build skills and connect across career stages. Formats may include {EVENT_TYPES.slice(0, 5).map((e) => e.title.toLowerCase()).join(", ")} and more.</p>
              <p className="mt-1"><Link to="/events" className="link-arrow">Explore Events <Icon name="arrow" size={16} /></Link></p>
            </article></Reveal>
            <Reveal><article className="card card-hover" style={{ height: "100%" }}>
              <span className="badge badge-active">Magazine</span>
              <h3 style={{ marginTop: ".8rem" }}>Thought leadership and WIM Magazine</h3>
              <p>Make space for the ideas moving our professions forward. WIM Magazine brings together interviews, professional perspectives, student writing and conversations across law, GRC, legal technology, leadership, wellbeing and adjacent fields.</p>
              <p className="mt-1 row"><Link to="/magazine" className="link-arrow">Read WIM Magazine <Icon name="arrow" size={16} /></Link><Link to="/contact?type=Magazine%20submission" className="link-arrow">Submit Your Story</Link></p>
            </article></Reveal>
            <Reveal><article className="card card-hover" style={{ height: "100%" }}>
              <span className="badge badge-active">Opportunities</span>
              <h3 style={{ marginTop: ".8rem" }}>Exclusive opportunities</h3>
              <p>Your next opportunity may start with a conversation. WIM shares career opportunities, internships, placements, speaking invitations and other professional opportunities through its community and partner network. Availability and eligibility vary by opportunity.</p>
              <p className="mt-1"><Link to="/join" className="link-arrow">Join the WIM Community <Icon name="arrow" size={16} /></Link></p>
            </article></Reveal>
          </div>
        </div>
      </section>

      {SHOW_VERIFY && (
        <section className="section" aria-labelledby="planned-h">
          <div className="wrap">
            <SectionHead eyebrow="In development" title={<span id="planned-h">Planned programmes</span>} lead="WIM's public Programs page references the programmes below. None is presented as open for applications until WIM confirms its status." />
            <Verify>Show these only after WIM confirms which are active, accepting applications, sponsored or still in development. Delete any that are not confirmed. This section is hidden when WIM_SHOW_VERIFY=false.</Verify>
            <div className="grid grid-3 mt-1">
              {PLANNED_PROGRAMMES.map((p) => (
                <article className="card" key={p.title} style={{ borderStyle: "dashed" }}>
                  <span className="badge badge-planned">Planned · unconfirmed</span>
                  <h3 style={{ marginTop: ".8rem" }}>{p.title}</h3>
                  <p>{p.text}</p>
                  <Verify>{p.verify}</Verify>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <ClosingCTA />
    </>
  );
}
