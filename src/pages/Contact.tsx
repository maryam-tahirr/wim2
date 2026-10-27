import { useMemo } from "react";
import { Link, useLocation } from "../router";
import { Icon } from "../components/Icon";
import { EnquiryForm } from "../components/Form";
import { PageHero, Verify } from "../components/ui";
import { EMAILS, SOCIAL_LINKS } from "../config";

const TYPES = ["General enquiry", "Partnership or event collaboration", "Magazine submission", "Media kit request", "Application question", "Other"];

export default function Contact() {
  const { search } = useLocation();
  const initialType = useMemo(() => {
    const raw = new URLSearchParams(search).get("type")?.toLowerCase() ?? "";
    return TYPES.find((t) => raw && (t.toLowerCase() === raw || t.toLowerCase().startsWith(raw.split(" ")[0]))) ?? "";
  }, [search]);

  const mailTo = initialType.startsWith("Partnership") ? EMAILS.partnership : initialType.startsWith("Magazine") || initialType.startsWith("Media") ? EMAILS.editorial : EMAILS.general;

  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact" title="Let's start a conversation." lead="Whether you are interested in mentorship, want to contribute your expertise, are exploring a partnership or simply have a question, we would be glad to hear from you." />
      <section className="visual-break" aria-label="Global at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/global.svg" alt="Illustration celebrating global and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>

      <section className="section">
        <div className="wrap split top">
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "1.4rem" }}>Choose the right route</h2>
            <ul style={{ listStyle: "none", display: "grid", gap: "1.1rem" }}>
              {[["General enquiries", EMAILS.general], ["Partnerships and event collaborations", EMAILS.partnership], ["Magazine submissions", EMAILS.editorial]].map(([l, e]) => (
                <li key={e} className="card" style={{ padding: "1.1rem 1.3rem" }}>
                  <p className="muted" style={{ fontSize: ".85rem" }}>{l}</p>
                  <a href={`mailto:${e}`} className="link-arrow"><Icon name="mail" size={18} />{e}</a>
                </li>
              ))}
            </ul>
            <Verify>Verify all email addresses before launch.</Verify>
            <h3 style={{ marginTop: "2rem" }}>Stay connected</h3>
            {SOCIAL_LINKS.length ? (
              <p className="row mt-1">{SOCIAL_LINKS.map((s) => <a key={s.label} className="chip" href={s.url} target="_blank" rel="noopener noreferrer">{s.label}<span className="sr-only"> (opens in a new tab)</span></a>)}</p>
            ) : (
              <p className="muted mt-1">Follow WIM on LinkedIn and Instagram for community stories, event announcements, new opportunities and updates from across our network.</p>
            )}
            <Verify>Confirm and add the official LinkedIn and Instagram URLs in src/config.ts.</Verify>
            <p className="mt-2 muted">Looking for quick answers? <Link to="/faqs" style={{ color: "var(--maroon)", fontWeight: 600 }}>Read the FAQs</Link>.</p>
          </div>
          <div className="form-card">
            <EnquiryForm
              key={initialType}
              kind="Contact enquiry"
              submitLabel="Send message"
              mailTo={mailTo}
              mailSubject={`WIM website enquiry${initialType ? `: ${initialType}` : ""}`}
              initial={initialType ? { enquiryType: initialType } : undefined}
              fields={[
                { name: "fullName", label: "Full name", required: true, autoComplete: "name" },
                { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
                { name: "enquiryType", label: "Enquiry type", type: "select", required: true, options: TYPES },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
