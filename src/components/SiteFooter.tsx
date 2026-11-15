import { ArrowIcon } from "@/components/ArrowIcon";
import { SITE } from "@/content/site";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Doctor's screen", href: "/#product" },
      { label: "Features", href: "/#features" },
      { label: "Security", href: "/#security" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Plans", href: "/#pricing" },
      { label: "Cancellation", href: "/refunds/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Demo request", href: "/#contact-form" },
      { label: "Email", href: `mailto:${SITE.contactEmail}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy/" },
      { label: "Terms", href: "/terms/" },
      { label: "Refunds", href: "/refunds/" },
    ],
  },
];

/** The dealt close (close-word) and the dark footer with its sitemap. */
export function SiteFooter() {
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">See {SITE.name} on a call</h2>
              <p className="t-lead">No free plan. A call first, then you decide.</p>
            </div>
            <a className="btn btn--primary" href="/#contact-form">
              Request a demo
              <ArrowIcon />
            </a>
          </div>
          <p className="close__word" aria-hidden="true">
            {SITE.name}
          </p>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <p className="footer__lede">Hospital management software for OPD, wards, lab and billing.</p>
            </div>
            {COLUMNS.map((col) => (
              <div className="span-2 footer__col" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>© 2026 {SITE.name}</span>
            <div className="socials" />
          </div>
        </div>
      </div>
    </footer>
  );
}
