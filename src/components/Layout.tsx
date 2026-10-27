import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "../router";
import { Icon } from "./Icon";
import { EMAILS, SOCIAL_LINKS } from "../config";
import { FOOTER_LINKS, JOIN_PATHWAYS, NAV } from "../content/site";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className="brand" aria-label="Women In Mentoring, home" onClick={onClick}>
      <span className="brand-mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 64 64"><path d="M10 20l9 27 9-19 9 19 9-27" fill="none" stroke="#F7E9ED" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span className="brand-text"><span className="brand-name">WIM</span><span className="brand-sub">Women In Mentoring</span></span>
    </Link>
  );
}

function isActive(path: string, to: string) {
  const t = to.split("#")[0];
  return t === "/" ? path === "/" : path === t || path.startsWith(t + "/");
}

export function Header() {
  const loc = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setDrawer(false); setDd(false); }, [loc.pathname, loc.hash]);

  // Dropdown: close on outside click or Escape
  useEffect(() => {
    if (!dd) return;
    const click = (e: MouseEvent) => { if (!ddRef.current?.contains(e.target as Node)) setDd(false); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setDd(false); };
    document.addEventListener("mousedown", click);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("mousedown", click); document.removeEventListener("keydown", key); };
  }, [dd]);

  // Drawer: lock scroll, trap focus, Escape closes, return focus to the menu button
  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = drawerRef.current!;
    const focusable = () => Array.from(root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
    focusable()[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setDrawer(false); return; }
      if (e.key !== "Tab") return;
      const els = focusable();
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", key);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", key); menuBtn.current?.focus(); };
  }, [drawer]);

  const joinActive = ["/join", "/join-as-a-mentee", "/join-as-a-mentor", "/experts-and-ambassadors", "/partnerships"].includes(loc.pathname);

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); document.getElementById("main")?.scrollIntoView(); }}>Skip to main content</a>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap header-in">
          <Logo />
          <nav className="nav-desktop" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link" aria-current={isActive(loc.pathname, n.to) ? "page" : undefined}>{n.label}</Link>
            ))}
            <div className="nav-item" ref={ddRef}>
              <button className="nav-link" aria-expanded={dd} aria-controls="join-menu" aria-haspopup="true" onClick={() => setDd(!dd)} aria-current={joinActive ? "page" : undefined}>
                Join WIM <Icon name="chevron" size={14} />
              </button>
              {dd && (
                <div className="dropdown" id="join-menu">
                  {JOIN_PATHWAYS.map((p) => (
                    <Link key={p.to} to={p.to}>{p.label}<small>{p.note}</small></Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <Link to="/join" className="btn btn-primary btn-sm header-cta">Join the Community</Link>
            <button ref={menuBtn} className="menu-btn" aria-expanded={drawer} aria-controls="mobile-drawer" onClick={() => setDrawer(true)}>
              <Icon name="menu" size={18} /> Menu
            </button>
          </div>
        </div>
      </header>
      {drawer && (
        <>
          <div className="drawer-backdrop" onClick={() => setDrawer(false)} />
          <div className="drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Site menu" ref={drawerRef}>
            <div className="drawer-top">
              <Logo onClick={() => setDrawer(false)} />
              <button className="icon-btn" onClick={() => setDrawer(false)} aria-label="Close menu"><Icon name="close" size={18} /></button>
            </div>
            <nav aria-label="Mobile">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="d-link" aria-current={isActive(loc.pathname, n.to) ? "page" : undefined}>{n.label}</Link>
              ))}
              <p className="d-sub">Join WIM</p>
              {JOIN_PATHWAYS.map((p) => (
                <Link key={p.to} to={p.to} className="d-link d-path">{p.label}</Link>
              ))}
            </nav>
            <Link to="/join" className="btn btn-primary" style={{ marginTop: "1.2rem" }}>Join the Community</Link>
          </div>
        </>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: "1.2rem", maxWidth: "34ch", fontSize: ".93rem" }}>
              Women In Mentoring connects emerging talent and experienced professionals through mentorship, community, learning and opportunities across Law, GRC, Legal Tech and beyond.
            </p>
            {SOCIAL_LINKS.length > 0 && (
              <ul style={{ display: "flex", gap: "1rem", marginTop: "1.2rem" }} aria-label="Social media">
                {SOCIAL_LINKS.map((s) => <li key={s.label}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
              </ul>
            )}
          </div>
          <nav aria-labelledby="f-nav">
            <h2 id="f-nav">Explore</h2>
            <ul>{FOOTER_LINKS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </nav>
          <nav aria-labelledby="f-join">
            <h2 id="f-join">Community pathways</h2>
            <ul>{JOIN_PATHWAYS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </nav>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${EMAILS.general}`}>{EMAILS.general}</a></li>
              <li><a href={`mailto:${EMAILS.partnership}`}>{EMAILS.partnership}</a></li>
              <li><a href={`mailto:${EMAILS.editorial}`}>{EMAILS.editorial}</a></li>
              <li><Link to="/contact">Send an enquiry</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Women In Mentoring. All rights reserved.</span>
          <span style={{ display: "flex", gap: "1.2rem" }}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })}>
      <Icon name="arrowUp" size={20} />
    </button>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} style={{ outline: "none" }}>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
