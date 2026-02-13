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
