function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard