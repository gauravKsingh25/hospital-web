import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";

// Built once into out/sitemap.xml (the site is a static export).
export const dynamic = "force-static";

const PAGES = ["/", "/signup/", "/privacy/", "/terms/", "/refunds/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: `${SITE.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.5,
  }));
}
