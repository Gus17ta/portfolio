import Header from '../components/Header.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Footer from '../components/Footer.jsx'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Landing Page Portfolio',
      description: 'Landing page profissional com design moderno e responsivo. Criada com React, componentes reutilizáveis e CSS3 puro.',
      tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Gus17ta/landing-page-portfolio',
      demo: null
    }
  ]

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