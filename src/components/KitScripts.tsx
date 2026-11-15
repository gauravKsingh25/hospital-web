"use client";

import { useEffect } from "react";

/**
 * Loads the design kit's scripts (public/assets) once React has hydrated.
 *
 * The kit draws into the page: it mounts the diagrams, runs the UI loops and the
 * moments. Run before hydration, those DOM changes would not match what React
 * rendered on the server, and React would throw them away and re-render. An
 * effect runs only after the whole tree is hydrated, so the kit always works on
 * the final DOM. Every kit script checks `document.readyState`, so starting
 * late is safe.
 *
 * One inline module imports them, so they run in the order the kit lists them.
 */
const KIT_MODULES = [
  "/assets/system.js",
  "/assets/motion/motion.js",
  "/assets/layout/layout.js",
  "/assets/diagrams/mount.js",
] as const;

export function KitScripts() {
  useEffect(() => {
    if (document.querySelector("script[data-kit-loader]")) return;
    const loader = document.createElement("script");
    loader.type = "module";
    loader.dataset.kitLoader = "";
    loader.textContent = KIT_MODULES.map((src) => `import ${JSON.stringify(src)};`).join("\n");
    document.body.appendChild(loader);
  }, []);
  return null;
}
