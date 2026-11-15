import { SITE } from "@/content/site";

/** The top bar: logo, the product menu, sign-in and the demo request. */
export function SiteNav() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top"><span className="mark" data-mark="arc" aria-hidden="true"></span>Nirogya</a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <a className="nav__link" href="#product">Product <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Front desk</p>
                  <a href="#features">Registration<span>Four fields, then a token</span></a>
                  <a href="#features">Billing<span>Bills build during the visit</span></a>
                  <a href="#security">Roles<span>Each desk sees its screens</span></a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Clinical</p>
                  <a href="#product">Consultation<span>Queue, notes, prescriptions</span></a>
                  <a href="#features">Wards<span>Beds, rounds and discharge</span></a>
                  <a href="#features">Lab<span>Results back to the doctor</span></a>
                </div>
                <a className="menu-card span-3 start-10" href="#product">
                  <div className="panel">
                    <div className="stage stage--fade-br"><div className="at-corner">
                      <div className="ui ui-notify" data-ui="notify">
                        <ul className="ui-notify__list">
                          <li className="ui-note"><span className="ui-avatar ui-note__av" data-tone="2">मे</span><span className="ui-note__text"><span className="ui-note__title">टोकन 14 तैयार<time>अभी</time></span><span className="ui-note__body">डॉ विक्रम राव, कमरा 3</span></span></li>
                        </ul>
                      </div>
                    </div></div>
                  </div>
                  <span className="t-card">Every screen in Hindi</span>
                  <span className="t-small muted">Each person picks English or Hindi</span>
                </a>
              </div>
            </div>
          </div>
          <div className="nav__item"><a className="nav__link" href="#features">Features</a></div>
          <div className="nav__item"><a className="nav__link" href="#pricing">Pricing</a></div>
          <div className="nav__item"><a className="nav__link" href="#security">Security</a></div>
        </nav>
        <div className="nav__actions">
          {/* the hospital app's sign-in page: NEXT_PUBLIC_APP_URL at build time */}
          <a className="nav__link" href={`${SITE.appUrl}/login`}>Sign in</a>
          <a className="nav__link" href="/signup/">Get started</a>
          <a className="btn btn--primary" href="#contact-form">Request a demo</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  );
}
