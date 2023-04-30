import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeKontaktFields {
    titel?: EntryFieldTypes.Symbol;
    adresse?: EntryFieldTypes.Text;
    telefon?: EntryFieldTypes.Symbol;
    email?: EntryFieldTypes.Symbol;
    website?: EntryFieldTypes.Symbol;
}

export type TypeKontaktSkeleton = EntrySkeletonType<TypeKontaktFields, "kontakt">;
export type TypeKontakt<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeKontaktSkeleton, Modifiers, Locales>;
