import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkListSkeleton } from "./TypeLinkList";

export interface TypeHomeFields {
    contentfulTitle?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    downloadText: EntryFieldTypes.Text;
    downloadTextMobile: EntryFieldTypes.Text;
    linkLists: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkListSkeleton>>;
}

export type TypeHomeSkeleton = EntrySkeletonType<TypeHomeFields, "home">;
export type TypeHome<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHomeSkeleton, Modifiers, Locales>;
