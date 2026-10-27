import { useEffect, useRef, type ComponentType } from "react";
import { useLocation, useScrollManagement } from "./router";
import { Layout } from "./components/Layout";
import meta from "./routes-meta.json";
import { SITE_URL } from "./config";
import Home from "./pages/Home";
import DocumentaryGallery from "./components/DocumentaryGallery";
import About from "./pages/About";
import Programs from "./pages/Programs";
import { JoinHub, JoinMentee, JoinMentor } from "./pages/Join";
import Experts from "./pages/Experts";
import Him from "./pages/Him";
import Events from "./pages/Events";
import Magazine from "./pages/Magazine";
import Chapters from "./pages/Chapters";
import Partnerships from "./pages/Partnerships";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import { Privacy, Terms } from "./pages/Legal";
import NotFound from "./pages/NotFound";

const ROUTES: Record<string, ComponentType> = {
  "/": Home,
  "/about": About,
  "/programs": Programs,
  "/join": JoinHub,
  "/join-as-a-mentee": JoinMentee,
  "/join-as-a-mentor": JoinMentor,
  "/experts-and-ambassadors": Experts,
  "/wim-for-him": Him,
  "/events": Events,
  "/magazine": Magazine,
  "/chapters": Chapters,
  "/partnerships": Partnerships,
  "/faqs": Faqs,
  "/contact": Contact,
  "/privacy": Privacy,
  "/terms": Terms,
};

function setMeta(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
}

function useDocumentMeta(pathname: string) {
  useEffect(() => {
    const m = meta.find((r) => r.path === pathname);
    const title = m?.title ?? "Page not found | Women In Mentoring";
    const desc = m?.description ?? "The page you were looking for could not be found.";
    const url = SITE_URL.replace(/\/$/, "") + (pathname === "/" ? "/" : pathname);
    document.title = title;
    const mk = (tag: string, k: string, v: string) => () => { const e = document.createElement(tag); e.setAttribute(k, v); return e; };
    setMeta('meta[name="description"]', "content", desc, mk("meta", "name", "description"));
    setMeta('meta[property="og:title"]', "content", title, mk("meta", "property", "og:title"));
    setMeta('meta[property="og:description"]', "content", desc, mk("meta", "property", "og:description"));
    setMeta('meta[property="og:url"]', "content", url, mk("meta", "property", "og:url"));
    setMeta('link[rel="canonical"]', "href", url, mk("link", "rel", "canonical"));
    setMeta('meta[name="robots"]', "content", m ? "index,follow" : "noindex", mk("meta", "name", "robots"));
  }, [pathname]);
}

export default function App() {
  const loc = useLocation();
  const first = useRef(true);
  useScrollManagement(loc, first);
  useDocumentMeta(loc.pathname);
  const Page = ROUTES[loc.pathname] ?? NotFound;
  return <Layout><Page /><DocumentaryGallery path={loc.pathname} /></Layout>;
}
