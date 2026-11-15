"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { PLANS, SITE } from "@/content/site";
import {
  handoffUrl,
  messageFor,
  planFrom,
  postJson,
  detailsPayload,
  validateCode,
  validateDetails,
  validatePassword,
  PASSWORD_MIN,
  type ApiFailure,
  type Details,
} from "@/lib/signup";

type Step = "details" | "code" | "password";

const RESEND_SECONDS = 60;

const STEP_TITLES: Record<Step, string> = {
  details: "Your details",
  code: "Check your email",
  password: "Choose a password",
};

/** What to say under a field the server refused. */
const FIELD_HELP: Partial<Record<keyof Details, string>> = {
  full_name: "Write your name, up to 200 characters.",
  email: "Check the email address, like name@hospital.in.",
  phone: "Write a mobile number of up to 20 digits.",
  hospital_name: "Write the hospital's name, up to 200 characters.",
};

const DETAIL_FIELDS = [
  { name: "full_name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", inputMode: "email" },
  { name: "phone", label: "Mobile (optional)", type: "tel", autoComplete: "tel", inputMode: "tel" },
  { name: "hospital_name", label: "Hospital or clinic", type: "text", autoComplete: "organization" },
] as const;

/**
 * Signup in three steps: details → the emailed code → a password. Then the
 * browser goes to the app's `/auth/handoff`, which signs the person in.
 *
 * The signup token lives in this component's state and nowhere else: a
 * refresh drops it, and the person starts the details step again.
 */
