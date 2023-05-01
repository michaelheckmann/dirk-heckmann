import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeLinkListFields {
  contentfulTitle: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeLinkListSkeleton = EntrySkeletonType<
  TypeLinkListFields,
  "linkList"
>;
export type TypeLinkList<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeLinkListSkeleton, Modifiers, Locales>;
