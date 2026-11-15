import type { CSSProperties } from "react";

/** First screen: what is sold, the price fact and the reception queue window. */
export function Hero() {
  return (
    <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="hero__text span-5">
          <p className="hero__kicker"><span className="dot" aria-hidden="true"></span>Plans from ₹3,000 a month, GST included</p>
          <h1 id="hero-h">OPD and ward software for Indian hospitals</h1>
          <p className="hero__lead">Reception registers a patient in four fields and hands out a token. The doctor sees the queue and writes the note, and the bill builds itself as the visit goes.</p>
          <div className="btn-row"><a className="btn btn--primary" href="#contact-form">Request a demo<svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path className="m-arrow__stem" d="M1 6h8" /><path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a><a className="btn btn--secondary" href="#pricing">See the plans</a></div>
        </div>
        <div className="hero__media frame span-6 start-7">
          <div className="stage stage--fade-b"><div className="at-corner to-edge" style={{"--ax": "40px", "--ay": "40px"} as CSSProperties} data-ui-loop="">
            <div className="ui ui-panel ui-win" data-ui="window" data-ui-opts='{"compact":true}' data-open="Waiting" data-work="With doctor" data-done="Seen" role="img" aria-label="The reception queue: patients with their token, doctor and status">
              <div className="ui-win__bar">
                <span className="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="ui-win__crumb">Reception <i>/</i> <b>Today's OPD</b></span>
                <span className="ui-spacer"></span>
                <span className="ui-win__search" aria-hidden="true"><svg className="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg><span className="ui-win__ph">Search</span><span className="ui-kbd">F3</span></span>
              </div>
              <div className="ui-win__body">
                <nav className="ui-win__side" aria-hidden="true">
                  <span className="ui-win__nav is-on">Waiting<em>17</em></span>
                  <span className="ui-win__nav">With doctor<em>2</em></span>
                  <span className="ui-win__nav">Billing<em>4</em></span>
                  <span className="ui-win__nav">Seen<em>38</em></span>
                  <span className="ui-win__label">Doctors</span>
                  <span className="ui-win__nav"><span className="ui-win__hash">#</span>Dr Rao</span>
                  <span className="ui-win__nav"><span className="ui-win__hash">#</span>Dr Mehta</span>
                </nav>
                <div className="ui-win__main">
                  <div className="ui-win__cols" aria-hidden="true"><span>Patient</span><span>Token and doctor</span><span>Status</span><span>Wait</span></div>
                  <ul className="ui-win__rows">
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="1">MI</span><span className="ui-win__who">Meera Iyer</span><span className="ui-win__sub">Token 12 · Dr Rao</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">14m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="3">RY</span><span className="ui-win__who">Rakesh Yadav</span><span className="ui-win__sub">Token 13 · Dr Rao</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">11m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="4">FS</span><span className="ui-win__who">Fatima Shaikh</span><span className="ui-win__sub">Token 7 · Dr Mehta</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">9m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="2">AN</span><span className="ui-win__who">Arjun Nair</span><span className="ui-win__sub">Token 14 · Dr Rao</span><span className="ui-win__st is-you" data-st="">With doctor</span><span className="ui-win__age">6m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="5">SD</span><span className="ui-win__who">Sunita Devi</span><span className="ui-win__sub">Token 8 · Dr Mehta</span><span className="ui-win__st is-done" data-st="">Seen</span><span className="ui-win__age">4m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="3">IQ</span><span className="ui-win__who">Imran Qureshi</span><span className="ui-win__sub">Token 11 · Dr Rao</span><span className="ui-win__st is-done" data-st="">Seen</span><span className="ui-win__age">2m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="1">KR</span><span className="ui-win__who">Kavya Reddy</span><span className="ui-win__sub">Token 9 · Dr Mehta</span><span className="ui-win__st is-done" data-st="">Seen</span><span className="ui-win__age">1m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="4">HK</span><span className="ui-win__who">Harpreet Kaur</span><span className="ui-win__sub">Token 15 · Dr Rao</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">1m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="2">ML</span><span className="ui-win__who">Mohan Lal</span><span className="ui-win__sub">Token 10 · Dr Mehta</span><span className="ui-win__st is-done" data-st="">Seen</span><span className="ui-win__age">1m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="5">PS</span><span className="ui-win__who">Pooja Sharma</span><span className="ui-win__sub">Token 16 · Dr Rao</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">now</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="1">VG</span><span className="ui-win__who">Vikas Gupta</span><span className="ui-win__sub">Token 11 · Dr Mehta</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">now</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="3">GD</span><span className="ui-win__who">Geeta Das</span><span className="ui-win__sub">Token 17 · Dr Rao</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">now</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div></div>
        </div>
      </div></div>
    </section>
  );
}
