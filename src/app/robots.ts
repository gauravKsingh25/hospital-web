import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";

// Built once into out/robots.txt (the site is a static export).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.siteUrl}/sitemap.xml`,
  };
}
