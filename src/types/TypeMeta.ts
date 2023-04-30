import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMetaFields {
    contentfulTitle?: EntryFieldTypes.Symbol;
    favicon: EntryFieldTypes.AssetLink;
    ogTitle: EntryFieldTypes.Symbol;
    ogDescription: EntryFieldTypes.Text;
    ogImage: EntryFieldTypes.AssetLink;
}

export type TypeMetaSkeleton = EntrySkeletonType<TypeMetaFields, "meta">;
export type TypeMeta<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMetaSkeleton, Modifiers, Locales>;
