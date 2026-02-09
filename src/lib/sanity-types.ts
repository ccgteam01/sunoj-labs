// Sanity document types

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

export interface SanitySiteSettings {
  _type: "siteSettings";
  groupName: string;
  groupFullName: string;
  tagline: string;
  quote: string;
  quoteAttribution: string;
}

export interface SanityHeroSlide {
  _type: "heroSlide";
  tagline: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  image?: SanityImage;
  order: number;
}

export interface SanityResearchArea {
  _type: "researchArea";
  title: string;
  description: string;
  focusAreas: string[];
  icon: string;
  order: number;
}

export interface SanityCollaborator {
  _type: "collaborator";
  name: string;
  institution: string;
  topic: string;
}

export interface SanityPerson {
  _type: "person";
  name: string;
  role: "pi" | "doctoral" | "postdoc" | "alumni";
  topic: string;
  currentPosition?: string;
  awards?: string[];
  image?: SanityImage;
  order: number;
}

export interface SanityPublication {
  _type: "publication";
  title: string;
  authors: string;
  journal: string;
  doi: string;
  year: number;
}

export interface SanityNewsItem {
  _type: "newsItem";
  text: string;
  year: number;
  order: number;
}

export interface SanityOpportunity {
  _type: "opportunity";
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface SanityGalleryItem {
  _type: "galleryItem";
  caption: string;
  image?: SanityImage;
  order: number;
}

export interface SanityContactInfo {
  _type: "contactInfo";
  email: string;
  address: string;
  googleScholarUrl: string;
  githubUrl: string;
  officialWebsiteUrl: string;
  mapEmbedUrl: string;
}

export interface SanityCourse {
  _type: "course";
  title: string;
  order: number;
}

export interface SanityEducation {
  _type: "education";
  degree: string;
  institution: string;
  advisor: string;
}

export interface SanityAboutPage {
  _type: "aboutPage";
  groupDescription: string;
  researchAreas: string[];
  publicationSummary: string;
  piName: string;
  piTitle: string;
  piBio: string;
  education: SanityEducation[];
  interests: { label: string; icon: string }[];
  awards: string[];
  coursesTaught: string[];
}
