import type { ReactNode } from "react";

import { ShortNav } from "@/components/ShortNav";

export type LegalSection = { heading: string; body: ReactNode };

/**
 * A legal page: the short nav, the review notice and the sections.
 * Every legal text is a draft until a lawyer reviews it before launch.
 */
export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <>
      <ShortNav action={{ label: "Request a demo", href: "/#contact-form" }} />
      <main id="top" className="legal">
        <div className="wrap">
          <div className="measure">
            <p className="legal__review">Draft: TO BE REVIEWED by a lawyer before launch</p>
            <h1>{title}</h1>
            <p className="muted">Last updated {updated}</p>
            {sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
