import { Link } from 'react-router-dom';
import type { ProjectItem } from '../data/projects';
import Tag from './Tag';

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="card card-quiet">
      {project.previewImage ? (
        <img className="card-preview" src={project.previewImage} alt="" />
      ) : null}
      <div className="card-body">
        <p className="card-meta">{[project.year, project.status].filter(Boolean).join(' | ')}</p>
        <Link to={project.href} className="card-title-link">
          <h3 className="card-title">{project.title}</h3>
        </Link>
        <p className="card-subtitle">{project.description}</p>
        <div className="tag-list" aria-label="Technical areas">
          {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
        {project.githubHref ? (
          <a className="text-link" href={project.githubHref}>
            Source repository -&gt;
          </a>
        ) : null}
      </div>
    </article>
  );
}
