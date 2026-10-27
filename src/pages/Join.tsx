import { Link } from "../router";
import { Icon } from "../components/Icon";
import { EnquiryForm, APPLICATION_FIELDS } from "../components/Form";
import { Accordion, Checks, ClosingCTA, PageHero, Reveal, SectionHead, Steps, Verify } from "../components/ui";
import { JOIN_PATHWAYS } from "../content/site";

export function JoinHub() {
  const desc: Record<string, string> = {
    "/join-as-a-mentee": "You have goals, questions and potential. Find guidance, practical insight and a community that encourages you to keep growing.",
    "/join-as-a-mentor": "Your experience can make another person's path clearer. Share what you have learned and help emerging talent move forward.",
    "/experts-and-ambassadors#ambassadors": "Help WIM build meaningful local connections, represent the community and create opportunities in your region.",
    "/experts-and-ambassadors#experts": "Bring your knowledge into the room through mentoring, events, articles, panels and professional conversations.",
    "/partnerships": "Connect with emerging talent, contribute expertise and collaborate on initiatives that support professional growth.",
  };
  return (
    <>
      <PageHero crumb="Join WIM" eyebrow="Join WIM" title="What brings you to WIM?" lead="Choose the pathway that fits you and complete the relevant application or enquiry form." />
      <section className="visual-break" aria-label="Careers at Women In Mentoring"><div className="wrap"><figure className="visual-feature"><img src="/images/careers.svg" alt="Illustration celebrating careers and the WIM community" loading="lazy" decoding="async"/><figcaption>WIM · Building connections, creating opportunities</figcaption></figure></div></section>

      <section className="section">
        <div className="wrap grid grid-3">
          {JOIN_PATHWAYS.map((p) => (
            <Reveal key={p.to}>
              <Link to={p.to} className="card card-hover" style={{ display: "block", textDecoration: "none", height: "100%" }}>
                <p className="eyebrow">{p.note}</p>
                <h3>{p.label}</h3>
                <p style={{ color: "#4a474d" }}>{desc[p.to]}</p>
                <p className="link-arrow mt-1">Get started <Icon name="arrow" size={16} /></p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function JoinMentee() {
  return (
    <>
      <PageHero crumb="Join as a Mentee" eyebrow="Join as a mentee" wide title="You bring the ambition. Let's help you navigate the journey." lead="You do not have to build your career alone. WIM helps connect students and emerging professionals with experienced people who can offer perspective, encouragement and practical insight into Law, GRC, Legal Tech and related fields.">
        <p className="mt-2"><a href="#apply" className="btn btn-primary">Apply as a Mentee <Icon name="arrow" size={18} /></a></p>
      </PageHero>

      <section className="section">
        <div className="wrap grid grid-2" style={{ gap: "3rem" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "1.2rem" }}>WIM may be right for you if…</h2>
            <Checks items={["You are exploring career options or preparing for your first professional role.", "You want to learn from someone with experience in a field you hope to enter.", "You have questions about professional development, workplace expectations or career decisions.", "You value honest conversation, continued learning and contributing to a supportive community."]} />
          </Reveal>
          <Reveal>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "1.2rem" }}>What you can gain</h2>
            <Checks items={["A mentoring relationship shaped around your goals and your mentor's experience.", "A broader view of career paths and professional expectations.", "Access to community conversations, events and relevant opportunities, subject to current membership arrangements.", "A supportive environment to ask questions, reflect and plan your next steps."]} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="how">
        <div className="wrap split top">
          <div>
            <p className="eyebrow">How to get started</p>
            <h2 id="how">Three simple steps.</h2>
            <p className="lead mt-1">Student membership is described as free on WIM's public website.</p>
            <Verify>Confirm current eligibility and membership terms, including that student membership is free, before launch.</Verify>
          </div>
          <Steps items={[
            { title: "Complete the application", text: "Share accurate information about your goals and interests." },
            { title: "Review the guidance", text: "Read the programme guidance and participation expectations." },
            { title: "Follow the introduction process", text: "If accepted and a suitable match is available, follow the introduction and mentoring process provided by WIM." },
          ]} />
        </div>
      </section>

      <section className="section" id="apply" aria-labelledby="apply-h">
        <div className="wrap narrow">
          <SectionHead eyebrow="Application" title={<span id="apply-h">Apply as a Mentee</span>} lead="Matching depends on applications, fit and availability. A mentor is not guaranteed." />
          <div className="form-card">
            <EnquiryForm kind="Mentee application" fields={APPLICATION_FIELDS} submitLabel="Apply as a Mentee" mailSubject="Mentee application" />
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="mfaq">
        <div className="wrap narrow">
          <SectionHead eyebrow="Mentee FAQs" title={<span id="mfaq">Questions you may have</span>} />
          <Accordion idPrefix="mentee-faq" items={[
            { q: "Who can apply?", a: <p>WIM focuses on students and emerging professionals interested in Law, GRC, Legal Tech and related fields.</p>, verify: "Check the current application criteria for exact eligibility." },
            { q: "Do I need to live in the UAE?", a: <p>WIM has a regional and international community. Please check the current programme reach and online participation options.</p>, verify: "Confirm programme reach and online participation." },
            { q: "Is a mentor guaranteed?", a: <p>Matching depends on applications, fit and availability. WIM reviews each application and communicates the current process.</p>, verify: "Explain the current process and expected timeline." },
            { q: "What should I prepare?", a: <p>Think about your goals, interests, current challenges and the guidance you hope to receive.</p> },
            { q: "How much time will I need?", a: <p>Time expectations are provided in the programme guidelines and confirmed with your mentor.</p>, verify: "Publish time expectations once confirmed." },
          ]} />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}

export function JoinMentor() {
  return (
    <>
      <PageHero crumb="Become a Mentor" eyebrow="Join as a mentor" title="Your experience can change someone's direction." lead="You have learned lessons, navigated decisions and built knowledge that someone else is still working towards. Through WIM, you can share that experience with emerging talent and help make the path ahead more visible.">
        <p className="mt-2"><a href="#apply" className="btn btn-primary">Become a Mentor <Icon name="arrow" size={18} /></a></p>
      </PageHero>

      <section className="section">
        <div className="wrap split top">
          <Reveal>
            <p className="eyebrow">Mentoring with WIM</p>
            <h2>Mentoring is not about having every answer.</h2>
            <div className="prose mt-1">
              <p>WIM aims to create thoughtful mentoring relationships based on aligned goals, relevant experience, clear expectations and mutual respect. Mentoring is about listening well, sharing perspective honestly and helping another person think through their options.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3>This may be for you if…</h3>
              <Checks items={["You have experience in Law, GRC, Legal Tech or a related professional field.", "You enjoy helping others learn and make informed decisions.", "You can offer consistent, respectful support within an agreed time commitment.", "You value inclusive professional development and knowledge-sharing."]} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap grid grid-2" style={{ gap: "3rem" }}>
          <div>
            <p className="eyebrow">What mentors can expect</p>
            <Checks items={["A process to share your background, expertise, interests and availability.", "Matching that considers the needs of both mentor and mentee, subject to programme capacity.", "Guidance on expectations, boundaries and the mentoring relationship.", "Potential opportunities to contribute to events, thought leadership and the wider WIM community."]} />
            <Verify>WIM's public mentor page references approximately 2 to 4 hours per month. Verify this expectation before stating it.</Verify>
          </div>
          <div>
            <p className="eyebrow">How it works</p>
            <Steps items={[
              { title: "Submit your mentor profile", text: "Share your mentoring preferences and experience." },
              { title: "WIM reviews your application", text: "We consider suitable matches." },
              { title: "Agree the basics", text: "Set goals, communication and boundaries with your mentee." },
              { title: "Meet consistently", text: "Support the mentee's development within the agreed programme structure." },
            ]} />
          </div>
        </div>
      </section>

      <section className="section" id="apply" aria-labelledby="apply-h">
        <div className="wrap narrow">
          <SectionHead eyebrow="Application" title={<span id="apply-h">Become a Mentor</span>} lead="Submit your mentor profile and mentoring preferences. Matching depends on programme capacity." />
          <div className="form-card">
            <EnquiryForm kind="Mentor application" fields={APPLICATION_FIELDS.map((f) => f.name === "goals" ? { ...f, label: "What would you like to gain or contribute?", hint: "Tell us about your experience and the kind of mentoring you would like to offer." } : f)} submitLabel="Become a Mentor" mailSubject="Mentor application" />
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="mentorfaq">
        <div className="wrap narrow">
          <SectionHead eyebrow="Mentor FAQs" title={<span id="mentorfaq">Questions you may have</span>} />
          <Accordion idPrefix="mentor-faq" items={[
            { q: "Do I need formal mentoring qualifications?", a: <p>Relevant experience, communication skills and a willingness to support others matter most.</p>, verify: "State actual requirements in the application guidelines." },
            { q: "How are mentees matched?", a: <p>WIM considers goals, expertise, specialisation, availability and fit. Matching depends on programme capacity.</p> },
            { q: "How long does the relationship last?", a: <p>The programme duration and review process are shared during onboarding.</p>, verify: "Publish current programme duration and review process only after confirmation." },
            { q: "Can I contribute in other ways?", a: <p>Depending on current opportunities, mentors may support events, articles, panels, interviews or other initiatives. <Link to="/experts-and-ambassadors#experts" style={{ color: "var(--maroon)", fontWeight: 600 }}>Learn about the industry expert pathway.</Link></p> },
          ]} />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
