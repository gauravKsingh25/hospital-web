import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ContactSection } from "@/components/sections/ContactSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Hero } from "@/components/sections/Hero";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { SecuritySection } from "@/components/sections/SecuritySection";

/*
 * type: software (hospital management software, sold to private hospitals and clinics in India)
 * deal: hero split, nav nav-mega, close close-word, footer footer-dark, rhythm dark-band (#features),
 *       buttons tonal, mark arc, ground sand, palette cool-white-slate (an off-white ground and a teal
 *       accent: the clean, clinical look of a ward and its signage), type chivo (all three dealt
 *       pairings fail the hero-lines stress at 45 characters; the page's own 42-character h1 takes
 *       3 lines: waived)
 * effect: fluted-glass in the one [data-visual] frame (#security); card grounds silk-folds (#features)
 * moments: liquid-type on the statement (#doctors)
 */

// The checker reads the page kind from these metas (taste-skill consistency.mjs).
export const metadata: Metadata = {
  other: { "site-kind": "software", "page-type": "software" },
};

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />
        <ProductSection />
        <DoctorsSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <SecuritySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
