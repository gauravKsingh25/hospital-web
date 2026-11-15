import type { NextConfig } from "next";

/**
 * The marketing site is a static export: `next build` writes plain HTML to `out/`,
 * which deploys to any static host. Nothing here needs a Node server.
 *
 * `trailingSlash` makes `/privacy` build as `out/privacy/index.html`, which every
 * static host serves without rewrite rules.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Never ship the source maps of a marketing page.
  productionBrowserSourceMaps: false,
};

export default nextConfig;
