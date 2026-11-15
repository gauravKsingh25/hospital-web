import type { Metadata } from "next";

import { ShortNav } from "@/components/ShortNav";
import { SignupFlow } from "@/components/SignupFlow";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Start with Nirogya",
  description: "Create your Nirogya account: your details, a code by email, a password. Then pay by UPI.",
  other: { "site-kind": "software", "page-type": "software" },
};

const NEXT_STEPS = [
  "We email you a 6-digit code to check the address.",
  "You choose a password, and your account is ready.",
  "You pay by UPI in the app: scan the QR and send us the UTR number.",
  `We check the payment by hand and switch your plan on within ${SITE.paymentCheckHours} hours.`,
];

/** Signup: the three steps, then on to the app to pay. */
export default function SignupPage() {
  return (
    <>
      <ShortNav action={{ label: "See the plans", href: "/#pricing" }} />
      <main id="top" className="signup-page">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-5">
              <h1>Start with Nirogya</h1>
              <p className="t-lead">Monthly plans, GST included. Cancel any time.</p>
              <ol className="signup__next">
                {NEXT_STEPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p>
                Already have an account?{" "}
                <a className="link" href={`${SITE.appUrl}/login`}>
                  Sign in
                </a>
              </p>
            </div>
            <div className="card span-6 start-7">
              <SignupFlow />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
