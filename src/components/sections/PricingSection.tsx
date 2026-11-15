import { PLANS, SITE, UPI_APPS } from "@/content/site";

/** The two plans side by side, with the UPI apps a hospital pays from. */
export function PricingSection() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-4 stack-4">
            <h2 id="pricing-h">Plans and prices</h2>
            <p>Monthly, GST included. There is no free plan: everything in your plan works from the first day.</p>
            <p>Both plans: unlimited staff accounts, English and Hindi, every update.</p>
            <p>
              Pay with any UPI app. We check each payment by hand and switch your plan on within{" "}
              {SITE.paymentCheckHours} hours.
            </p>
            <div className="ic-chip-row" role="list" aria-label="UPI apps">
              {UPI_APPS.map((app) => (
                <span
                  key={app.name}
                  className={"square" in app ? "ic-tile ic-tile--48" : "ic-tile ic-tile--48 ic-tile--wide"}
                  role="listitem"
                >
                  <img
                    className={"square" in app ? "ic" : "ic ic-wide"}
                    src={app.src}
                    alt={app.name}
                    width={app.width}
                    height={app.height}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ))}
            </div>
            <p>
              <a className="link" href="#contact-form">Ask which plan fits</a>
            </p>
          </div>
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`card card--plan${plan.featured ? " is-featured" : ""} span-4 start-${5 + i * 4} m-nolift`}
            >
              <div className="plan__name">
                {plan.name}
                {plan.badge ? (
                  <>
                    {" "}
                    <span className="plan__badge">{plan.badge}</span>
                  </>
                ) : null}
              </div>
              <div className="plan__price">
                {plan.price}
                <small>per month</small>
              </div>
              <p className="plan__for">{plan.forWhom}</p>
              <a className="btn btn--secondary" href={`/signup/?plan=${plan.code}`}>
                {plan.action}
              </a>
              <ul className="plan__list">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
