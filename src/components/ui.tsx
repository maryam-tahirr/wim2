import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link } from "../router";
import { Icon } from "./Icon";
import { SHOW_VERIFY } from "../config";

/** Fades content in as it scrolls into view. Content is visible by default without JS or with reduced motion. */
export function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = Tag as any;
  return <T ref={ref} className={`reveal ${className}`}>{children}</T>;
}

/** Amber pre-launch note. Renders only while SHOW_VERIFY is on. */
export function Verify({ children }: { children: ReactNode }) {
  if (!SHOW_VERIFY) return null;
  return <span className="verify">{children}</span>;
}

export function PageHero({ eyebrow, title, lead, crumb, variant, children, wide }: { eyebrow: string; title: ReactNode; lead?: ReactNode; crumb?: string; variant?: "dark"; children?: ReactNode; wide?: boolean }) {
  return (
    <header className={`page-hero ${variant ?? ""} ${wide ? "wide" : ""}`}>
      <div className="wrap">
        {crumb && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">{crumb}</span>
          </nav>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}

export function SectionHead({ eyebrow, title, lead, center }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean }) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="lead" style={center ? { marginInline: "auto" } : undefined}>{lead}</p>}
    </div>
  );
}

export function ClosingCTA({ title = "Ready to take your next step?", text = "Whether you are looking for guidance, ready to share your experience or hoping to collaborate, there is a place for you in the WIM community.", primary = { label: "Join the Community", to: "/join" }, secondary = { label: "Partner with WIM", to: "/partnerships" } }: { title?: string; text?: string; primary?: { label: string; to: string }; secondary?: { label: string; to: string } }) {
  return (
    <section className="cta-band section" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
          <div className="row">
            <Link to={primary.to} className="btn btn-light">{primary.label}<Icon name="arrow" size={18} /></Link>
            <Link to={secondary.to} className="btn btn-ghost-light">{secondary.label}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="steps">
      {items.map((s) => (
        <li key={s.title}><strong>{s.title}</strong>{s.text}</li>
      ))}
    </ol>
  );
}

export function Checks({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

export type FaqItem = { q: string; a: ReactNode; verify?: string };

export function Accordion({ items, idPrefix }: { items: FaqItem[]; idPrefix?: string }) {
  const base = useId();
  const prefix = idPrefix ?? base;
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="acc">
      {items.map((it, i) => {
        const id = `${prefix}-${i}`;
        const isOpen = open === id;
        return (
          <div className="acc-item" key={it.q}>
            <h3 style={{ font: "inherit" }}>
              <button className="acc-btn" aria-expanded={isOpen} aria-controls={`${id}-p`} id={`${id}-b`} onClick={() => setOpen(isOpen ? null : id)}>
                <span>{it.q}</span>
                <span className="plus" aria-hidden="true" />
              </button>
            </h3>
            <div id={`${id}-p`} role="region" aria-labelledby={`${id}-b`} hidden={!isOpen} className="acc-panel">
              {it.a}
              {it.verify && <Verify>{it.verify}</Verify>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** WAI-ARIA tabs with arrow-key, Home and End support. */
export function Tabs({ tabs, label }: { tabs: { id: string; label: string; panel: ReactNode }[]; label: string }) {
  const [active, setActive] = useState(tabs[0].id);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const onKey = (e: React.KeyboardEvent, idx: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next >= 0) {
      e.preventDefault();
      setActive(tabs[next].id);
      refs.current[tabs[next].id]?.focus();
    }
  };
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  return (
    <div>
      <div className="tablist" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button key={t.id} ref={(el) => { refs.current[t.id] = el; }} role="tab" id={`tab-${t.id}`} className="tab" aria-selected={active === t.id} aria-controls={`panel-${t.id}`} tabIndex={active === t.id ? 0 : -1} onClick={() => setActive(t.id)} onKeyDown={(e) => onKey(e, i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} tabIndex={0}>
        {current.panel}
      </div>
    </div>
  );
}

/** Vertical timeline whose milestones animate in as they scroll into view (static when motion is reduced). */
export function Timeline({ items }: { items: { when: string; what: string }[] }) {
  return (
    <ol className="timeline">
      {items.map((t) => (
        <Reveal as="li" key={t.when}>
          <div className="when">{t.when}</div>
          <p className="what">{t.what}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function EmptyState({ title, text, action }: { title: string; text: ReactNode; action?: ReactNode }) {
  return (
    <div className="empty" role="status">
      <h3>{title}</h3>
      <p className="muted" style={{ maxWidth: "46ch", marginInline: "auto" }}>{text}</p>
      {action && <div className="row" style={{ justifyContent: "center", marginTop: "1.2rem" }}>{action}</div>}
    </div>
  );
}
