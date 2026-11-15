import { FAQ } from "@/content/site";

/** Questions about plans and payment; every answer is always shown (the kit's open details rows). */
export function FaqSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5 stack-4">
            <h2 id="faq-h">Questions about plans and payment</h2>
            <p>Anything else, ask us on the call.</p>
          </div>
          <div className="faq span-6 start-7">
            {FAQ.map(({ q, a }) => (
              <details key={q} open>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