export function SignupFlow() {
  const [step, setStep] = useState<Step>("details");
  const [details, setDetails] = useState<Details>({
    full_name: "",
    email: "",
    phone: "",
    hospital_name: "",
    plan_code: "professional",
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof Details, string>>>({});
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const [alert, setAlert] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [resendIn, setResendIn] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    const plan = planFrom(window.location.search);
    setDetails((d) => ({ ...d, plan_code: plan }));
  }, []);

  // Each new step is announced: focus goes to its heading (not on first load).
  useEffect(() => {
    if (moved.current) heading.current?.focus();
    moved.current = true;
  }, [step]);

  useEffect(() => {
    if (resendIn <= 0) return;
    const timer = window.setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [resendIn]);

  function goTo(next: Step) {
    setAlert(null);
    setInputError(null);
    setStep(next);
  }

  function fail(failure: ApiFailure) {
    setAlert(messageFor(failure));
    setBusy(false);
  }

  async function sendDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const errors = validateDetails(details);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setBusy(true);
    setAlert(null);
    const result = await postJson(SITE.apiUrl, "/signup/start", detailsPayload(details));
    if (!result.ok) {
      // The server refused a field the page let through: mark it, in the page's words.
      const refused = (result.fields ?? []).filter((f): f is keyof Details => f in FIELD_HELP);
      if (refused.length > 0) {
        setFieldErrors(Object.fromEntries(refused.map((f) => [f, FIELD_HELP[f]])));
      }
      return fail(result);
    }
    setBusy(false);
    setCode("");
    setResendIn(RESEND_SECONDS);
    goTo("code");
  }

  async function resend() {
    if (busy || resendIn > 0) return;
    setBusy(true);
    setAlert(null);
    const result = await postJson(SITE.apiUrl, "/signup/resend", { email: details.email.trim() });
    if (!result.ok) return fail(result);
    setBusy(false);
    setResendIn(RESEND_SECONDS);
    // The server answers the same whether or not it could send (cooldown,
    // hourly cap, no enumeration), so the page cannot promise an email.
    setAlert("If a new code can be sent, it is on its way. Use the newest code in your inbox.");
  }

  async function checkCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const problem = validateCode(code);
    setInputError(problem);
    if (problem) return;
    setBusy(true);
    setAlert(null);
    const result = await postJson<{ signup_token: string }>(SITE.apiUrl, "/signup/verify", {
      email: details.email.trim(),
      code: code.trim(),
    });
    if (!result.ok) return fail(result);
    setBusy(false);
    setToken(result.data.signup_token);
    goTo("password");
  }

  async function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const problem = validatePassword(password, confirm);
    setInputError(problem);
    if (problem) return;
    setBusy(true);
    setAlert(null);
    const result = await postJson<{ handoff_code: string }>(SITE.apiUrl, "/signup/complete", {
      signup_token: token,
      password,
    });
    if (!result.ok) {
      if (result.code === "signup_token_invalid") {
        // The token ran out: start again, with the details still filled in.
        setToken(null);
        setPassword("");
        setConfirm("");
        setBusy(false);
        setStep("details");
        setAlert(messageFor(result));
        return;
      }
      return fail(result);
    }
    // Stay busy: the button must not be pressed again while the app loads.
    window.location.assign(handoffUrl(SITE.appUrl, result.data.handoff_code));
  }

  const stepNumber = step === "details" ? 1 : step === "code" ? 2 : 3;

  return (
    <div className="signup">
      <p className="t-label signup__step">Step {stepNumber} of 3</p>
      <h2 ref={heading} tabIndex={-1} className="signup__title">
        {STEP_TITLES[step]}
      </h2>
      <p className="form__status signup__alert" role="alert">
        {alert ?? ""}
      </p>

      {step === "details" ? (
        <form onSubmit={sendDetails} noValidate>
          <div className="form">
            {DETAIL_FIELDS.map((f) => (
              <div className="field" key={f.name}>
                <label htmlFor={`s-${f.name}`}>{f.label}</label>
                <input
                  id={`s-${f.name}`}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  inputMode={"inputMode" in f ? f.inputMode : undefined}
                  value={details[f.name]}
                  onChange={(e) => setDetails((d) => ({ ...d, [f.name]: e.target.value }))}
                  aria-invalid={fieldErrors[f.name] ? true : undefined}
                  aria-describedby={`s-${f.name}-err`}
                />
                <p className="field__error" id={`s-${f.name}-err`} hidden={!fieldErrors[f.name]}>
                  {fieldErrors[f.name] ?? ""}
                </p>
              </div>
            ))}
            <fieldset className="field field--full signup__plans">
              <legend>Plan</legend>
              {PLANS.map((plan) => (
                <label key={plan.code} className="signup__plan">
                  <input
                    type="radio"
                    name="plan_code"
                    value={plan.code}
                    checked={details.plan_code === plan.code}
                    onChange={() => setDetails((d) => ({ ...d, plan_code: plan.code }))}
                  />
                  <span>
                    {plan.name} {plan.price} a month
                  </span>
                </label>
              ))}
            </fieldset>
            <p className="t-small muted">
              By continuing you agree to our{" "}
              <a className="link" href="/terms/">
                terms
              </a>
              . Our{" "}
              <a className="link" href="/privacy/">
                privacy notice
              </a>{" "}
              says what we keep about you and why.
            </p>
            <div className="btn-row">
              <button className="btn btn--primary" type="submit" disabled={busy}>
                Send the code
              </button>
            </div>
          </div>
        </form>
      ) : null}

      {step === "code" ? (
        <form onSubmit={checkCode} noValidate>
          <div className="form">
            <p>
              We sent a 6-digit code to <strong>{details.email.trim()}</strong>. It works for a few minutes. If
              you asked for more than one, use the newest.
            </p>
            <div className="field field--full">
              <label htmlFor="s-code">Code</label>
              <input
                id="s-code"
                className="signup__code"
                name="code"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                aria-invalid={inputError ? true : undefined}
                aria-describedby="s-code-err"
              />
              <p className="field__error" id="s-code-err" hidden={!inputError}>
                {inputError ?? ""}
              </p>
            </div>
            <div className="btn-row">
              <button className="btn btn--primary" type="submit" disabled={busy}>
                Check the code
              </button>
              <button className="btn btn--secondary" type="button" onClick={resend} disabled={busy || resendIn > 0}>
                {resendIn > 0 ? `Send a new code (${resendIn}s)` : "Send a new code"}
              </button>
            </div>
            <p>
              <button className="link signup__back" type="button" onClick={() => goTo("details")}>
                Change details
              </button>
            </p>
          </div>
        </form>
      ) : null}

      {step === "password" ? (
        <form onSubmit={createAccount} noValidate>
          <div className="form">
            <p>At least {PASSWORD_MIN} characters. A short sentence is easy to remember and hard to guess.</p>
            <div className="field field--full">
              <label htmlFor="s-password">Password</label>
              <input
                id="s-password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={inputError ? true : undefined}
                aria-describedby="s-password-err"
              />
            </div>
            <div className="field field--full">
              <label htmlFor="s-confirm">Password again</label>
              <input
                id="s-confirm"
                name="confirm"
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                aria-invalid={inputError ? true : undefined}
                aria-describedby="s-password-err"
              />
              <p className="field__error" id="s-password-err" hidden={!inputError}>
                {inputError ?? ""}
              </p>
            </div>
            <div className="btn-row">
              <button className="btn btn--primary" type="submit" disabled={busy}>
                Create account
              </button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}
