import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHomeFields {
    contentfulTitle?: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export type TypeHomeSkeleton = EntrySkeletonType<TypeHomeFields, "home">;
export type TypeHome<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHomeSkeleton, Modifiers, Locales>;
