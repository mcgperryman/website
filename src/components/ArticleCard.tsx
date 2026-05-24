import { Link } from 'react-router-dom';
import type { WritingItem } from '../data/writing';
import { formatDate } from '../lib/dates';
import Tag from './Tag';

export default function ArticleCard({ article }: { article: WritingItem }) {
  const metadata = [formatDate(article.date), article.readingTime].filter(Boolean);

  return (
    <article className="card card-quiet">
      <div className="card-body">
        <p className="card-meta">{metadata.join(' | ')}</p>
        {article.href ? (
          <Link to={article.href} className="card-title-link">
            <h3 className="card-title">{article.title}</h3>
          </Link>
        ) : (
          <h3 className="card-title">{article.title}</h3>
        )}
        {article.description ? <p className="card-subtitle">{article.description}</p> : null}
        <div className="tag-list" aria-label="Topics">
          {article.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>
    </article>
  );
}
