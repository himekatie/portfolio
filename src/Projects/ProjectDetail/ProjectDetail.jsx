import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Header from '../../Header/Header';
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <Header />
        <p>Project not found.</p>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  return (
   
    <div className="project-detail">
        <Header />
      <Link to="/projects" className="back-link">← Back to Projects</Link>

      <h1>{project.title}</h1>
      <p className="project-description">{project.description}</p>

      {project.techStack?.length > 0 && (
        <ul className="tech-stack">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}

      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit Site ↗
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub ↗
          </a>
        )}
      </div>

      <div className="project-photos">
        {project.photos.map((photo, i) => (
          <img key={i} src={photo} alt={`${project.title} screenshot ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}