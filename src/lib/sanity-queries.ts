// GROQ queries for Sanity

export const HERO_SLIDES_QUERY = `*[_type == "heroSlide"] | order(order asc) {
  tagline, title, description, link, linkLabel,
  "imageUrl": image.asset->url
}`;

export const RESEARCH_AREAS_QUERY = `*[_type == "researchArea"] | order(order asc) {
  title, description, focusAreas, icon
}`;

export const NEWS_QUERY = `*[_type == "newsItem"] | order(year desc, order asc) {
  text, year
}`;

export const RECENT_PUBLICATIONS_QUERY = `*[_type == "publication" && featured == true] | order(year desc) [0...3] {
  title, journal, doi, year, authors,
  "imageUrl": image.asset->url
}`;

export const HOMEPAGE_QUERY = `*[_type == "homepage"][0] {
  quote, quoteAuthor, ctaTitle, ctaDescription, ctaButtonText, ctaButtonLink,
  "ctaBackgroundImageUrl": ctaBackgroundImage.asset->url
}`;

export const COLLABORATORS_QUERY = `*[_type == "collaborator"] {
  name, institution, topic
}`;

export const PEOPLE_QUERY = `*[_type == "person"] | order(order asc) {
  name, role, topic, currentPosition, awards,
  "imageUrl": image.asset->url
}`;

export const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(year desc) {
  title, authors, journal, doi, year, themes, pdfUrl,
  "imageUrl": image.asset->url
}`;

export const ALBUMS_QUERY = `*[_type == "album"] | order(order asc) {
  _id, title, description,
  "photos": photos[].asset->url
}`;

export const COURSES_QUERY = `*[_type == "course"] | order(order asc) {
  _id, code, name, order
}`;

export const LECTURES_QUERY = `*[_type == "lecture"] | order(order desc) {
  _id, title, type, order
}`;

export const COWORKERS_QUERY = `*[_type == "coworker"] | order(order asc) {
  name, type, bsc, msc, degree, research, email,
  "imageUrl": image.asset->url
}`;

export const ALUMNI_QUERY = `*[_type == "alumni"] | order(no asc) {
  no, name, position, award
}`;

export const AWARDS_QUERY = `*[_type == "award"] | order(order asc) {
  text, year
}`;

export const HARDWARE_QUERY = `*[_type == "hardware"] {
  name, description, link
}`;

export const SOFTWARE_QUERY = `*[_type == "software"] | order(name asc) {
  name, version
}`;

export const GENERAL_RESEARCH_QUERY = `*[_type == "generalResearch"][0] {
  "imageUrl": image.asset->url
}`;
