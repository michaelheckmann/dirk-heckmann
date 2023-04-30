import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeVisitenkarteFields {
    titel?: EntryFieldTypes.Symbol;
    visitenkartenInformation?: EntryFieldTypes.RichText;
    bild?: EntryFieldTypes.AssetLink;
    emailLink?: EntryFieldTypes.Symbol;
    twitterLink?: EntryFieldTypes.Symbol;
    linkedInLink?: EntryFieldTypes.Symbol;
    tumLink?: EntryFieldTypes.Symbol;
}

export type TypeVisitenkarteSkeleton = EntrySkeletonType<TypeVisitenkarteFields, "visitenkarte">;
export type TypeVisitenkarte<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeVisitenkarteSkeleton, Modifiers, Locales>;
