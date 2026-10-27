import { useRef, useState, type FormEvent } from "react";
import { EMAILS, FORM_ENDPOINT } from "../config";
import { Link } from "../router";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select" | "url";
  required?: boolean;
  options?: string[];
  autoComplete?: string;
  hint?: string;
  span?: boolean;
  maxLength?: number;
};

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(fields: Field[], values: Record<string, string>, consent: boolean) {
  const errors: Record<string, string> = {};
  for (const f of fields) {
    const v = (values[f.name] ?? "").trim();
    if (f.required && !v) errors[f.name] = `Please enter ${f.label.toLowerCase().replace(/\s*\(optional\)/, "")}.`;
    else if (v && f.type === "email" && !EMAIL_RE.test(v)) errors[f.name] = "Please enter a valid email address, for example name@example.com.";
    else if (v && f.type === "url") {
      try { const u = new URL(v); if (!/^https?:$/.test(u.protocol)) throw new Error(); }
      catch { errors[f.name] = "Please enter a full web address starting with https://"; }
    }
  }
  if (!consent) errors.consent = "Please confirm that you have read the privacy notice.";
  return errors;
}

export function EnquiryForm({
  kind, fields, submitLabel, mailTo = EMAILS.general, mailSubject, initial, intro,
}: {
  kind: string; fields: Field[]; submitLabel: string; mailTo?: string; mailSubject?: string; initial?: Record<string, string>; intro?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(initial ?? {});
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const lock = useRef(false); // blocks duplicate submissions even before state re-renders
  const honeypot = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const idBase = `f-${kind}`;

  const set = (n: string, v: string) => {
    setValues((p) => ({ ...p, [n]: v }));
    if (errors[n]) setErrors((p) => { const c = { ...p }; delete c[n]; return c; });
  };

  const mailtoHref = () => {
    const body = fields.map((f) => `${f.label}: ${values[f.name] ?? ""}`).join("\n");
    return `mailto:${mailTo}?subject=${encodeURIComponent(mailSubject ?? `WIM website: ${kind}`)}&body=${encodeURIComponent(body)}`;
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (lock.current || status === "submitting") return;
    if (honeypot.current?.value) { setStatus("success"); return; } // bots: silently discard
    const errs = validate(fields, values, consent);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("idle");
      setTimeout(() => summaryRef.current?.focus(), 0);
      return;
    }
    if (!FORM_ENDPOINT) { setStatus("unconfigured"); return; }
    lock.current = true;
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ form: kind, submittedAt: new Date().toISOString(), privacyNoticeAccepted: true, ...values }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
      lock.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="alert alert-ok" role="status" tabIndex={-1}>
        <strong>Thank you. Your submission has been received.</strong>
        Our team will review your details and respond if a follow-up is needed.
      </div>
    );
  }

  const errKeys = Object.keys(errors);
  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-busy={status === "submitting"}>
      {intro && <p className="muted">{intro}</p>}
      {errKeys.length > 0 && (
        <div className="alert alert-err" role="alert" tabIndex={-1} ref={summaryRef}>
          <strong>Please check the highlighted fields.</strong>
          <ul style={{ paddingLeft: "1.2rem" }}>
            {errKeys.map((k) => (
              <li key={k}><a href={`#${idBase}-${k}`}>{errors[k]}</a></li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-grid two">
        {fields.map((f) => {
          const id = `${idBase}-${f.name}`;
          const err = errors[f.name];
          const common = {
            id, name: f.name, value: values[f.name] ?? "", className: "field",
            "aria-invalid": err ? true : undefined,
            "aria-describedby": [err ? `${id}-e` : "", f.hint ? `${id}-h` : ""].filter(Boolean).join(" ") || undefined,
            "aria-required": f.required || undefined,
            autoComplete: f.autoComplete,
            maxLength: f.maxLength ?? (f.type === "textarea" ? 2000 : 200),
          } as const;
          return (
            <div key={f.name} className={f.span || f.type === "textarea" ? "span-2" : undefined}>
              <label className="field-label" htmlFor={id}>
                {f.label}{f.required ? <span className="req" aria-hidden="true"> *</span> : <span className="opt"> (optional)</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea {...common} onChange={(e) => set(f.name, e.target.value)} />
              ) : f.type === "select" ? (
                <select {...common} onChange={(e) => set(f.name, e.target.value)}>
                  <option value="">Select an option</option>
                  {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input {...common} type={f.type ?? "text"} onChange={(e) => set(f.name, e.target.value)} />
              )}
              {f.hint && <p className="field-hint" id={`${id}-h`}>{f.hint}</p>}
              {err && <p className="field-error" id={`${id}-e`}>{err}</p>}
            </div>
          );
        })}
      </div>
      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it */}
      <div className="hp" aria-hidden="true">
        <label>Leave this field empty<input ref={honeypot} type="text" name="website_url" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div>
        <label className="check">
          <input id={`${idBase}-consent`} type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors((p) => { const c = { ...p }; delete c.consent; return c; }); }} aria-invalid={errors.consent ? true : undefined} aria-describedby={errors.consent ? `${idBase}-consent-e` : undefined} />
          <span>I have read the <Link to="/privacy" style={{ color: "var(--maroon)", fontWeight: 600 }}>privacy notice</Link> and understand how my information will be used.</span>
        </label>
        {errors.consent && <p className="field-error" id={`${idBase}-consent-e`}>{errors.consent}</p>}
      </div>

      {status === "error" && (
        <div className="alert alert-err" role="alert">
          <strong>Something went wrong while sending your information.</strong>
          Please try again, or <a href={mailtoHref()} style={{ fontWeight: 600 }}>email us at {mailTo}</a>.
        </div>
      )}
      {status === "unconfigured" && (
        <div className="alert alert-info" role="alert">
          <strong>Your details have not been sent.</strong>
          Online submission is not switched on for this website yet. Your entries are valid. You can send them by email instead:{" "}
          <a href={mailtoHref()} style={{ fontWeight: 600 }}>open an email to {mailTo}</a>.
        </div>
      )}

      <div className="row">
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"} aria-disabled={status === "submitting"}>
          {status === "submitting" ? (<><span className="spinner" aria-hidden="true" /> Sending…</>) : submitLabel}
        </button>
      </div>
      <p className="field-hint">We only ask for what is needed to respond to you. Fields marked * are required.</p>
    </form>
  );
}

export const APPLICATION_FIELDS: Field[] = [
  { name: "fullName", label: "Full name", required: true, autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
  { name: "role", label: "Current role or study area", required: true },
  { name: "organisation", label: "Organisation or institution", autoComplete: "organization" },
  { name: "region", label: "Country or region", required: true, autoComplete: "country-name" },
  { name: "interests", label: "Areas of interest", required: true, hint: "For example: Law, Governance, Risk & Compliance, Legal Tech, leadership." },
  { name: "goals", label: "What would you like to gain or contribute?", type: "textarea", required: true },
  { name: "availability", label: "Availability", required: true, hint: "For example: evenings, one conversation a month." },
  { name: "linkedin", label: "LinkedIn profile", type: "url" },
];
