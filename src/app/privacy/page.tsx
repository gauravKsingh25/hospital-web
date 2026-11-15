import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy | Nirogya",
  description: "How Nirogya handles the data of hospitals that use it and of people who contact us.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="14 November 2026"
      sections={[
        {
          heading: "Who we are",
          body: "Nirogya is hospital management software. This policy covers this website and the Nirogya app used by hospitals that subscribe to it.",
        },
        {
          heading: "What we collect on this website",
          body: "When you request a demo we receive the name, email, mobile number, hospital name and message you type into the form. We use them only to reply to you and arrange a demo.",
        },
        {
          heading: "Data a hospital keeps in Nirogya",
          body: "Patient records, bills and notes entered by a hospital belong to that hospital. Each hospital's records are separated from every other hospital's in the database. We do not sell this data or use it for advertising.",
        },
        {
          heading: "Payments",
          body: "Subscriptions are paid by UPI. We keep the transaction reference you send us and, if you upload one, the payment screenshot, to confirm the payment and for our accounts.",
        },
        {
          heading: "How long we keep it",
          body: "A hospital's records are not deleted when its subscription ends. A hospital that wants its records removed can ask us in writing.",
        },
        {
          heading: "Your rights",
          body: "Under the Digital Personal Data Protection Act, 2023 you may ask to see, correct or erase the personal data we hold about you. Write to us from the contact form on the home page.",
        },
      ]}
    />
  );
}
