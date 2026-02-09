// Sanity Studio Schema Definitions
// Copy these schemas to your Sanity Studio project's schemas folder

export const heroSlide = {
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "link", title: "Link URL", type: "string" },
    { name: "linkLabel", title: "Link Label", type: "string" },
    { name: "image", title: "Background Image", type: "image", options: { hotspot: true } },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const researchArea = {
  name: "researchArea",
  title: "Research Area",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "focusAreas", title: "Focus Areas", type: "array", of: [{ type: "string" }] },
    { name: "icon", title: "Icon Name", type: "string", description: "Lucide icon name: Atom, FlaskConical, Leaf, BrainCircuit" },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const collaborator = {
  name: "collaborator",
  title: "Collaborator",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "institution", title: "Institution", type: "string" },
    { name: "topic", title: "Topic", type: "string" },
  ],
};

export const person = {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string", options: { list: ["pi", "doctoral", "postdoc", "alumni"] } },
    { name: "topic", title: "Research Topic", type: "string" },
    { name: "currentPosition", title: "Current Position (Alumni)", type: "string" },
    { name: "awards", title: "Awards", type: "array", of: [{ type: "string" }] },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const publication = {
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "authors", title: "Authors", type: "string" },
    { name: "journal", title: "Journal", type: "string" },
    { name: "doi", title: "DOI", type: "string" },
    { name: "year", title: "Year", type: "number" },
  ],
};

export const newsItem = {
  name: "newsItem",
  title: "News Item",
  type: "document",
  fields: [
    { name: "text", title: "Text", type: "text" },
    { name: "year", title: "Year", type: "number" },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const opportunity = {
  name: "opportunity",
  title: "Opportunity",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "icon", title: "Icon Name", type: "string" },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const galleryItem = {
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    { name: "caption", title: "Caption", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const contactInfo = {
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  fields: [
    { name: "email", title: "Email", type: "string" },
    { name: "address", title: "Address", type: "text" },
    { name: "googleScholarUrl", title: "Google Scholar URL", type: "url" },
    { name: "githubUrl", title: "GitHub URL", type: "url" },
    { name: "officialWebsiteUrl", title: "Official Website URL", type: "url" },
    { name: "mapEmbedUrl", title: "Google Maps Embed URL", type: "url" },
  ],
};

export const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    { name: "groupDescription", title: "Group Description", type: "text" },
    { name: "researchAreas", title: "Research Areas List", type: "array", of: [{ type: "string" }] },
    { name: "publicationSummary", title: "Publication Summary", type: "text" },
    { name: "piName", title: "PI Name", type: "string" },
    { name: "piTitle", title: "PI Title", type: "string" },
    { name: "piBio", title: "PI Biography", type: "text" },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "degree", title: "Degree", type: "string" },
          { name: "institution", title: "Institution", type: "string" },
          { name: "advisor", title: "Advisor", type: "string" },
        ],
      }],
    },
    {
      name: "interests",
      title: "Research Interests",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Label", type: "string" },
          { name: "icon", title: "Icon Name", type: "string" },
        ],
      }],
    },
    { name: "awards", title: "Awards", type: "array", of: [{ type: "string" }] },
    { name: "coursesTaught", title: "Courses Taught", type: "array", of: [{ type: "string" }] },
  ],
};

export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "groupName", title: "Group Short Name", type: "string" },
    { name: "groupFullName", title: "Group Full Name", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "quote", title: "Homepage Quote", type: "text" },
    { name: "quoteAttribution", title: "Quote Attribution", type: "string" },
  ],
};
