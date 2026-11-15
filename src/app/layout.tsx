import fs from "node:fs";
import path from "node:path";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { KitScripts } from "@/components/KitScripts";
import { SITE } from "@/content/site";

/**
 * The design kit (taste-skill) lives in public/assets as plain files and is
 * linked in the order its references give: the system, cards, motion, grounds
 * and layout; then the page palette; then the UI fragments the page uses; then
 * the page's own CSS. The palette and page CSS are inlined from src/styles at
 * build time so that order is exact (a CSS import would be hoisted above the
 * kit's links and lose to it).
 */
const KIT_CSS_BEFORE_PALETTE = [
  "/assets/system.css",
  "/assets/ui/cards.css",
  "/assets/motion/motion.css",
  "/assets/backgrounds/backgrounds.css",
  "/assets/layout/layout.css",
  "/assets/icons/icon.css",
];
const KIT_CSS_AFTER_PALETTE = [
  "/assets/ui/base.css",
  "/assets/ui/window/fragment.css",
  "/assets/ui/doc/fragment.css",
  "/assets/ui/checklist/fragment.css",
  "/assets/ui/notify/fragment.css",
  "/assets/ui/stat/fragment.css",
  "/assets/ui/toggles/fragment.css",
  "/assets/ui/pipeline-board/fragment.css",
  "/assets/diagrams/diagram.css",
];
const MOMENT_PRELOADS = ["/assets/moments/moments.js", "/assets/moments/lib.js", "/assets/moments/liquid-type/moment.js"];

const readStyle = (file: string): string => fs.readFileSync(path.join(process.cwd(), "src", "styles", file), "utf8");

// Before first paint: the hero's entrance and the moments' script flag (motion.md).
const ENTER_SCRIPT =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)";
const MOMENTS_SCRIPT =
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: SITE.title,
  description: SITE.description,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: { type: "website", title: SITE.title, description: SITE.shareDescription, images: ["/share.jpg"] },
  twitter: { card: "summary_large_image" },
  // <link rel="canonical"> : add `alternates.canonical` once the domain is chosen
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f9fa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The kit adds classes to <html> before hydration (m-enter, mo-js, data-mode).
    <html
      lang="en"
      data-type="software"
      data-radius="soft"
      data-ground="sand"
      data-buttons="tonal"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400..700&family=Chivo+Mono:wght@400..500&display=swap"
          rel="stylesheet"
        />
        {KIT_CSS_BEFORE_PALETTE.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: readStyle("palette.css") }} />
        {KIT_CSS_AFTER_PALETTE.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script dangerouslySetInnerHTML={{ __html: ENTER_SCRIPT }} />
        {/* plain, not deferred: sets data-mode on <html> before the first paint (backgrounds.md) */}
        <script src="/assets/backgrounds/backgrounds.js" />
        <script dangerouslySetInnerHTML={{ __html: MOMENTS_SCRIPT }} />
        {MOMENT_PRELOADS.map((href) => (
          <link key={href} rel="modulepreload" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: readStyle("page.css") }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
