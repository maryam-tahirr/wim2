import { useMemo, useState } from "react";
import { Link } from "../router";
import { Icon } from "../components/Icon";
import { Accordion, EmptyState, PageHero } from "../components/ui";
import { FAQS } from "../content/site";

export default function Faqs() {
  const [q, setQ] = useState("");
  const groups = useMemo(() => {
    const n = q.trim().toLowerCase();
    return FAQS.map((g) => ({ ...g, items: g.items.filter((i) => !n || `${i.q} ${i.a}`.toLowerCase().includes(n)) })).filter((g) => g.items.length);
  }, [q]);
  const total = groups.reduce((a, g) => a + g.items.length, 0);

  return (
    <>
      <PageHero crumb="FAQs" eyebrow="FAQs" title="Questions, answered." lead="Everything you might want to know about membership, mentoring, events, the magazine and working with WIM." />
      <section className="section">
        <div className="wrap narrow">
          <div className="toolbar" role="search">
            <div className="search" style={{ maxWidth: "none" }}>
              <Icon name="search" size={18} />
              <label className="sr-only" htmlFor="faq-q">Search the FAQs</label>
              <input id="faq-q" className="field" type="search" placeholder="Search questions…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          <p className="sr-only" role="status" aria-live="polite">{total} questions shown</p>
          {groups.length === 0 ? (
            <EmptyState title="No results found." text="Try a different search, or ask us directly." action={<Link to="/contact" className="btn btn-primary">Contact WIM</Link>} />
          ) : groups.map((g, gi) => (
            <div key={g.category} style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{g.category}</h2>
              <Accordion idPrefix={`faq-${gi}`} items={g.items.map((i) => ({ q: i.q, a: <p>{i.a}</p>, verify: i.verify }))} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
