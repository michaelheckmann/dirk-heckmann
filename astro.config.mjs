import { defineConfig } from "astro/config";
import contactCard from "./scripts/contact-card.js";

// https://astro.build/config
export default defineConfig({
  integrations: [contactCard()],
});
