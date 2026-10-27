// Production build: bundles the app with esbuild, then writes one HTML file per route
// (dist/about/index.html, ...) with route-specific title, description, canonical and Open Graph tags,
// so direct URLs, refreshes and crawlers work on any static host without rewrite rules.
import { build, context } from "esbuild";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const watch = process.argv.includes("--watch");
const SITE_URL = (process.env.WIM_SITE_URL || "https://womeninmentoring.org").replace(/\/$/, "");
const FORM_ENDPOINT = process.env.WIM_FORM_ENDPOINT || "";
const SHOW_VERIFY = process.env.WIM_SHOW_VERIFY === "false" ? "false" : "true";
const routes = JSON.parse(readFileSync("src/routes-meta.json", "utf8"));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/assets", { recursive: true });

const opts = {
  entryPoints: { app: "src/main.tsx" },
  bundle: true,
  minify: !watch,
  sourcemap: watch,
  format: "esm",
  target: ["es2020"],
  outdir: "dist/assets",
  jsx: "automatic",
  loader: { ".json": "json" },
  define: {
    "process.env.NODE_ENV": '"production"',
    __SITE_URL__: JSON.stringify(SITE_URL),
    __FORM_ENDPOINT__: JSON.stringify(FORM_ENDPOINT),
    __SHOW_VERIFY__: JSON.stringify(SHOW_VERIFY),
  },
  logLevel: "info",
};

if (watch) {
  const ctx = await context(opts);
  await ctx.watch();
} else {
  await build(opts);
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Women In Mentoring",
  alternateName: "WIM",
  url: SITE_URL,
  founder: { "@type": "Person", name: "Sabrine Makkes" },
  foundingDate: "2024-12",
  foundingLocation: { "@type": "Place", name: "Dubai" },
  email: "info@womeninmentoring.org",
};

const template = readFileSync("index.html", "utf8");

function page(r, jsAssets = "/assets/app.js", cssAsset = "/assets/app.css") {
  const url = SITE_URL + (r.path === "/" ? "/" : r.path);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(r.description)}" />`);
  const extra = [
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${r.noindex ? "noindex" : "index,follow"}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Women In Mentoring" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<link rel="stylesheet" href="${cssAsset}" />`,
    r.path === "/" ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : "",
  ].join("\n    ");
  html = html.replace("</head>", `    ${extra}\n  </head>`);
  html = html.replace(/<script type="module" src="[^"]*"><\/script>/, `<script type="module" src="${jsAssets}"></script>`);
  return html;
}

for (const r of routes) {
  const out = r.path === "/" ? "dist/index.html" : join("dist", r.path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(r));
}
writeFileSync("dist/404.html", page({ path: "/404", title: "Page not found | Women In Mentoring", description: "The page you were looking for could not be found.", noindex: true }));

if (existsSync("public")) cpSync("public", "dist", { recursive: true });

const today = new Date().toISOString().slice(0, 10);
writeFileSync("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => `  <url><loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`Built ${routes.length} routes into dist/ (verification notes ${SHOW_VERIFY === "true" ? "ON" : "OFF"}, form endpoint ${FORM_ENDPOINT ? "set" : "not set"}).`);
