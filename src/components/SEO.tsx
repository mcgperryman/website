import { useEffect } from 'react';
import site from '../data/site';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.title}` : site.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description ?? site.description);
    } else {
      const element = document.createElement('meta');
      element.name = 'description';
      element.content = description ?? site.description;
      document.head.appendChild(element);
    }
  }, [title, description]);

  return null;
}
