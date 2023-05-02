import contentful from "contentful";
import { config } from "dotenv";
import { fileURLToPath } from "node:url";
import vCardsJS from "vcards-js";

const contactCard = () => {
  return {
    name: "contact-card",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        config();
        // Cannot import the functions from the existing files
        // as they're not available during build.
        const contentfulClient = contentful.createClient({
          space: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
          host: "cdn.contentful.com",
        });
        const cardResult = await contentfulClient.getEntry(
          "74VQ5RpeViUxJ8YfJRb9S5"
        );
        const card = cardResult.fields;

        let vCard = vCardsJS();

        vCard.namePrefix = card.nameprefix;
        vCard.firstName = card.firstName;
        vCard.lastName = card.lastName;
        vCard.title = card.jobTitle;
        vCard.photo.attachFromUrl(card.image.fields.file.url);

        vCard.workPhone = card.phone;
        vCard.email = card.email;

        vCard.workAddress.street = card.street;
        vCard.workAddress.city = card.city;
        vCard.workAddress.postalCode = card.postalCode;
        vCard.workAddress.countryRegion = card.country;

        vCard.url = card.website;
        vCard.note = card.note;

        const outFile = fileURLToPath(new URL("./dirk-heckmann-de.vcf", dir));
        vCard.saveToFile(outFile);
      },
    },
  };
};

export default contactCard;
