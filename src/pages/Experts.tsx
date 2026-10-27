import { EnquiryForm, type Field } from "../components/Form";
import { Checks, ClosingCTA, PageHero, Reveal, Verify } from "../components/ui";

const baseFields = (extra: Field): Field[] => [
  { name: "fullName", label: "Full name", required: true, autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
  { name: "role", label: "Current role", required: true },
  { name: "organisation", label: "Organisation", autoComplete: "organization" },
  { name: "region", label: "Country or region", required: true, autoComplete: "country-name" },
  extra,
  { name: "message", label: "How would you like to contribute?", type: "textarea", required: true },
  { name: "linkedin", label: "LinkedIn profile", type: "url" },
];

export default function Experts() {
  return (
    <>
      <PageHero crumb="Industry Experts & Ambassadors" eyebrow="Contribute" wide title="Two ways to give your experience a wider reach." lead="Share expertise as an industry expert, or help WIM grow in your region as an ambassador." />
      <section className="visual-break" aria-label="Leadership at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/leadership.svg" alt="Illustration celebrating leadership and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>


      <section className="section" id="experts" aria-labelledby="exp-h">
        <div className="wrap split top">
          <Reveal>
            <p className="eyebrow">Industry Experts</p>
            <h2 id="exp-h">Bring expertise. Open perspectives. Shape what comes next.</h2>
            <p className="lead mt-1">WIM creates opportunities for experienced professionals to share knowledge with a community eager to learn. Experts may contribute through mentoring, articles, interviews, webinars, panels, workshops and other approved initiatives.</p>
            <div className="mt-2"><Checks items={["Lead or join a practical learning session.", "Share a perspective through WIM Magazine or a community interview.", "Support emerging talent through mentoring or career conversations.", "Contribute specialist insight to discussions on law, GRC, legal technology, leadership or wellbeing."]} /></div>
          </Reveal>
          <Reveal>
            <div className="form-card">
              <h3 style={{ marginBottom: "1rem" }}>Express Interest as an Industry Expert</h3>
              <EnquiryForm kind="Industry expert enquiry" submitLabel="Express Interest" mailSubject="Industry expert enquiry" fields={baseFields({ name: "expertise", label: "Area of expertise", required: true, hint: "For example: Governance, Legal Tech, regulatory compliance." })} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" id="ambassadors" aria-labelledby="amb-h">
        <div className="wrap split top">
          <Reveal>
            <p className="eyebrow">Ambassadors</p>
            <h2 id="amb-h">Local knowledge. Shared purpose. Wider impact.</h2>
            <p className="lead mt-1">WIM ambassadors help connect the organisation with professionals, students, institutions and partners in their communities. They support regional visibility, relationship-building and activities that reflect local needs while staying aligned with WIM's mission and values.</p>
            <div className="mt-2"><Checks items={["Represent WIM accurately and professionally.", "Build relationships with universities, professional groups and potential partners.", "Help identify relevant speakers, contributors, events and opportunities.", "Support approved local activities and share community feedback with the WIM team."]} /></div>
            <Verify>Publish confirmed selection criteria, application process, expected time commitment, term length, support provided and code of conduct.</Verify>
          </Reveal>
          <Reveal>
            <div className="form-card">
              <h3 style={{ marginBottom: "1rem" }}>Apply to Become an Ambassador</h3>
              <EnquiryForm kind="Ambassador application" submitLabel="Apply to Become an Ambassador" mailSubject="Ambassador application" fields={baseFields({ name: "community", label: "Community or region you would represent", required: true })} />
            </div>
          </Reveal>
        </div>
      </section>
      <ClosingCTA primary={{ label: "Explore all pathways", to: "/join" }} />
    </>
  );
}
