import { useEffect, useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type Loc = { pathname: string; search: string; hash: string };

const EVENT = "wim:navigate";
let cache: Loc = read();

function read(): Loc {
  let p = window.location.pathname.replace(/\/+$/, "");
  if (p === "") p = "/";
  return { pathname: p, search: window.location.search, hash: window.location.hash };
}

function subscribe(cb: () => void) {
  const handler = () => {
    const next = read();
    if (next.pathname !== cache.pathname || next.search !== cache.search || next.hash !== cache.hash) {
      cache = next;
    }
    cb();
  };
  window.addEventListener("popstate", handler);
  window.addEventListener(EVENT, handler);
  return () => {
    window.removeEventListener("popstate", handler);
    window.removeEventListener(EVENT, handler);
  };
}

export function useLocation(): Loc {
  return useSyncExternalStore(subscribe, () => cache, () => cache);
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  window.history.pushState({}, "", url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(EVENT));
}

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string; children?: ReactNode };

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== "_self") return;
    if (!isInternal(to)) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

/** Scroll to hash targets or top on navigation, and move focus to the main region for screen readers. */
export function useScrollManagement(loc: Loc, first: { current: boolean }) {
  useEffect(() => {
    if (loc.hash) {
      const id = decodeURIComponent(loc.hash.slice(1));
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
    if (!first.current) document.getElementById("main")?.focus({ preventScroll: true });
    first.current = false;
  }, [loc.pathname, loc.hash, first]);
}
