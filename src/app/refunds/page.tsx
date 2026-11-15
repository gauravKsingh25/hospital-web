import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund and cancellation policy | Nirogya",
  description: "Cancelling a Nirogya plan, refunds and changing plan.",
  robots: { index: false },
};

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refund and cancellation policy"
      updated="14 November 2026"
      sections={[
        {
          heading: "Cancelling",
          body: "You can cancel at any time. Your plan stays active until the end of the 30-day period you have paid for, and is not renewed after that.",
        },
        {
          heading: "Refunds",
          body: "Payments are not refunded, in full or in part, for a period that has started. There is no refund for unused days.",
        },
        {
          heading: "Changing plan",
          body: "Moving from Standard to Professional costs the difference for the days left in the current period. Moving from Professional to Standard takes effect at the next renewal; nothing is refunded for the current period.",
        },
        {
          heading: "Payments we could not confirm",
          body: "If we cannot find a UPI payment you reported, we tell you why by email and you can send a corrected transaction reference for the same order.",
        },
      ]}
    />
  );
}
