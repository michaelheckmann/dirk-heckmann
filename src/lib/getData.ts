import type { TypeHomeSkeleton, TypeMetaSkeleton } from "@types";

import { ENTRY } from "./constants";
import { contentfulClient } from "./contentful";

export const getMeta = async (locale = "de") => {
  return await contentfulClient.withoutUnresolvableLinks.getEntry<TypeMetaSkeleton>(
    ENTRY.META,
    {
      locale,
    }
  );
};

export const getHome = async (locale = "de") => {
  return await contentfulClient.withoutUnresolvableLinks.getEntry<TypeHomeSkeleton>(
    ENTRY.HOME,
    {
      locale,
      include: 2,
    }
  );
};
