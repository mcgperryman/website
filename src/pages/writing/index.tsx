import ArticleCard from '../../components/ArticleCard';
import Section from '../../components/Section';
import writing from '../../data/writing';

export default function WritingIndexPage() {
  const publishedWriting = writing.filter((article) => article.published);

  return (
    <>
      <Section title="Writing" description="Deep dives and engineering essays on predictive control and quant systems.">
        <div style={{ display: 'grid', gap: '1rem' }}>
          {publishedWriting.map((article) => <ArticleCard key={article.href ?? article.title} article={article} />)}
        </div>
      </Section>
    </>
  );
}
