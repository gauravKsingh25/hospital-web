import type { CSSProperties } from "react";

/** Tenant isolation and roles, with the role toggles on fluted glass. */
export function SecuritySection() {
  return (
    <section className="section" id="security" aria-labelledby="security-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5 stack-5">
            <h2 id="security-h">Each hospital's records, kept apart</h2>
            <p className="t-lead">Patients, bills and notes are separated by hospital in the database itself, not only in the app, so one hospital's staff can never open another's records.</p>
            <ul className="stack-3">
              <li>Every change is logged with who made it and when.</li>
              <li>Administrators and doctors sign in with a code from an authenticator app.</li>
              <li>A screen left alone for 10 minutes locks itself.</li>
            </ul>
            <p><a className="link" href="privacy.html">Read the privacy policy</a></p>
          </div>
          <div className="frame frame--split span-6 start-7" data-visual="" data-fx="fluted-glass" data-fx-seed="7" data-fx-palette='{"bg":"#d9ccb7","surface":"#e9e0d2","ink":"#2a2622","accent":"#a8794a"}'>
            <div className="stage stage--fade-b"><div className="at-rise fit" style={{"--fit-max": "420px", "--w": "420px", "--ay": "56px", "--ay-sm": "24px"} as CSSProperties} data-ui-loop="">
              <div className="ui ui-panel ui-toggles" data-ui="toggles">
                <div className="ui-head">
                  <svg className="ui-icon ui-toggles__ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" /><path d="m5.8 8 1.6 1.6 3-3.2" /></svg>
                  <div className="ui-title">What reception may do</div>
                  <span className="ui-spacer"></span>
                  <div className="ui-meta" data-tg-count="">4 of 6 on</div>
                </div>
                <ul className="ui-toggles__list">
                  <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Register patients</span><span className="ui-tg__sub">Four fields and a token</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Register patients"><i></i></button></li>
                  <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Take payments</span><span className="ui-tg__sub">UPI, card and cash</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Take payments"><i></i></button></li>
                  <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Read the doctor's notes</span><span className="ui-tg__sub">Clinical staff only</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Read the doctor's notes"><i></i></button></li>
                  <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Send patients for admission</span><span className="ui-tg__sub">To the admission desk</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Send patients for admission"><i></i></button></li>
                  <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Waive a charge</span><span className="ui-tg__sub">Accounts and administrators</span></span><button className="ui-switch" type="button" role="switch" aria-checked="false" aria-label="Waive a charge"><i></i></button></li>
                  <li className="ui-tg"><span className="ui-tg__text"><span className="ui-tg__label">Print bills</span><span className="ui-tg__sub">On the hospital's letterhead</span></span><button className="ui-switch is-on" type="button" role="switch" aria-checked="true" aria-label="Print bills"><i></i></button></li>
                </ul>
              </div>
            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
