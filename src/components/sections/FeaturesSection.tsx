import type { CSSProperties } from "react";

/** Four feature cards on silk-folds panels, on the inverse ground. */
export function FeaturesSection() {
  return (
    <section className="section g2 ground-inverse" id="features" aria-labelledby="features-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="features-h">Features for the front desk and the wards. <span className="muted">Each role sees its own screens.</span></h2>
          </div>
          <div className="grid">
            <article className="card card--row span-6 m-nolift">
              <h3>Registers a patient in four fields</h3>
              <p>Name, mobile, approximate age and gender, then a token for the doctor. Address and insurance can wait.</p>
              <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="21" data-fx-palette='{"bg":"#d9ccb7","surface":"#e9e0d2","ink":"#2a2622","accent":"#a8794a"}' data-fx-params='{"speed":0,"drift":0}'>
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{"--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "40px", "--ay-sm": "24px"} as CSSProperties} data-ui-loop="">
                  <div className="ui ui-panel ui-checks" data-ui="checklist">
                    <div className="ui-checks__head">
                      <div className="ui-title">Quick OPD · Dr Vikram Rao</div>
                      <span className="ui-spacer"></span>
                      <div className="ui-meta" data-checks-count="">2 of 5</div>
                    </div>
                    <div className="ui-checks__bar"><i data-checks-bar="" style={{"--k": "0.4"} as CSSProperties}></i></div>
                    <ul className="ui-checks__list">
                      <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Name: Rakesh Yadav</span></li>
                      <li className="ui-check is-done"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Mobile: 98••• ••412</span></li>
                      <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Age: about 58</span></li>
                      <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Gender: male</span></li>
                      <li className="ui-check"><span className="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg></span><span className="ui-check__label">Token 13 printed</span></li>
                    </ul>
                  </div>
                </div></div>
              </div>
            </article>
            <article className="card card--row span-6 m-nolift">
              <h3>Builds the bill during the visit</h3>
              <p>Consultation, tests and medicines add themselves. The cashier takes UPI, card or cash and prints the receipt.</p>
              <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="34" data-fx-palette='{"bg":"#c6d3df","surface":"#d6e0e9","ink":"#25303a","accent":"#7f9fbd"}' data-fx-params='{"speed":0,"drift":0,"tone":1}'>
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{"--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "calc(100% - 180px)", "--ay-sm": "calc(100% - 180px)"} as CSSProperties}>
                  <div className="ui ui-notify" data-ui="notify">
                    <ul className="ui-notify__list" data-notify-list="">
                      <li className="ui-note"><span className="ui-note__ico"><svg className="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4" /></svg></span><span className="ui-note__text"><span className="ui-note__title">₹850 received by UPI<time>now</time></span><span className="ui-note__body">Meera Iyer · receipt RC-000214</span></span><span className="ui-btn ui-btn--sm ui-note__btn">Print</span></li>
                      <li className="ui-note"><span className="ui-avatar ui-note__av" data-tone="4">LB</span><span className="ui-note__text"><span className="ui-note__title">Complete blood count added<time>3m</time></span><span className="ui-note__body">₹350 · ordered by Dr Vikram Rao</span></span></li>
                      <li className="ui-note"><span className="ui-avatar ui-note__av" data-tone="2">RC</span><span className="ui-note__text"><span className="ui-note__title">Consultation added<time>14m</time></span><span className="ui-note__body">₹500 · General Medicine</span></span></li>
                    </ul>
                  </div>
                </div></div>
              </div>
            </article>
          </div>
        </div>
        <div className="grid">
          <article className="card card--row span-6 m-nolift">
            <h3>Shows every bed in every ward</h3>
            <p>Occupied, free, being cleaned or held, kept current as nurses admit, transfer and discharge.</p>
            <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="47" data-fx-palette='{"bg":"#cdd6c6","surface":"#dce3d6","ink":"#262d24","accent":"#6c8e63"}' data-fx-params='{"speed":0,"drift":0}'>
              <div className="stage stage--fade-b"><div className="at-rise fit to-edge" style={{"--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "40px", "--ay-sm": "24px"} as CSSProperties}>
                <div className="ui ui-panel ui-stat" data-ui="stat" data-ui-opts='{"fill":true}' data-from="71" data-to="78" data-suffix="%">
                  <div className="ui-stat__head">
                    <div className="ui-stat__top">
                      <span className="ui-stat__label">Beds occupied</span>
                      <span className="ui-stat__range">All wards<svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 6.5 3.5 3.5 3.5-3.5" /></svg></span>
                    </div>
                    <div className="ui-stat__line">
                      <span className="ui-stat__num" data-stat-num="">78%</span>
                      <span className="ui-chip ui-chip--plain ui-stat__delta"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 9.5v-7M3 5.5l3-3 3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>4 beds</span>
                      <span className="ui-stat__sub">since this morning</span>
                    </div>
                  </div>
                  <div className="ui-stat__chart">
                    <svg className="ui-stat__svg" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
                      <path className="ui-stat__grid" d="M0 30.5H400M0 60.5H400M0 90.5H400" />
                      <path className="ui-stat__cover" fillRule="evenodd" d="" />
                      <g className="ui-stat__bars"><rect rx="3" x="0.00" y="44.95" width="21.14" height="75.05" /><rect rx="3" x="29.14" y="40.86" width="21.14" height="79.14" /><rect rx="3" x="58.29" y="49.04" width="21.14" height="70.96" /><rect rx="3" x="87.43" y="42.22" width="21.14" height="77.78" /><rect rx="3" x="116.57" y="36.76" width="21.14" height="83.24" /><rect rx="3" x="145.71" y="38.13" width="21.14" height="81.87" /><rect rx="3" x="174.86" y="34.04" width="21.14" height="85.96" /><rect rx="3" x="204.00" y="40.86" width="21.14" height="79.14" /><rect rx="3" x="233.14" y="31.31" width="21.14" height="88.69" /><rect rx="3" x="262.29" y="35.40" width="21.14" height="84.60" /><rect rx="3" x="291.43" y="29.94" width="21.14" height="90.06" /><rect rx="3" x="320.57" y="27.21" width="21.14" height="92.79" /><rect rx="3" x="349.71" y="31.31" width="21.14" height="88.69" /><rect rx="3" x="378.86" y="25.85" width="21.14" height="94.15" /></g>
                    </svg>
                    <div className="ui-stat__axis" aria-hidden="true"><span>1 Nov</span><span>7 Nov</span><span>Today</span></div>
                  </div>
                </div>
              </div></div>
            </div>
          </article>
          <article className="card card--row span-6 m-nolift">
            <h3>Connects every desk to the visit</h3>
            <p>The lab, pharmacy, billing and the ward work on the same visit, so nothing is typed twice.</p>
            <div className="panel panel--flush" data-fx="silk-folds" data-fx-seed="58" data-fx-palette='{"bg":"#d9ccb7","surface":"#e9e0d2","ink":"#2a2622","accent":"#a8794a"}' data-fx-params='{"speed":0,"drift":0}'>
              <div className="dg" data-diagram='{"layout":"hub","alt":"One patient visit connected to the lab, the pharmacy, billing, the ward, the doctor and WhatsApp messages.","center":{"label":"Visit","icon":"ui:user"},"spokes":[{"label":"Lab","icon":"ui:flask-conical"},{"label":"Pharmacy","icon":"ui:pill"},{"label":"Billing","icon":"ui:receipt"},{"label":"Ward","icon":"ui:bed-double"},{"label":"Doctor","icon":"ui:stethoscope"},{"label":"WhatsApp","icon":"si:whatsapp"}]}'></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
