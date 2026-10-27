import { PageHero } from "../components/ui";
import { EMAILS } from "../config";

function Placeholder({ what }: { what: string }) {
  return (
    <div className="alert alert-info" role="note">
      <strong>Placeholder: approved legal text required</strong>
      WIM's approved {what} has not been supplied. This page must be replaced with reviewed text before launch, covering the jurisdictions where WIM operates.
    </div>
  );
}

export function Privacy() {
  return (
    <>
      <PageHero crumb="Privacy Policy" eyebrow="Legal" title="Privacy Policy" lead="How Women In Mentoring handles personal information submitted through this website." />
      <section className="section">
        <div className="wrap narrow stack">
          <Placeholder what="Privacy Policy" />
          <h2 style={{ fontSize: "1.6rem" }}>What this website currently does</h2>
          <ul className="check-list">
            <li>Forms ask only for the details needed to respond to your enquiry or application.</li>
            <li>Each form asks you to confirm you have read this notice before you submit.</li>
            <li>This website does not set advertising cookies or run analytics scripts. Fonts are loaded from Google Fonts, which receives your IP address when a page loads.</li>
            <li>Submitted details are used to respond to you, review applications and run WIM programmes.</li>
          </ul>
          <p>Questions about your data, or requests to update or remove it, can be sent to <a href={`mailto:${EMAILS.general}`} style={{ color: "var(--maroon)", fontWeight: 600 }}>{EMAILS.general}</a>.</p>
          <p className="muted">Retention period, access controls, processors and legal bases are to be confirmed by WIM in the approved policy.</p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageHero crumb="Terms of Use" eyebrow="Legal" title="Terms of Use" lead="Terms of use for the Women In Mentoring website." />
      <section className="section">
        <div className="wrap narrow stack">
          <Placeholder what="Terms of Use" />
          <p className="muted">Until approved terms are published, please contact <a href={`mailto:${EMAILS.general}`} style={{ color: "var(--maroon)", fontWeight: 600 }}>{EMAILS.general}</a> with any questions about using this website.</p>
        </div>
      </section>
    </>
  );
}
