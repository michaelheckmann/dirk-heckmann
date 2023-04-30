import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBusinessCardFields {
    contentfulTitle?: EntryFieldTypes.Symbol;
    nameprefix: EntryFieldTypes.Symbol;
    firstName?: EntryFieldTypes.Symbol;
    lastName: EntryFieldTypes.Symbol;
    phone: EntryFieldTypes.Symbol;
    jobTitle: EntryFieldTypes.Symbol;
    website: EntryFieldTypes.Symbol;
    email: EntryFieldTypes.Symbol;
    street: EntryFieldTypes.Symbol;
    city: EntryFieldTypes.Symbol;
    postalCode: EntryFieldTypes.Symbol;
    country: EntryFieldTypes.Symbol;
    note?: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
}

export type TypeBusinessCardSkeleton = EntrySkeletonType<TypeBusinessCardFields, "businessCard">;
export type TypeBusinessCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBusinessCardSkeleton, Modifiers, Locales>;
