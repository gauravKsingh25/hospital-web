import type { CSSProperties } from "react";

type Step = {
  key: string;
  name: string;
  desk: string;
  icon: string;
  /** "done": time as written; "run": time so far, `--k` its progress; "wait": shows Queued. */
  state: "done" | "run" | "wait";
  shown: string;
  /** The finished time of a step not done yet (pipeline-board counts up to it). */
  finish?: string;
  progress?: number;
};

// One OPD visit as the kit's pipeline-board: each desk is a step, the doctor's is running.
const STEPS: Step[] = [
  { key: "register", name: "Registered", desk: "Reception", icon: "ui-user-plus", state: "done", shown: "40s" },
  { key: "vitals", name: "Vitals", desk: "Sister Lakshmi", icon: "ui-activity", state: "done", shown: "2m 10s" },
  {
    key: "consult",
    name: "Doctor",
    desk: "Dr Vikram Rao",
    icon: "ui-stethoscope",
    state: "run",
    shown: "2m 40s",
    finish: "4m 30s",
    progress: 0.6,
  },
  { key: "lab", name: "Lab", desk: "Blood sample", icon: "ui-flask-conical", state: "wait", shown: "Queued", finish: "1m 05s" },
  { key: "bill", name: "Billing", desk: "Cashier, UPI", icon: "ui-banknote", state: "wait", shown: "Queued", finish: "50s" },
];

const LOG: { step: string; text: string }[] = [
  { step: "register", text: "Rakesh Yadav, 58 M, mobile and age taken" },
  { step: "register", text: "Token 13 for Dr Vikram Rao, room 3" },
  { step: "register", text: "Consultation ₹500 added to the bill" },
  { step: "vitals", text: "BP 152/94, pulse 82, SpO2 97%" },
  { step: "vitals", text: "Weight 74 kg, temperature 36.8 °C" },
  { step: "vitals", text: "Sent to the doctor's list" },
  { step: "consult", text: "Note: BP review, on amlodipine 5 mg" },
  { step: "consult", text: "Rx: amlodipine 10 mg once a day" },
  { step: "consult", text: "Ordered: lipid profile, ₹600 added" },
  { step: "lab", text: "Sample collected at the lab counter" },
  { step: "lab", text: "Lipid profile entered and signed" },
  { step: "lab", text: "Report sent to Dr Vikram Rao" },
  { step: "bill", text: "Bill ₹1,100 settled by UPI" },
  { step: "bill", text: "Receipt RC-000215 printed" },
  { step: "bill", text: "Visit closed" },
];

const CHECK = (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="m4.5 8.2 2.3 2.3 4.7-5" />
  </svg>
);

/** The liquid-type statement, and one visit moving desk to desk while the doctor writes. */
export function DoctorsSection() {
  return (
    <section className="section statement" id="doctors" aria-labelledby="doctors-h">
      <div className="wrap">
        <div data-moment="liquid-type" className="section-head" style={{ maxWidth: "none" }}>
          <h2 id="doctors-h" className="mo-lt__type">
            Doctors only write the note
          </h2>
          <p>
            Reception registers and bills, nurses take vitals, the lab enters results. The doctor reviews,
            prescribes and signs, on one screen.
          </p>
        </div>
        <div className="panel doctors__visit">
          <div className="stage">
            <div className="at-corner fit" style={{ "--fit-max": "880px", "--ax": "40px", "--ay": "32px", "--ax-sm": "16px", "--ay-sm": "16px" } as CSSProperties} data-ui-loop="">
              <div
                className="ui ui-panel ui-pipe"
                data-ui="pipeline-board"
                role="img"
                aria-label="One OPD visit: registered at reception, vitals by the nurse, the consultation with the doctor in progress, then the lab and billing"
              >
                <div className="ui-pipe__head">
                  <span className="ui-pipe__repo">OPD visit</span>
                  <i className="ui-pipe__slash">/</i>
                  <code className="ui-pipe__ref">Token 13</code>
                  <span className="ui-pipe__run">KMC-26-000418</span>
                  <span className="ui-spacer" />
                  <span className="ui-pipe__total">
                    <svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <circle cx="8" cy="8.5" r="5.5" />
                      <path d="M8 5.5v3l2 1.25M6.5 1.75h3" />
                    </svg>
                    <span data-pipe-total="">5m 30s</span>
                  </span>
                  <span className="ui-chip ui-chip--ink ui-chip--live ui-pipe__chip" data-pipe-chip="" data-done="Closed">
                    In progress
                  </span>
                </div>
                <div className="ui-pipe__commit">
                  <span className="ui-avatar" data-tone="3">
                    RY
                  </span>
                  <span className="ui-pipe__msg">Rakesh Yadav · BP review</span>
                  <code className="ui-pipe__sha">General Medicine</code>
                </div>
                <ol className="ui-pipe__steps">
                  {STEPS.map((s) => (
                    <li
                      key={s.key}
                      className={`ui-pipe__step${s.state === "done" ? " is-done" : s.state === "run" ? " is-run" : ""}`}
                      data-step={s.key}
                      style={s.progress !== undefined ? ({ "--k": String(s.progress) } as CSSProperties) : undefined}
                    >
                      <span className="ui-pipe__ico">{CHECK}</span>
                      <span className="ui-pipe__name">
                        <span className="ui-pipe__tool" aria-hidden="true">
                          <img src={`/assets/icons/${s.icon}.svg`} alt="" width={13} height={13} loading="lazy" decoding="async" />
                        </span>
                        <span className="ui-pipe__nm">{s.name}</span>
                      </span>
                      <code className="ui-pipe__cmd">{s.desk}</code>
                      <span className="ui-pipe__time" data-time={s.finish ?? ""}>
                        {s.shown}
                      </span>
                      <span className="ui-pipe__bar">
                        <i />
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="ui-pipe__log" aria-hidden="true">
                  {LOG.map((l) => (
                    <span key={l.text} className={`ui-pipe__line${l.step === "consult" ? " is-on" : ""}`} data-step={l.step}>
                      {l.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
