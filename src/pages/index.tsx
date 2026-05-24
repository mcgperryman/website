import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import writing from '../data/writing';
import projects from '../data/projects';

export default function HomePage() {
  const featuredWriting = writing.filter((article) => article.published && article.featured);
  const featuredProjects = projects.filter((project) => project.published && project.featured);

  return (
    <>
      <section style={{ marginBottom: '3rem', padding: '2rem', borderRadius: '1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ margin: 0, color: '#82afff', fontWeight: 700 }}>Control engineering, optimisation, and quantitative systems</p>
        <h1 style={{ margin: '1rem 0 0.75rem 0', fontSize: '3rem', lineHeight: 1.05 }}>Researching dynamical systems under uncertainty.</h1>
        <p style={{ maxWidth: '68ch', color: '#555555' }}>
          I write about control, optimisation, stochastic systems, and mathematics. This website aims to express the simultaneous rigour and application of these fields across all types of processes.
        </p>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Link to="/projects" className="text-link">View projects →</Link>
          <Link to="/writing" className="text-link">Read writing →</Link>
        </div>
      </section>

      {featuredWriting.length > 0 ? (
        <Section title="Featured writing" description="Recent technical essays and practical system design notes.">
          <div style={{ display: 'grid', gap: '1rem' }}>
            {featuredWriting.map((article) => <ArticleCard key={article.href ?? article.title} article={article} />)}
          </div>
        </Section>
      ) : null}

      {featuredProjects.length > 0 ? (
        <Section title="Recent projects" description="Selected work in control, estimation, and applied optimisation.">
          <div style={{ display: 'grid', gap: '1rem' }}>
            {featuredProjects.map((project) => <ProjectCard key={project.href} project={project} />)}
          </div>
        </Section>
      ) : null}
    </>
  );
}
