import { useState } from "react";
import { Link } from "../router";
import { Icon } from "../components/Icon";
import { ClosingCTA, EmptyState, Reveal, SectionHead, Tabs, Verify } from "../components/ui";
import { AUDIENCES, FIND_AT_WIM, FOUNDER, PAST_EVENTS } from "../content/site";
import { COMMUNITY_STATS, HERO_IMAGE, STATS_UPDATED, TESTIMONIALS } from "../config";

function HeroArt() {
  if (HERO_IMAGE) {
    return (
      <div className="hero-art"><div className="arch-photo"><img src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} width={640} height={800} fetchPriority="high" /></div></div>
    );
  }
  return (
    <div className="hero-art" role="img" aria-label="Decorative arches in maroon and blush with the words Mentorship, Community and Opportunity">
      <svg viewBox="0 0 400 500" width="100%" height="100%" aria-hidden="true">
        <rect x="0" y="0" width="400" height="500" rx="28" fill="#F7E9ED" />
        <path d="M40 500V210a100 100 0 01200 0V500z" fill="#5B1025" />
        <path d="M150 500V270a105 105 0 01210 0V500z" fill="#7A1832" />
        <path d="M250 500V330a60 60 0 01120 0V500z" fill="#B52B43" />
        <circle cx="318" cy="92" r="30" fill="none" stroke="#B52B43" strokeWidth="2" />
        <circle cx="318" cy="92" r="12" fill="#B52B43" />
        <g fill="#FCFAF8" fontFamily="'DM Serif Display', Georgia, serif">
          <text x="62" y="300" fontSize="26">Mentorship</text>
          <text x="172" y="366" fontSize="26">Community</text>
          <text x="258" y="432" fontSize="18">Opportunity</text>
        </g>
      </svg>
    </div>
  );
}

