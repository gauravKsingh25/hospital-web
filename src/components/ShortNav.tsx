import { SITE } from "@/content/site";

/** The bar on pages other than home: the logo back home, sign-in and one action. */
export function ShortNav({ action }: { action: { label: string; href: string } }) {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <a className="nav__logo" href="/">
          <span className="mark" data-mark="arc" aria-hidden="true" />
          {SITE.name}
        </a>
        <div className="nav__actions">
          <a className="nav__link" href={`${SITE.appUrl}/login`}>
            Sign in
          </a>
          <a className="btn btn--primary" href={action.href}>
            {action.label}
          </a>
        </div>
      </div>
    </header>
  );
}
