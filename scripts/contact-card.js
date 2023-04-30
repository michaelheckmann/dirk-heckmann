import contentful from "contentful";
import { config } from "dotenv";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const contactCard = () => {
  return {
    name: "contact-card",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        config();
        const contentfulClient = contentful.createClient({
          space: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
          host: "cdn.contentful.com",
        });
        const metadata = await contentfulClient.getEntry(
          "59N3xrbKkbRtJqRk6IyYvj"
        );
        // Use fileURLToPath to get a valid, cross-platform absolute path string
        const outFile = fileURLToPath(new URL("./my-integration.json", dir));
        await writeFile(outFile, JSON.stringify(metadata));
      },
    },
  };
};

export default contactCard;
