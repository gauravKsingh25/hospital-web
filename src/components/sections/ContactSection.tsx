import { SITE, mailto } from "@/content/site";

const FIELDS = [
  { id: "f-name", name: "name", label: "Your name", type: "text", autoComplete: "name", required: true, error: "Write your name." },
  {
    id: "f-email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    inputMode: "email",
    required: true,
    error: "Write an email address with an @, like name@hospital.in.",
  },
  {
    id: "f-phone",
    name: "phone",
    label: "Mobile",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
    required: false,
    error: "Write a 10-digit mobile number.",
  },
  {
    id: "f-hospital",
    name: "hospital_name",
    label: "Hospital or clinic",
    type: "text",
    autoComplete: "organization",
    required: true,
    error: "Write the hospital's name.",
  },
] as const;

/**
 * The demo request. The kit's system.js validates it and posts it as JSON to
 * the API's public contact route (`POST /api/v1/public/contact`), which keeps it
 * and emails the owner. The `mailto:` action is the fallback if scripts fail.
 */
export function ContactSection() {
  return (
    <section className="section" id="contact-form" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5 stack-5">
            <h2 id="contact-h">Contact us for a demo</h2>
            <p className="t-lead">
              Tell us about your hospital. We reply by email and set a time to show you the system on a call.
            </p>
            <p>
              Prefer to write?{" "}
              <a className="link" href={mailto("Nirogya demo")}>
                Email us
              </a>
            </p>
          </div>
          <div className="card span-6 start-7">
            <form
              className="form"
              action={mailto("Nirogya demo request")}
              method="post"
              encType="text/plain"
              data-endpoint={`${SITE.apiUrl}/api/v1/public/contact`}
              data-format="json"
              data-failed="Not sent. Check the fields, or email us instead."
              data-sent="Your demo request is in. We reply by email."
              noValidate
            >
              {FIELDS.map((f) => (
                <div className="field" key={f.id}>
                  <label htmlFor={f.id}>{f.label}</label>
                  <input
                    id={f.id}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    inputMode={"inputMode" in f ? f.inputMode : undefined}
                    required={f.required}
                    aria-describedby={`${f.id}-err`}
                  />
                  <p className="field__error" id={`${f.id}-err`} hidden>
                    {f.error}
                  </p>
                </div>
              ))}
              <div className="field field--full">
                <label htmlFor="f-message">What should we show you?</label>
                <textarea id="f-message" name="message" rows={6} aria-describedby="f-message-err" />
                <p className="field__error" id="f-message-err" hidden>
                  Write a few words about your hospital.
                </p>
              </div>
              {/* honeypot: people never see or fill it; a form that arrives with it filled is dropped */}
              <div hidden aria-hidden="true">
                <label htmlFor="f-website">Website</label>
                <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="btn-row">
                <button className="btn btn--primary" type="submit">
                  Request a demo
                </button>
              </div>
              <p className="form__status" role="status" data-form-status="" />
              <p className="t-small muted">We reply by email.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
