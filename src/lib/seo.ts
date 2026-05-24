import site from '../data/site';

export function buildPageTitle(title?: string) {
  return title ? `${title} | ${site.title}` : site.title;
}

export function buildPageDescription(description?: string) {
  return description ?? site.description;
}
