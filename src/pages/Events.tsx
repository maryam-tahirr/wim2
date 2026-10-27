import { useMemo, useState } from "react";
import { Link } from "../router";
import { Icon } from "../components/Icon";
import { ClosingCTA, EmptyState, PageHero, Reveal, SectionHead, Verify } from "../components/ui";
import { EVENT_TYPES, PAST_EVENTS } from "../content/site";

export type UpcomingEvent = { title: string; date: string; timeZone: string; format: string; location: string; audience: string; host: string; price: string; type: string; topic: string; region: string; registerUrl: string };
/** Add confirmed upcoming events here. Nothing is shown as upcoming until WIM supplies real details. */
const UPCOMING: UpcomingEvent[] = [];

export default function Events() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const types = ["All", ...Array.from(new Set(PAST_EVENTS.map((e) => e.type)))];

  const past = useMemo(() => PAST_EVENTS.filter((e) => {
    const hay = `${e.title} ${e.note} ${e.topic} ${e.date ?? ""}`.toLowerCase();
    return (type === "All" || e.type === type) && hay.includes(q.trim().toLowerCase());
  }), [q, type]);

  return (
    <>
      <PageHero crumb="Events" eyebrow="Events" title="Some conversations change everything." lead="WIM events bring people together to learn, exchange ideas and build professional relationships. From focused roundtables to webinars, workshops and conference partnerships, each gathering is an opportunity to leave with a new perspective or a useful connection." />
      <section className="visual-break" aria-label="Events at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/events.svg" alt="Illustration celebrating events and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" aria-labelledby="formats">
        <div className="wrap">
          <SectionHead eyebrow="Formats" title={<span id="formats">How we gather</span>} />
          <div className="grid grid-3">
            {EVENT_TYPES.map((e) => <Reveal key={e.title}><div className="card card-hover" style={{ height: "100%" }}><h3>{e.title}</h3><p style={{ color: "#4a474d" }}>{e.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="upcoming" aria-labelledby="up-h">
        <div className="wrap">
          <SectionHead eyebrow="Upcoming events" title={<span id="up-h">Find your next room, conversation or idea.</span>} />
          {UPCOMING.length === 0 ? (
            <EmptyState title="New WIM events are being planned." text="Follow WIM or join the community to hear about upcoming gatherings." action={<><Link to="/join" className="btn btn-primary">Join the community</Link><Link to="/contact" className="btn btn-outline">Ask about events</Link></>} />
          ) : (
            <div className="grid grid-3">
              {UPCOMING.map((e) => (
                <article className="card" key={e.title}>
                  <span className="badge">{e.type}</span><h3 style={{ marginTop: ".8rem" }}>{e.title}</h3>
                  <p className="muted">{e.date} · {e.timeZone} · {e.format} · {e.location}</p>
                  <p>{e.audience}. Hosted by {e.host}. {e.price}</p>
                  <a className="btn btn-primary mt-1" href={e.registerUrl}>Register</a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" id="past" aria-labelledby="past-h">
        <div className="wrap">
          <SectionHead eyebrow="Past events" title={<span id="past-h">Where WIM has shown up</span>} lead="Photography and recaps will appear here once approved by WIM and the people featured." />
          <div className="toolbar" role="search">
            <div className="search">
              <Icon name="search" size={18} />
              <label className="sr-only" htmlFor="ev-q">Search past events</label>
              <input id="ev-q" className="field" type="search" placeholder="Search events…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <label className="sr-only" htmlFor="ev-type">Filter by event type</label>
            <select id="ev-type" className="field" style={{ width: "auto", maxWidth: "100%" }} value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            {(q || type !== "All") && <button className="btn btn-outline btn-sm" onClick={() => { setQ(""); setType("All"); }}>Clear filters</button>}
          </div>
          <p className="sr-only" role="status" aria-live="polite">{past.length} past events shown</p>
          {past.length === 0 ? (
            <EmptyState title="No results found." text="Try changing your search or filters." />
          ) : (
            <div className="grid grid-2">
              {past.map((e) => (
                <Reveal key={e.title}>
                  <article className="card card-hover" style={{ height: "100%" }}>
                    <span className="badge">{e.type}</span>
                    <h3 style={{ marginTop: ".8rem" }}>{e.title}</h3>
                    <p className="meta muted" style={{ fontSize: ".85rem" }}>{e.date ?? "Date to be confirmed"} · {e.topic}</p>
                    <p className="mt-1">{e.note}</p>
                    {!e.date && <Verify>Confirm date, partner titles and image permissions.</Verify>}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-blush" aria-labelledby="host-h">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Host an event with WIM</p>
            <h2 id="host-h">Bring a useful conversation to the community.</h2>
          </div>
          <div>
            <p className="lead">WIM works with organisations and institutions to develop events that support professional learning, connection and opportunity. Tell us about your audience, topic, format and goals.</p>
            <p className="mt-2"><Link to="/partnerships#enquiry" className="btn btn-primary">Discuss an Event Partnership</Link></p>
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
