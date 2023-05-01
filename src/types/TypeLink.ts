import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLinkFields {
    contentfulTitle: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
