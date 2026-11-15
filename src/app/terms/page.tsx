import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of service | Nirogya",
  description: "The terms of a Nirogya subscription: plans, payment, renewal and the grace period.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="14 November 2026"
      sections={[
        {
          heading: "The service",
          body: "Nirogya provides hospital management software on a monthly subscription. A hospital chooses the Standard or Professional plan; what each plan includes is listed on the home page.",
        },
        {
          heading: "Prices and payment",
          body: "Standard costs ₹3,000 and Professional ₹8,999 for each 30-day period, GST included. Payment is made by UPI and is confirmed by hand within 12 hours. The plan starts when the payment is confirmed.",
        },
        {
          heading: "Renewal and grace period",
          body: "Each period is renewed by a new payment. If a period ends unpaid, the hospital keeps full access for 7 days. After that only the subscription page can be opened until the plan is renewed.",
        },
        {
          heading: "Your records",
          body: "The hospital owns the records it enters. Nirogya does not delete them when a subscription ends or changes plan.",
        },
        {
          heading: "Accounts",
          body: "The hospital is responsible for the staff accounts it creates and the roles it gives them.",
        },
        {
          heading: "Cancellation",
          body: (
            <>
              See the{" "}
              <a className="link" href="/refunds/">
                refund and cancellation policy
              </a>
              .
            </>
          ),
        },
      ]}
    />
  );
}