const SPOTLIGHTS = [
  { name: "Maria Kuznetsova", group: "Mentor", image: "Maria-Kuznetsova-1.png" },
  { name: "Passant Islam", group: "Mentor", image: "Passant-Islam.png" },
  { name: "Sanjana Mahesh", group: "Mentee", image: "sanjana-mahesh-1.png" },
  { name: "Manish Bhatt", group: "Industry expert", image: "Manish-Bhatt-1.png" },
];
function Testimonials() {
  return <div className="spotlight-wrap">
    <p className="spotlight-intro">Real people. Real journeys. Explore the voices shaping our mentoring community.</p>
    <div className="spotlight-grid">
      {SPOTLIGHTS.map((person, index) => <a className="spotlight-card" key={person.name} href="https://womeninmentoring.org/testimonials-spotlight/" target="_blank" rel="noopener noreferrer" style={{animationDelay: `${index * 110}ms`}}>
        <div className="spotlight-image"><img src={`https://womeninmentoring.org/wp-content/uploads/2026/06/${person.image}`} alt={`${person.name} — WIM ${person.group} spotlight`} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /></div>
        <div className="spotlight-meta"><span>{person.group}</span><h3>{person.name}</h3><span className="spotlight-arrow">Explore spotlight ↗</span></div>
      </a>)}
    </div>
    <div className="spotlight-footer"><a href="https://womeninmentoring.org/testimonials-spotlight/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">See all mentor, mentee &amp; expert stories <Icon name="arrow" size={18}/></a></div>
  </div>;
}

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Women In Mentoring</p>
            <h1 id="hero-title">Your ambition deserves a <em>community</em> behind it.</h1>
            <p className="lead">Build your confidence. Find your people. Learn from professionals who have walked the path before you. WIM connects emerging talent and experienced professionals across Law, Governance, Risk &amp; Compliance, Legal Tech and beyond through mentorship, community, learning and meaningful opportunities.</p>
            <div className="row hero-actions">
              <Link to="/join" className="btn btn-primary">Join the WIM Community <Icon name="arrow" size={18} /></Link>
              <Link to="/programs" className="btn btn-outline">Explore Our Programs</Link>
            </div>
            <nav className="pathway-chips" aria-label="Choose your pathway">
              <Link className="chip" to="/join-as-a-mentee">I'm looking for a mentor</Link>
              <Link className="chip" to="/join-as-a-mentor">I want to mentor</Link>
              <Link className="chip" to="/experts-and-ambassadors#experts">I'm an industry expert</Link>
              <Link className="chip" to="/partnerships">I want to partner with WIM</Link>
            </nav>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* 2. Community at a glance */}
      <section className="section-tight bg-white" aria-labelledby="glance">
        <div className="wrap">
          <Reveal>
            <h2 id="glance" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "1.6rem" }}>A growing community. A shared purpose.</h2>
            {COMMUNITY_STATS.length > 0 ? (
              <>
                <div className="facts">
                  {COMMUNITY_STATS.map((s) => <div className="fact" key={s.label}><div className="big">{s.value}</div><p>{s.label}</p></div>)}
                </div>
                {STATS_UPDATED && <p className="muted mt-1" style={{ fontSize: ".85rem" }}>Figures last updated {STATS_UPDATED}. <Link to="/about" className="link-arrow">About WIM</Link></p>}
              </>
            ) : (
              <>
                <div className="facts">
                  <div className="fact"><div className="big">2024</div><p>Founded in Dubai by Sabrine Makkes.</p></div>
                  <div className="fact"><div className="big">Law · GRC</div><p>Focused on Law, Governance, Risk &amp; Compliance, Legal Tech and adjacent fields.</p></div>
                  <div className="fact"><div className="big">Mentors</div><p>Students and early-career professionals learning alongside experienced practitioners.</p></div>
                  <div className="fact"><div className="big">Regional</div><p>A community that reaches across regions through events, chapters and the magazine.</p></div>
                </div>
                <Verify>Community metrics (members, mentors, chapters, countries) are hidden until WIM supplies verified, dated figures. Add them in src/config.ts.</Verify>
              </>
            )}
          </Reveal>
        </div>
      </section>

      {/* 3. About */}
      <section className="section" aria-labelledby="about-h">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 id="about-h">We don't just open doors. We help people build their own.</h2>
            <div className="prose mt-1">
              <p>WIM is a mentoring community helping the next generation of leaders grow with greater clarity, confidence and connection. We bring students, early-career professionals and experienced practitioners together to share knowledge, navigate challenges and create opportunities that might otherwise feel out of reach.</p>
              <p>Mentorship is the starting point, not the whole story. Through community, events, thought leadership and professional opportunities, WIM helps people learn from one another and move forward together.</p>
            </div>
            <p className="mt-2"><Link to="/about" className="btn btn-outline">Discover WIM</Link></p>
          </Reveal>
          <Reveal>
            <div className="card" style={{ background: "var(--blush)", borderColor: "transparent", padding: "2.2rem" }}>
              <p className="eyebrow">Our mission</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", lineHeight: 1.35, color: "var(--maroon)" }}>To help the next generation of leaders in Law, Governance, Risk &amp; Compliance and beyond build careers they are proud of through mentorship, community, learning and access to meaningful opportunities.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. What you can find */}
      <section className="section bg-white" aria-labelledby="find-h">
        <div className="wrap">
          <SectionHead eyebrow="What you can find at WIM" title="Support that meets you where you are." />
          <div className="feature-list">
            {FIND_AT_WIM.map((f, i) => (
              <Link key={f.short} to={f.to} className="feature">
                <span className="num" aria-hidden="true">0{i + 1}</span>
                <span className="ico"><Icon name={f.icon} size={20} /></span>
                <span>
                  <h3 id={i === 0 ? "find-h" : undefined} style={{ fontSize: "1.4rem" }}>{f.short}</h3>
                  <p>{f.text}</p>
                </span>
                <span className="arrow"><Icon name="arrow" size={22} /><span className="sr-only">Learn more about {f.short}</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Audience pathways */}
      <section className="section" aria-labelledby="path-h">
        <div className="wrap">
          <SectionHead eyebrow="Pathways" title={<span id="path-h">A place for every stage of the journey.</span>} />
          <Tabs
            label="Audience pathways"
            tabs={AUDIENCES.map((a) => ({
              id: a.id,
              label: a.tab,
              panel: (
                <div className="tabpanel">
                  <div>
                    <p className="eyebrow">{a.who}</p>
                    <h3>{a.title}</h3>
                    <p className="lead" style={{ fontSize: "1.05rem" }}>{a.text}</p>
                    <p className="mt-2"><Link to={a.to} className="btn btn-primary">{a.cta} <Icon name="arrow" size={18} /></Link></p>
                  </div>
                  <div className="side">
                    <h4>What you can gain or contribute</h4>
                    <ul className="check-list">{a.gain.map((g) => <li key={g}>{g}</li>)}</ul>
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* 6. Founder */}
      <section className="section-tight" aria-labelledby="founder-h">
        <div className="wrap">
          <Reveal>
            <div className="quote-block">
              <p className="eyebrow" id="founder-h">Founder's message</p>
              <blockquote>{FOUNDER.message}</blockquote>
              <cite>{FOUNDER.name}, {FOUNDER.role}</cite>
              <Verify>This is proposed copy, not a verified direct quotation. Obtain founder approval, or present it as an editorial summary, and add an approved portrait.</Verify>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Community stories */}
      <section className="section" aria-labelledby="stories-h">
        <div className="wrap">
          <SectionHead eyebrow="Community voices" title={<span id="stories-h">Growth looks different for everyone. The support matters to all of us.</span>} />
          {true ? <Testimonials /> : (
            <EmptyState
              title="Your story belongs here"
              text="We feature approved stories from mentees, mentors and partners. If WIM has made a difference to you, we would love to hear it."
              action={<Link to="/contact?type=Magazine%20submission" className="btn btn-primary">Share your story</Link>}
            />
          )}
        </div>
      </section>

      {/* 8. Events and Magazine */}
      <section className="section bg-white" aria-labelledby="latest-h">
        <div className="wrap">
          <SectionHead eyebrow="Latest from WIM" title={<span id="latest-h">Ideas, conversations and opportunities worth your time.</span>} />
          <div className="grid grid-3">
            <article className="card card-hover media-card">
              <div className="media-top" aria-hidden="true"><div className="cover-title">WIM Magazine<br /><span style={{ fontSize: "1rem", fontFamily: "var(--sans)" }}>Volume I</span></div></div>
              <div className="media-body">
                <span className="badge">Magazine</span>
                <h3>WIM Magazine, Volume I</h3>
                <p className="muted">Interviews, expert perspectives and student voices across law, GRC, legal technology and leadership.</p>
                <p className="meta">August 2025</p>
                <Link to="/magazine" className="link-arrow" style={{ marginTop: "auto" }}>Read More <Icon name="arrow" size={16} /></Link>
              </div>
            </article>
            <article className="card card-hover media-card">
              <div className="media-top" style={{ background: "var(--burgundy)" }} aria-hidden="true"><div className="cover-title">{PAST_EVENTS[0].title}</div></div>
              <div className="media-body">
                <span className="badge">Past event</span>
                <h3>{PAST_EVENTS[0].title}</h3>
                <p className="muted">{PAST_EVENTS[0].note}</p>
                <p className="meta">{PAST_EVENTS[0].date}</p>
                <Link to="/events#past" className="link-arrow" style={{ marginTop: "auto" }}>Read More <Icon name="arrow" size={16} /></Link>
              </div>
            </article>
            <article className="card card-hover media-card">
              <div className="media-top" style={{ background: "var(--accent)" }} aria-hidden="true"><div className="cover-title">Upcoming events</div></div>
              <div className="media-body">
                <span className="badge">Events</span>
                <h3>What's next</h3>
                <p className="muted">New WIM events are being planned. Follow WIM or join the community to hear about upcoming gatherings.</p>
                <Link to="/events" className="link-arrow" style={{ marginTop: "auto" }}>Explore Events <Icon name="arrow" size={16} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 9. Closing CTA */}
      <ClosingCTA />
    </>
  );
}
