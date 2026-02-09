// GROQ queries for Sanity

export const HERO_SLIDES_QUERY = `*[_type == "heroSlide"] | order(order asc) {
  tagline, title, description, link, linkLabel,
  "imageUrl": image.asset->url
}`;

export const RESEARCH_AREAS_QUERY = `*[_type == "researchArea"] | order(order asc) {
  title, description, focusAreas, icon
}`;

export const COLLABORATORS_QUERY = `*[_type == "collaborator"] {
  name, institution, topic
}`;

export const PEOPLE_QUERY = `*[_type == "person"] | order(order asc) {
  name, role, topic, currentPosition, awards,
  "imageUrl": image.asset->url
}`;

export const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(year desc) {
  title, authors, journal, doi, year
}`;

export const NEWS_QUERY = `*[_type == "newsItem"] | order(year desc, order asc) {
  text, year
}`;

export const OPPORTUNITIES_QUERY = `*[_type == "opportunity"] | order(order asc) {
  title, description, icon
}`;

export const GALLERY_QUERY = `*[_type == "galleryItem"] | order(order asc) {
  caption, "imageUrl": image.asset->url
}`;

export const CONTACT_QUERY = `*[_type == "contactInfo"][0] {
  email, address, googleScholarUrl, githubUrl, officialWebsiteUrl, mapEmbedUrl
}`;

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0] {
  groupDescription, researchAreas, publicationSummary,
  piName, piTitle, piBio, education, interests, awards, coursesTaught
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  groupName, groupFullName, tagline, quote, quoteAttribution
}`;

export const COURSES_QUERY = `*[_type == "course"] | order(order asc) {
  title
}`;
