import { defineConfig } from "astro/config";
import contactCard from "./scripts/contact-card";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [contactCard(), tailwind()]
});