/** The doctor's screen: the queue beside an open note with an allergy stop. */
export function ProductSection() {
  return (
    <section className="section" id="product" aria-labelledby="product-h">
      <div className="wrap">
        <div className="grid">
          <h2 id="product-h" className="span-5">Your hospital's consultation screen</h2>
          <div className="span-6 start-7 stack-4">
            <p>Patients arrive in the doctor's list with vitals already taken. The doctor opens one, writes the note and prescribes, and a drug the patient is allergic to is stopped before it is saved.</p>
            <p><a className="link" href="#features">See what reception does</a></p>
          </div>
        </div>
        <div className="ui app fill" role="img" aria-label="The doctor's screen: the list of waiting patients beside an open consultation note, with an allergy warning on a prescribed drug" data-ui-pause-host="">
          <div className="app__pane app__pane--list">
            <div className="ui ui-panel ui-win" data-ui="window" data-open="Waiting" data-work="With you" data-done="Seen">
              <div className="ui-win__bar">
                <span className="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="ui-win__crumb">OPD <i>/</i> <b>Dr Vikram Rao</b></span>
                <span className="ui-spacer"></span>
                <span className="ui-win__search" aria-hidden="true"><svg className="ui-icon" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg><span className="ui-win__ph">Search</span><span className="ui-kbd">F3</span></span>
              </div>
              <div className="ui-win__body">
                <nav className="ui-win__side" aria-hidden="true">
                  <span className="ui-win__nav is-on">Waiting<em>9</em></span>
                  <span className="ui-win__nav">With me<em>1</em></span>
                  <span className="ui-win__nav">Results<em>3</em></span>
                  <span className="ui-win__nav">Seen<em>14</em></span>
                  <span className="ui-win__label">Views</span>
                  <span className="ui-win__nav"><span className="ui-win__hash">#</span>Follow-ups</span>
                  <span className="ui-win__nav"><span className="ui-win__hash">#</span>Emergency</span>
                </nav>
                <div className="ui-win__main">
                  <div className="ui-win__cols" aria-hidden="true"><span>Patient</span><span>Complaint</span><span>Status</span><span>Wait</span></div>
                  <ul className="ui-win__rows">
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="1">MI</span><span className="ui-win__who">Meera Iyer, 34 F</span><span className="ui-win__sub">Fever for 3 days</span><span className="ui-win__st is-you" data-st="">With you</span><span className="ui-win__age">14m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="3">RY</span><span className="ui-win__who">Rakesh Yadav, 58 M</span><span className="ui-win__sub">BP review</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">11m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="4">HK</span><span className="ui-win__who">Harpreet Kaur, 41 F</span><span className="ui-win__sub">Headache, 1 week</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">10m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="2">AN</span><span className="ui-win__who">Arjun Nair, 52 M</span><span className="ui-win__sub">Diabetes follow-up</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">8m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="5">ML</span><span className="ui-win__who">Mohan Lal, 66 M</span><span className="ui-win__sub">Cough and breathlessness</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">7m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="1">PS</span><span className="ui-win__who">Pooja Sharma, 27 F</span><span className="ui-win__sub">Skin rash</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">6m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="3">VG</span><span className="ui-win__who">Vikas Gupta, 45 M</span><span className="ui-win__sub">Knee pain</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">5m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="4">SB</span><span className="ui-win__who">Shabana Begum, 62 F</span><span className="ui-win__sub">Lab results review</span><span className="ui-win__st is-done" data-st="">Results in</span><span className="ui-win__age">4m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="2">RT</span><span className="ui-win__who">Rohan Thomas, 9 M</span><span className="ui-win__sub">Ear pain</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">3m</span></li>
                    <li className="ui-win__row" data-row=""><span className="ui-avatar" data-tone="5">GD</span><span className="ui-win__who">Geeta Das, 70 F</span><span className="ui-win__sub">Dressing change</span><span className="ui-win__st" data-st="">Waiting</span><span className="ui-win__age">1m</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="app__pane app__pane--open" data-ui-loop="">
            <div className="ui ui-doc" data-ui="doc">
              <article className="ui-doc__page">
                <div className="ui-doc__label">Consultation · Meera Iyer, 34 F · UHID KMC-26-000412</div>
                <div className="ui-doc__title">Fever for 3 days</div>
                <div className="ui-doc__text">Fever with chills for 3 days, sore throat since yesterday, pain on swallowing. No cough, no breathlessness. No travel.</div>
                <div className="ui-doc__text">Vitals by Sister Lakshmi at 10:12: temperature 38.6 °C, pulse 96, BP 118/76, SpO2 98%, weight 58 kg.</div>
                <div className="ui-doc__text">Throat congested, tonsils enlarged. Chest clear. No rash.</div>
                <div className="ui-doc__text">Diagnosis: acute tonsillitis.</div>
                <div className="ui-doc__text">Rx: paracetamol 650 mg three times a day for 3 days; <mark className="ui-doc__mark is-on">amoxicillin 500 mg</mark> twice a day for 5 days.</div>
                <div className="ui-doc__text">Orders: <mark className="ui-doc__mark" data-kind="Billing" data-msg="Complete blood count adds ₹350 to today's bill." data-where="Rate card, cash patients">complete blood count</mark>. Review in 3 days with the report.</div>
                <div className="ui-doc__text">Advice: warm fluids, rest, return at once if breathing gets difficult.</div>
                <div className="ui-doc__text">Follow-up: Monday, 10:00, Dr Vikram Rao.</div>
                <div className="ui-doc__text">Past history: no diabetes, no hypertension. Appendix removed in 2014.</div>
                <div className="ui-doc__text">Current medicines: none. Allergies: penicillin (rash, 2019).</div>
                <div className="ui-doc__text">Signed by Dr Vikram Rao, General Medicine, at 10:31.</div>
              </article>
              <aside className="ui-doc__note ui-panel is-on" aria-live="polite">
                <div className="ui-doc__kind"><span className="ui-doc__dot"></span><span data-doc-kind="">Allergy</span></div>
                <div className="ui-doc__msg" data-doc-msg="">Meera Iyer is allergic to penicillin. Amoxicillin is a penicillin.</div>
                <div className="ui-doc__where" data-doc-where="">Recorded at registration, 12 March 2026</div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
