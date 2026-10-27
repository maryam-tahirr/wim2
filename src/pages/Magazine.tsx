import { useMemo, useState } from "react";
import { Link } from "../router";
import { Icon } from "../components/Icon";
import { ClosingCTA, EmptyState, PageHero, Reveal, SectionHead, Verify } from "../components/ui";
import { MAGAZINE_TOPICS } from "../content/site";
import { EMAILS } from "../config";

type Issue = { id: string; title: string; volume: string; date: string; summary: string; topics: string[]; url: string };
/** Published issues. Add real issues here (cover image, contributors, link) as WIM supplies them. */
const ISSUES: Issue[] = [
  { id: "vol-1", title: "WIM Magazine", volume: "Volume I", date: "August 2025", summary: "Interviews, expert perspectives and student voices across law, GRC, legal technology, leadership and wellbeing.", topics: MAGAZINE_TOPICS, url: "https://womeninmentoring.org/magazine/" },
];

export default function Magazine() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("All");
  const shown = useMemo(() => ISSUES.filter((i) => (topic === "All" || i.topics.includes(topic)) && `${i.title} ${i.volume} ${i.summary} ${i.date}`.toLowerCase().includes(q.trim().toLowerCase())), [q, topic]);

  return (
    <>
      <PageHero crumb="WIM Magazine" eyebrow="WIM Magazine & thought leadership" wide title="The stories our professions need to hear, told by the people shaping them." lead="WIM Magazine brings together interviews, expert perspectives, student voices and ideas across Law, Governance, Risk & Compliance, Legal Tech, leadership, wellbeing and the changing world of work. It is a platform for learning, sharing experience and making room for voices at every stage of the journey." />
      <section className="visual-break" aria-label="Magazine at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/magazine.svg" alt="Illustration celebrating magazine and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" aria-labelledby="explore">
        <div className="wrap">
          <SectionHead eyebrow="Explore the magazine" title={<span id="explore">Read perspectives. Discover people. Challenge assumptions.</span>} lead="Explore published issues, interviews and feature stories from experienced practitioners, emerging professionals and contributors across the WIM community." />
          <div className="toolbar" role="search">
            <div className="search">
              <Icon name="search" size={18} />
              <label className="sr-only" htmlFor="mag-q">Search the magazine</label>
              <input id="mag-q" className="field" type="search" placeholder="Search issues…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          <div className="row" role="group" aria-label="Filter by topic" style={{ marginBottom: "1.6rem" }}>
            {["All", ...MAGAZINE_TOPICS].map((t) => <button key={t} className="chip" aria-pressed={topic === t} onClick={() => setTopic(t)}>{t}</button>)}
          </div>
          <p className="sr-only" role="status" aria-live="polite">{shown.length} issues shown</p>
          {shown.length === 0 ? <EmptyState title="No results found." text="Try changing your search or filters." action={<button className="btn btn-outline" onClick={() => { setQ(""); setTopic("All"); }}>Clear filters</button>} /> : (
            <div className="grid grid-3">
              {shown.map((i) => (
                <Reveal key={i.id}>
                  <article className="card card-hover media-card" style={{ height: "100%" }}>
                    <div className="media-top" aria-hidden="true" style={{ aspectRatio: "4 / 5", background: "linear-gradient(160deg, var(--maroon), var(--burgundy))" }}>
                      <div className="cover-title" style={{ fontSize: "2.2rem" }}>{i.title}<br /><span style={{ fontFamily: "var(--sans)", fontSize: "1rem", letterSpacing: ".14em", textTransform: "uppercase" }}>{i.volume}</span></div>
                    </div>
                    <div className="media-body">
                      <span className="badge">{i.volume}</span>
                      <h3>{i.title}, {i.volume}</h3>
                      <p className="muted">{i.summary}</p>
                      <p className="meta">Published {i.date}</p>
                      <a href={i.url} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ marginTop: "auto" }}>Read Issue <Icon name="arrow" size={16} /><span className="sr-only"> (opens WIM's published magazine page in a new tab)</span></a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
          <Verify>Add cover images, editorial summaries, featured contributors and issue numbers. Individual article pages are not built because no article text has been supplied.</Verify>
        </div>
      </section>

      <section className="section bg-white" id="submit" aria-labelledby="contribute">
        <div className="wrap split top">
          <Reveal>
            <p className="eyebrow">Contribute to WIM Magazine</p>
            <h2 id="contribute">Have a perspective worth sharing?</h2>
            <p className="lead mt-1">We welcome thoughtful contributions from students, professionals and specialists who want to share insight, experience and ideas with the WIM community. Topics may include law, GRC, legal technology, leadership, career development, wellbeing and adjacent fields.</p>
          </Reveal>
          <Reveal>
            <div className="card">
              <p>Potential formats include articles, interviews, opinion pieces, case studies and student features. Submissions should be original, relevant and appropriately sourced.</p>
              <p className="mt-1">Submission does not guarantee publication; the editorial team may edit accepted material for clarity, length and house style.</p>
              <p className="mt-2 row"><Link to="/contact?type=Magazine%20submission" className="btn btn-primary">Submit Your Story</Link></p>
              <Verify>Verify {EMAILS.editorial} and the current submission window.</Verify>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-blush" aria-labelledby="advert">
        <div className="wrap split">
          <div><p className="eyebrow">Partnership and advertising</p><h2 id="advert">Put your organisation alongside ideas that move the profession forward.</h2></div>
          <div>
            <p className="lead">Request the current media kit for audience information, formats, rates, deadlines and editorial and advertising policies.</p>
            <p className="mt-2"><Link to="/contact?type=Media%20kit%20request" className="btn btn-primary">Request the Media Kit</Link></p>
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
