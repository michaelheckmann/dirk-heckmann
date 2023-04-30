import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAllgemeinesFields {
    titel?: EntryFieldTypes.Symbol;
    favicon?: EntryFieldTypes.AssetLink;
    socialMediaTitel?: EntryFieldTypes.Symbol;
    socialMediaBeschreibung?: EntryFieldTypes.Text;
    socialMediaBild?: EntryFieldTypes.AssetLink;
}

export type TypeAllgemeinesSkeleton = EntrySkeletonType<TypeAllgemeinesFields, "allgemeines">;
export type TypeAllgemeines<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAllgemeinesSkeleton, Modifiers, Locales>;
