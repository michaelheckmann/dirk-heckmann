import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDigitaleVisitenkarteFields {
    titel?: EntryFieldTypes.Symbol;
    namenspraefix?: EntryFieldTypes.Symbol;
    vorname?: EntryFieldTypes.Symbol;
    nachname?: EntryFieldTypes.Symbol;
    telefonnummer?: EntryFieldTypes.Symbol;
    jobTitel?: EntryFieldTypes.Symbol;
    hyperlink?: EntryFieldTypes.Symbol;
    email?: EntryFieldTypes.Symbol;
    arbeitsadresseStrasse?: EntryFieldTypes.Symbol;
    arbeitsadresseStadt?: EntryFieldTypes.Symbol;
    arbeitsadressePostleitzahl?: EntryFieldTypes.Integer;
    arbeitsadresseLand?: EntryFieldTypes.Symbol;
    notiz?: EntryFieldTypes.Text;
    profilbild?: EntryFieldTypes.AssetLink;
}

export type TypeDigitaleVisitenkarteSkeleton = EntrySkeletonType<TypeDigitaleVisitenkarteFields, "digitaleVisitenkarte">;
export type TypeDigitaleVisitenkarte<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeDigitaleVisitenkarteSkeleton, Modifiers, Locales>;
