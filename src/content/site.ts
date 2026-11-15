/**
 * Every fact the website states in more than one place, kept in one file so a
 * price or an address is never changed in one section and missed in another.
 *
 * Plan prices and features mirror the subscription plans the API seeds
 * (`backend/app/modules/subscriptions`); change both together.
 */

export const SITE = {
  name: "Nirogya",
  title: "Nirogya: hospital management software for Indian hospitals",
  description:
    "Registration, OPD queue, consultation, billing, wards and lab in one app for private hospitals and clinics. Plans from ₹3,000 a month, GST included.",
  shareDescription: "OPD, wards, lab and billing in one app. Plans from ₹3,000 a month, GST included.",
  /** The owner's inbox for now; replace with the domain's address once it exists. */
  contactEmail: "gauravsingh10.vns@gmail.com",
  /**
   * The hospital app's address, for "Sign in". Read at build time, since the
   * site is a static export.
   */
  appUrl: (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/+$/, ""),
  /**
   * The Nirogya API, which the contact form posts to straight from the
   * browser (its origin must be in the API's CORS_ORIGINS). Read at build time.
   */
  apiUrl: (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000").replace(/\/+$/, ""),
  /** The website's own address, for absolute share-image links. Read at build time. */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100").replace(/\/+$/, ""),
  /** Turnaround promised for a UPI payment checked by hand. */
  paymentCheckHours: 12,
} as const;

export const mailto = (subject: string): string =>
  `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}`;

import type { PlanCode } from "@/lib/signup";

export type Plan = {
  code: PlanCode;
  name: string;
  badge?: string;
  price: string;
  forWhom: string;
  action: string;
  featured: boolean;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    code: "standard",
    name: "Standard",
    price: "₹3,000",
    forWhom: "For an OPD clinic or a day-care centre.",
    action: "Start with Standard",
    featured: false,
    features: [
      "Registration, tokens and the queue",
      "Consultation notes and prescriptions",
      "OPD billing with UPI, card and cash",
      "Today's figures on reports",
      "Staff, doctors and services setup",
    ],
  },
  {
    code: "professional",
    name: "Professional",
    badge: "Wards and lab",
    price: "₹8,999",
    forWhom: "For a hospital with wards, a lab and a pharmacy.",
    action: "Start with Professional",
    featured: true,
    features: [
      "Everything in Standard",
      "Admissions, wards, rounds and discharge summaries",
      "Lab and radiology results",
      "Medicine list and inpatient issue",
      "Accounts dashboard and IPD bills",
      "WhatsApp and SMS messages to patients",
      "Reports for any period",
    ],
  },
];

/** The UPI apps shown under pricing; each icon is a local file in public/assets/icons. */
export const UPI_APPS = [
  { name: "Google Pay", src: "/assets/icons/google-pay.svg", width: 82, height: 33 },
  { name: "PhonePe", src: "/assets/icons/phonepe.svg", width: 29, height: 29, square: true },
  { name: "Paytm", src: "/assets/icons/paytm.svg", width: 82, height: 26 },
] as const;

export const FAQ: { q: string; a: string }[] = [
  { q: "Is there a free trial?", a: "No. We show you the whole system on a call first, and you decide after that." },
  {
    q: "How do we pay?",
    a: `By UPI, from the payment page. We check each payment by hand and switch your plan on within ${SITE.paymentCheckHours} hours.`,
  },
  {
    q: "Can we cancel?",
    a: "Yes, at any time. Your plan runs to the end of the month you paid for and is not renewed. There are no refunds for part of a month.",
  },
  {
    q: "What happens to our records if we stop?",
    a: "Nothing is deleted. Your patients and bills stay as they are and are there again when you renew.",
  },
  {
    q: "Can we move from Standard to Professional?",
    a: "Yes. You pay the difference for the days left in the month, and the extra screens open once the payment is confirmed.",
  },
  { q: "Which languages are the screens in?", a: "English and Hindi. Each person picks their own." },
];
