import Header from '../components/Header.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Footer from '../components/Footer.jsx'
import projects from '../data/Projects.js'

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <div className="projects-container">
        <h1>Meus Projetos</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects