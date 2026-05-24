import ProjectCard from '../../components/ProjectCard';
import Section from '../../components/Section';
import projects from '../../data/projects';

export default function ProjectsIndexPage() {
  const publishedProjects = projects.filter((project) => project.published);

  return (
    <>
      <Section title="Projects" description="Selected work in control, estimation, and simulation." >
        {publishedProjects.length > 0 ? (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {publishedProjects.map((project) => <ProjectCard key={project.href} project={project} />)}
          </div>
        ) : (
          <p className="section-copy">Project notes will be added here when they are ready to publish.</p>
        )}
      </Section>
    </>
  );
}
