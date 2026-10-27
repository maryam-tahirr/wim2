// All website copy is adapted from WIM_Website_Content_Rebuild.pdf. Items marked `verify` need WIM confirmation.

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About WIM", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Chapters", to: "/chapters" },
  { label: "WIM Magazine", to: "/magazine" },
  { label: "WIM for HIM", to: "/wim-for-him" },
];

export const JOIN_PATHWAYS = [
  { label: "Join as a Mentee", to: "/join-as-a-mentee", note: "Find guidance and community" },
  { label: "Become a Mentor", to: "/join-as-a-mentor", note: "Share your experience" },
  { label: "Become an Ambassador", to: "/experts-and-ambassadors#ambassadors", note: "Represent WIM locally" },
  { label: "Join as an Industry Expert", to: "/experts-and-ambassadors#experts", note: "Contribute your expertise" },
  { label: "Partner with WIM", to: "/partnerships", note: "For organisations" },
];

export const FOOTER_LINKS = [
  { label: "About WIM", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Chapters", to: "/chapters" },
  { label: "WIM Magazine", to: "/magazine" },
  { label: "WIM for HIM", to: "/wim-for-him" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export const FIND_AT_WIM = [
  { icon: "mentor", title: "Mentorship that meets you where you are", text: "Connect with experienced professionals who can share perspective, help you navigate decisions and support your development.", to: "/programs#mentoring", short: "Mentorship" },
  { icon: "community", title: "A community that shows up", text: "Build relationships with peers and professionals who understand the opportunities and pressures of your field.", to: "/chapters", short: "Professional Community" },
  { icon: "learn", title: "Opportunities to learn and contribute", text: "Discover events, workshops, career opportunities and ways to share your expertise.", to: "/events", short: "Learning and Development" },
  { icon: "voice", title: "A platform for your voice", text: "Contribute to WIM Magazine, join conversations and bring fresh perspectives to the wider professional community.", to: "/magazine", short: "Thought Leadership" },
  { icon: "heart", title: "Wellbeing without the awkward silence", text: "Take part in conversations and resources addressing burnout, confidence, transitions and the human side of professional life.", to: "/magazine", short: "Professional Wellbeing" },
];

export const AUDIENCES = [
  { id: "mentees", tab: "Mentees", title: "For mentees", who: "Students and early-career professionals", text: "You have goals, questions and potential. Find guidance, practical insight and a community that encourages you to keep growing.", gain: ["A mentoring relationship shaped around your goals", "A broader view of career paths", "Community conversations and events"], cta: "Join as a Mentee", to: "/join-as-a-mentee" },
  { id: "mentors", tab: "Mentors", title: "For mentors", who: "Experienced professionals who want to give back", text: "Your experience can make another person's path clearer. Share what you have learned and help emerging talent move forward.", gain: ["Share perspective and practical insight", "Be matched on goals and experience", "Contribute to a wider community"], cta: "Become a Mentor", to: "/join-as-a-mentor" },
  { id: "experts", tab: "Industry Experts", title: "For industry experts", who: "Practitioners and subject-matter specialists", text: "Bring your knowledge into the room through mentoring, events, articles, panels and professional conversations.", gain: ["Speak, write or lead a session", "Support emerging talent", "Shape professional conversations"], cta: "Join as an Industry Expert", to: "/experts-and-ambassadors#experts" },
  { id: "ambassadors", tab: "Ambassadors", title: "For ambassadors", who: "Community builders in their region", text: "Help WIM build meaningful local connections, represent the community and create opportunities in your region.", gain: ["Build local relationships", "Raise awareness of WIM", "Support approved local activities"], cta: "Become a WIM Ambassador", to: "/experts-and-ambassadors#ambassadors" },
  { id: "partners", tab: "Corporate Partners", title: "For organisations", who: "Employers, institutions and professional bodies", text: "Connect with emerging talent, contribute expertise and collaborate on initiatives that support professional growth.", gain: ["Support talent development", "Co-host events and sessions", "Contribute thought leadership"], cta: "Partner with WIM", to: "/partnerships" },
];

export const FOUNDER = {
  name: "Sabrine Makkes",
  role: "Founder of Women In Mentoring",
  message:
    "I built WIM after seeing talented people navigate the early stages of their careers without the guidance, network or reassurance they needed. I wanted to help create the kind of community where asking questions is welcomed, experience is shared generously and people do not have to figure everything out alone. WIM is built on a simple belief: when we make room for one another to grow, we all move forward.",
};

export const VALUES = [
  { title: "Authenticity first", text: "We make room for honest conversations, real questions and the person behind the professional title." },
  { title: "Mentorship that lifts", text: "We connect experience with ambition and encourage learning in both directions." },
  { title: "Opportunity without gatekeeping", text: "We work to make professional knowledge, connections and opportunities more accessible." },
  { title: "Humanity and wellbeing", text: "We recognise that growth includes challenges, uncertainty and the need for balance, not just achievements." },
  { title: "Global reach, personal connection", text: "We build across regions while keeping relationships thoughtful, respectful and human." },
  { title: "Contribution over status", text: "Every member has something to learn and something to offer, whatever their career stage." },
];

export const TIMELINE = [
  { when: "December 2024", what: "WIM founded in Dubai by Sabrine Makkes." },
  { when: "January 2025", what: "The team begins to take shape." },
  { when: "February 2025", what: "WIM launches on LinkedIn and Instagram; early community growth and first partnership announcements." },
  { when: "March 2025", what: "International Women's Day gathering and launch of WIM for HIM." },
  { when: "April 2025", what: "WIM participates as an industry partner at the GLL Legal Tech and GC Summit." },
  { when: "July 2025", what: "Partnership and regional chapter development milestones." },
  { when: "August 2025", what: "Publication of WIM Magazine Volume I." },
  { when: "Today", what: "A growing community connecting professionals and students across regions." },
];

/** Names publicly featured on WIM pages. Roles and consent must be confirmed before they are shown. */
export const TEAM_TO_VERIFY = ["Muhsina Mustafa", "Sahar Abdelhadi", "Mahek Syed", "Lavisha Changlani", "Aanya Churiwala", "Benedetta Bignotti", "Maryam Zia", "Dunia Abdelrahim"];

export const MENTEE_JOURNEY = [
  { title: "Apply", text: "Tell us about your background, interests, goals and what you hope to gain from mentoring." },
  { title: "Get matched", text: "WIM reviews applications and seeks a mentor whose experience and availability align with your needs." },
  { title: "Connect", text: "Begin conversations focused on your questions, development and next steps." },
  { title: "Grow", text: "Build perspective, confidence and professional relationships over time." },
  { title: "Give back", text: "As your experience grows, you may one day support someone else on their journey." },
];

export const MENTOR_JOURNEY = [
  { title: "Apply", text: "Share your professional experience, expertise, availability and mentoring interests." },
  { title: "Get matched", text: "WIM considers alignment between your experience, mentoring style and a mentee's goals." },
  { title: "Build trust", text: "Agree on expectations and create a respectful space for open conversation." },
  { title: "Support growth", text: "Offer perspective, thoughtful questions, practical insight and encouragement." },
  { title: "Extend your impact", text: "Contribute to a culture where knowledge is shared and future leaders are supported." },
];

/** Programmes the public site references but which WIM has not confirmed as active. Shown only while SHOW_VERIFY is on. */
export const PLANNED_PROGRAMMES = [
  { title: "WIM Accelerator", text: "A proposed structured development experience to help participants build practical skills, confidence and professional direction.", verify: "Outcomes, eligibility, dates and fees." },
  { title: "WIM Executive Coaching Track", text: "A potential coaching pathway for professionals seeking focused support around leadership, career transitions or development goals.", verify: "Coach credentials, packages, rates and availability." },
  { title: "WIM Micro-Credentials", text: "Short-form learning opportunities on relevant professional topics.", verify: "Course titles, learning hours, assessment, certificate status, instructors and fees." },
  { title: "WIM Speaker & Facilitator Bureau", text: "A potential booking pathway for speakers and facilitators from the WIM community.", verify: "Vetting, booking process, fees and platform commission." },
  { title: "WIM Case Competitions & Hackathons", text: "A potential programme for realistic professional or technology-related challenges.", verify: "Sponsors, dates, rules, judging, prizes and eligibility." },
  { title: "WIM Internship & Placement Programme", text: "A potential pathway connecting employers with suitable candidates.", verify: "Whether active, candidate assessment, employer obligations and application procedures." },
];

export const EVENT_TYPES = [
  { title: "Roundtables", text: "Focused conversations around a shared theme, designed to make room for thoughtful exchange and perspectives from different career stages." },
  { title: "Workshops", text: "Practical sessions that help participants develop knowledge and skills, from professional communication and career planning to legal technology and governance topics." },
  { title: "Webinars and fireside chats", text: "Accessible online conversations with experienced practitioners, leaders and specialists." },
  { title: "Conferences and summits", text: "Partnerships that connect the WIM community with wider industry discussions and opportunities to contribute." },
  { title: "Networking and community gatherings", text: "Welcoming spaces to meet peers, strengthen relationships and build a professional network over time." },
  { title: "University and campus events", text: "Conversations and activities that help students connect classroom learning with professional realities." },
];

export type PastEvent = { title: string; date?: string; type: string; topic: string; note: string };
export const PAST_EVENTS: PastEvent[] = [
  { title: "GLL Legal Tech and GC Summit", date: "April 2025", type: "Conferences and summits", topic: "Legal Tech", note: "WIM took part as an industry partner." },
  { title: "International Women's Day Suhoor", date: "March 2025", type: "Networking and community gatherings", topic: "Community", note: "WIM's International Women's Day gathering." },
  { title: "WIM x MDX Career Fair", type: "University and campus events", topic: "Careers", note: "A career-focused campus collaboration." },
  { title: "Bespoke Global Litigation Summit", type: "Conferences and summits", topic: "Law", note: "A conference appearance referenced on WIM's public pages." },
];

export const MAGAZINE_TOPICS = ["Law", "Governance, Risk & Compliance", "Legal Tech", "Leadership", "Wellbeing", "Career development"];

export const PARTNER_AREAS = [
  { title: "Mentorship and talent development", text: "Support mentoring and professional learning opportunities for emerging talent." },
  { title: "Events and knowledge-sharing", text: "Co-host roundtables, workshops, webinars or conference sessions that serve a defined audience." },
  { title: "Career and placement opportunities", text: "Share relevant roles, internships, shadowing or development opportunities through agreed channels." },
  { title: "Thought leadership", text: "Contribute expert perspectives, interviews and articles that advance useful professional conversations." },
  { title: "Sponsored programmes", text: "Explore supporting an approved programme or cohort where funding helps widen access and deliver a clear benefit." },
  { title: "Community engagement", text: "Connect your people with a network committed to learning, inclusion and professional growth." },
];

export const CHAPTER_REGIONS = [
  { name: "Dubai", status: "Where WIM began", text: "WIM was founded in Dubai in December 2024 and its community grew from here.", confirmed: true },
  { name: "GCC", status: "To be confirmed", text: "", confirmed: false },
  { name: "United Kingdom", status: "To be confirmed", text: "", confirmed: false },
  { name: "Egypt", status: "To be confirmed", text: "", confirmed: false },
  { name: "South Africa", status: "To be confirmed", text: "", confirmed: false },
  { name: "Kenya", status: "To be confirmed", text: "", confirmed: false },
  { name: "West Africa", status: "To be confirmed", text: "", confirmed: false },
];

export type FaqCategory = { category: string; items: { q: string; a: string; verify?: string }[] };
export const FAQS: FaqCategory[] = [
  {
    category: "About WIM",
    items: [
      { q: "What is Women In Mentoring?", a: "WIM is a mentoring and professional community connecting students, emerging talent and experienced professionals through mentorship, learning, events, thought leadership and opportunities." },
      { q: "Who is WIM for?", a: "WIM focuses on people connected to Law, Governance, Risk & Compliance, Legal Tech and related fields, including students, early-career professionals, mentors, experts and partners." },
      { q: "Does WIM operate only in the UAE?", a: "WIM was founded in Dubai and has a broader regional and international community. Check the Chapters page for current confirmed locations and participation options.", verify: "Confirm current programme reach and online participation options." },
      { q: "What makes WIM different from a general networking group?", a: "WIM combines community with structured mentoring and opportunities to learn, contribute and connect through events and thought leadership." },
    ],
  },
  {
    category: "Membership and mentoring",
    items: [
      { q: "How do I join?", a: "Choose the pathway that fits you (mentee, mentor, industry expert or ambassador) and complete the relevant application or enquiry form." },
      { q: "Is membership free?", a: "WIM's public website states that students can join for free and describes different arrangements for professionals and events. Please check the relevant application page for current terms.", verify: "Confirm current membership terms, inclusions and fees before launch." },
      { q: "Will I automatically receive a mentor?", a: "No match is promised before an application is reviewed. Matching depends on fit, availability and programme capacity.", verify: "State WIM's current matching process and timeline." },
      { q: "How much time does mentoring take?", a: "Time commitments depend on the current programme. Applicants should review the guidance provided during onboarding.", verify: "WIM's public mentor page references about 2 to 4 hours per month. Confirm before stating it." },
      { q: "Can I join from outside the UAE?", a: "WIM has an international community and online activities. Availability can vary by programme or event, so please check the details for the one you are interested in.", verify: "Confirm availability by region." },
    ],
  },
  {
    category: "Events and contributions",
    items: [
      { q: "How can I attend an event?", a: "Browse upcoming events and follow the registration instructions on the relevant event page. Member pricing, eligibility and capacity limits will be shown on each event." },
      { q: "Can I write for WIM Magazine?", a: "WIM welcomes relevant contributions from students, professionals and specialists, subject to current submission guidelines and editorial review." },
      { q: "How can my organisation partner with WIM?", a: "Use the partnership enquiry form or email the partnership team with your organisation, goals and proposed collaboration." },
      { q: "How can I become an ambassador?", a: "Review the ambassador information and submit an application when the programme is accepting applications." },
    ],
  },
  {
    category: "Contact and support",
    items: [
      { q: "I have a question about my application. Who should I contact?", a: "Use the contact details included in your application confirmation or the contact page." },
      { q: "How can I update my details or unsubscribe?", a: "Email the WIM team at the general enquiries address and we will help you update or remove your details.", verify: "Provide a member-support contact and unsubscribe/data-update links in communications." },
    ],
  },
];
