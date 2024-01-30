// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | EventsBlockSlice
  | TestimonialBlockSlice
  | TextBlockSlice
  | MenuSlice
  | GallerySlice
  | ResourceBlockSlice
  | SoundcloudBlockSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type PageDocumentDataSlicesSlice =
  | TextBlockSlice
  | GallerySlice
  | MenuSlice
  | EmbedBlockSlice;

/**
 * Content for Subpage documents
 */
interface PageDocumentData {
  /**
   * Title field in *Subpage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Section field in *Subpage*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.section
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  section: prismic.ContentRelationshipField<"section">;

  /**
   * Slice Zone field in *Subpage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Subpage document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type SectionDocumentDataSlicesSlice =
  | NoteformBlockSlice
  | TextBlockSlice
  | GallerySlice
  | MenuSlice
  | ResourceBlockSlice
  | WufooFormSlice
  | EmbedBlockSlice
  | TestimonialBlockSlice;

/**
 * Content for Section documents
 */
interface SectionDocumentData {
  /**
   * Title field in *Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Section*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: section.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SectionDocumentDataSlicesSlice>;
}

/**
 * Section document from Prismic
 *
 * - **API ID**: `section`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SectionDocumentData>,
    "section",
    Lang
  >;

/**
 * Item in *Site → Menu*
 */
export interface SiteDocumentDataMenuItem {
  /**
   * Link field in *Site → Menu*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: site.menu[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;

  /**
   * Title field in *Site → Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site.menu[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Content for Site documents
 */
interface SiteDocumentData {
  /**
   * Menu field in *Site*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: site.menu[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu: prismic.GroupField<Simplify<SiteDocumentDataMenuItem>>;
}

/**
 * Site document from Prismic
 *
 * - **API ID**: `site`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<SiteDocumentData>, "site", Lang>;

export type AllDocumentTypes =
  | HomeDocument
  | PageDocument
  | SectionDocument
  | SiteDocument;

/**
 * Primary content in *EmbedBlock → Primary*
 */
export interface EmbedBlockSliceDefaultPrimary {
  /**
   * Title field in *EmbedBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: embed_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Collapsible field in *EmbedBlock → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: embed_block.primary.collapsible
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  collapsible: prismic.BooleanField;

  /**
   * Description field in *EmbedBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: embed_block.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Protected field in *EmbedBlock → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: embed_block.primary.protected
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  protected: prismic.BooleanField;
}

/**
 * Primary content in *EmbedBlock → Items*
 */
export interface EmbedBlockSliceDefaultItem {
  /**
   * Embed Link field in *EmbedBlock → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: embed_block.items[].embed_link
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  embed_link: prismic.EmbedField;
}

/**
 * Default variation for EmbedBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: EmbedBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EmbedBlockSliceDefaultPrimary>,
  Simplify<EmbedBlockSliceDefaultItem>
>;

/**
 * Slice variation for *EmbedBlock*
 */
type EmbedBlockSliceVariation = EmbedBlockSliceDefault;

/**
 * EmbedBlock Shared Slice
 *
 * - **API ID**: `embed_block`
 * - **Description**: EmbedBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedBlockSlice = prismic.SharedSlice<
  "embed_block",
  EmbedBlockSliceVariation
>;

/**
 * Primary content in *EventsBlock → Primary*
 */
export interface EventsBlockSliceDefaultPrimary {
  /**
   * Title field in *EventsBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *EventsBlock → Items*
 */
export interface EventsBlockSliceDefaultItem {
  /**
   * Date field in *EventsBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.items[].date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  date: prismic.KeyTextField;

  /**
   * Title field in *EventsBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Location field in *EventsBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.items[].location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * Description field in *EventsBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Information field in *EventsBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.items[].information
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  information: prismic.RichTextField;

  /**
   * Tickets Link field in *EventsBlock → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: events_block.items[].tickets_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tickets_link: prismic.LinkField;
}

/**
 * Default variation for EventsBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EventsBlockSliceDefaultPrimary>,
  Simplify<EventsBlockSliceDefaultItem>
>;

/**
 * Slice variation for *EventsBlock*
 */
type EventsBlockSliceVariation = EventsBlockSliceDefault;

/**
 * EventsBlock Shared Slice
 *
 * - **API ID**: `events_block`
 * - **Description**: EventsBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsBlockSlice = prismic.SharedSlice<
  "events_block",
  EventsBlockSliceVariation
>;

/**
 * Primary content in *GalleryBlock → Primary*
 */
export interface GallerySliceDefaultPrimary {
  /**
   * Title field in *GalleryBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Collapsible field in *GalleryBlock → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: gallery.primary.collapsible
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  collapsible: prismic.BooleanField;
}

/**
 * Primary content in *GalleryBlock → Items*
 */
export interface GallerySliceDefaultItem {
  /**
   * Image field in *GalleryBlock → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *GalleryBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *GalleryBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link field in *GalleryBlock → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].internal_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  internal_link: prismic.ContentRelationshipField;
}

/**
 * Default variation for GalleryBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GallerySliceDefaultPrimary>,
  Simplify<GallerySliceDefaultItem>
>;

/**
 * Slice variation for *GalleryBlock*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * GalleryBlock Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Primary content in *MenuBlock → Items*
 */
export interface MenuSliceDefaultItem {
  /**
   * Link field in *MenuBlock → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField<"page" | "section" | "home">;

  /**
   * Title field in *MenuBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for MenuBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Menu
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MenuSliceDefaultItem>
>;

/**
 * Slice variation for *MenuBlock*
 */
type MenuSliceVariation = MenuSliceDefault;

/**
 * MenuBlock Shared Slice
 *
 * - **API ID**: `menu`
 * - **Description**: Menu
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuSlice = prismic.SharedSlice<"menu", MenuSliceVariation>;

/**
 * Primary content in *NoteformBlock → Primary*
 */
export interface NoteformBlockSliceDefaultPrimary {
  /**
   * NoteForm Link field in *NoteformBlock → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: noteform_block.primary.noteform_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  noteform_link: prismic.LinkField;
}

/**
 * Default variation for NoteformBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NoteformBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NoteformBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NoteformBlock*
 */
type NoteformBlockSliceVariation = NoteformBlockSliceDefault;

/**
 * NoteformBlock Shared Slice
 *
 * - **API ID**: `noteform_block`
 * - **Description**: NoteformBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NoteformBlockSlice = prismic.SharedSlice<
  "noteform_block",
  NoteformBlockSliceVariation
>;

/**
 * Primary content in *ResourceBlock → Primary*
 */
export interface ResourceBlockSliceDefaultPrimary {
  /**
   * Title field in *ResourceBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resource_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Collapsible field in *ResourceBlock → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: resource_block.primary.collapsible
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  collapsible: prismic.BooleanField;

  /**
   * Description field in *ResourceBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resource_block.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *ResourceBlock → Items*
 */
export interface ResourceBlockSliceDefaultItem {
  /**
   * Description field in *ResourceBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resource_block.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Title field in *ResourceBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: resource_block.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *ResourceBlock → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: resource_block.items[].date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Type field in *ResourceBlock → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: PDF
   * - **API ID Path**: resource_block.items[].type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"PDF" | "Link", "filled">;

  /**
   * resource field in *ResourceBlock → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: resource_block.items[].resource
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  resource: prismic.LinkField;
}

/**
 * Default variation for ResourceBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: ResourceBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ResourceBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ResourceBlockSliceDefaultPrimary>,
  Simplify<ResourceBlockSliceDefaultItem>
>;

/**
 * Slice variation for *ResourceBlock*
 */
type ResourceBlockSliceVariation = ResourceBlockSliceDefault;

/**
 * ResourceBlock Shared Slice
 *
 * - **API ID**: `resource_block`
 * - **Description**: ResourceBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ResourceBlockSlice = prismic.SharedSlice<
  "resource_block",
  ResourceBlockSliceVariation
>;

/**
 * Primary content in *SoundcloudBlock → Primary*
 */
export interface SoundcloudBlockSliceDefaultPrimary {
  /**
   * Title field in *SoundcloudBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: soundcloud_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *SoundcloudBlock → Items*
 */
export interface SoundcloudBlockSliceDefaultItem {
  /**
   * Embed Link field in *SoundcloudBlock → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: soundcloud_block.items[].link
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  link: prismic.EmbedField;
}

/**
 * Default variation for SoundcloudBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: SoundcloudBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SoundcloudBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SoundcloudBlockSliceDefaultPrimary>,
  Simplify<SoundcloudBlockSliceDefaultItem>
>;

/**
 * Slice variation for *SoundcloudBlock*
 */
type SoundcloudBlockSliceVariation = SoundcloudBlockSliceDefault;

/**
 * SoundcloudBlock Shared Slice
 *
 * - **API ID**: `soundcloud_block`
 * - **Description**: SoundcloudBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SoundcloudBlockSlice = prismic.SharedSlice<
  "soundcloud_block",
  SoundcloudBlockSliceVariation
>;

/**
 * Primary content in *TestimonialBlock → Items*
 */
export interface TestimonialBlockSliceDefaultItem {
  /**
   * Testimonial Text field in *TestimonialBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial_block.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Testimonial Author field in *TestimonialBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial_block.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;
}

/**
 * Default variation for TestimonialBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: TestimonialBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TestimonialBlockSliceDefaultItem>
>;

/**
 * Slice variation for *TestimonialBlock*
 */
type TestimonialBlockSliceVariation = TestimonialBlockSliceDefault;

/**
 * TestimonialBlock Shared Slice
 *
 * - **API ID**: `testimonial_block`
 * - **Description**: TestimonialBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialBlockSlice = prismic.SharedSlice<
  "testimonial_block",
  TestimonialBlockSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Title field in *TextBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Collapsible field in *TextBlock → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: text_block.primary.collapsible
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  collapsible: prismic.BooleanField;
}

/**
 * Primary content in *TextBlock → Items*
 */
export interface TextBlockSliceDefaultItem {
  /**
   * Text field in *TextBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  Simplify<TextBlockSliceDefaultItem>
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

/**
 * Primary content in *WufooForm → Primary*
 */
export interface WufooFormSliceDefaultPrimary {
  /**
   * Embed Code field in *WufooForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: wufoo_form.primary.embed_code
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  embed_code: prismic.RichTextField;
}

/**
 * Default variation for WufooForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: WufooForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WufooFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WufooFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WufooForm*
 */
type WufooFormSliceVariation = WufooFormSliceDefault;

/**
 * WufooForm Shared Slice
 *
 * - **API ID**: `wufoo_form`
 * - **Description**: WufooForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WufooFormSlice = prismic.SharedSlice<
  "wufoo_form",
  WufooFormSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig,
    ): prismicClient.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SectionDocument,
      SectionDocumentData,
      SectionDocumentDataSlicesSlice,
      SiteDocument,
      SiteDocumentData,
      SiteDocumentDataMenuItem,
      AllDocumentTypes,
      EmbedBlockSlice,
      EmbedBlockSliceDefaultPrimary,
      EmbedBlockSliceDefaultItem,
      EmbedBlockSliceVariation,
      EmbedBlockSliceDefault,
      EventsBlockSlice,
      EventsBlockSliceDefaultPrimary,
      EventsBlockSliceDefaultItem,
      EventsBlockSliceVariation,
      EventsBlockSliceDefault,
      GallerySlice,
      GallerySliceDefaultPrimary,
      GallerySliceDefaultItem,
      GallerySliceVariation,
      GallerySliceDefault,
      MenuSlice,
      MenuSliceDefaultItem,
      MenuSliceVariation,
      MenuSliceDefault,
      NoteformBlockSlice,
      NoteformBlockSliceDefaultPrimary,
      NoteformBlockSliceVariation,
      NoteformBlockSliceDefault,
      ResourceBlockSlice,
      ResourceBlockSliceDefaultPrimary,
      ResourceBlockSliceDefaultItem,
      ResourceBlockSliceVariation,
      ResourceBlockSliceDefault,
      SoundcloudBlockSlice,
      SoundcloudBlockSliceDefaultPrimary,
      SoundcloudBlockSliceDefaultItem,
      SoundcloudBlockSliceVariation,
      SoundcloudBlockSliceDefault,
      TestimonialBlockSlice,
      TestimonialBlockSliceDefaultItem,
      TestimonialBlockSliceVariation,
      TestimonialBlockSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceDefaultItem,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
      WufooFormSlice,
      WufooFormSliceDefaultPrimary,
      WufooFormSliceVariation,
      WufooFormSliceDefault,
    };
  }
}
