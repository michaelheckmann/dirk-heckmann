import type { TypeMetaSkeleton } from "@types";

import type { Asset } from "contentful";
import { ENTRY } from "./constants";
import { contentfulClient } from "./contentful";

type GetMeta = TypeMetaSkeleton & {
  fields: {
    ogImage: Asset;
  };
};

export const getMeta = async (locale = "de") => {
  const entry = await contentfulClient.getEntry<TypeMetaSkeleton>(ENTRY.META, {
    locale,
  });
  return entry as unknown as GetMeta;
};
