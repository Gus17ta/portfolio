import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <h1>Olá, sou Gustavo</h1>
      <h2>Desenvolvedor React & React Native</h2>
      <p>
        Especializado em criar interfaces modernas, responsivas 
        e com código limpo. Transformo ideias em aplicações 
        web e mobile.
      </p>
      <div className="hero-buttons">
        <Link to="/projetos" className="btn-primary">Ver Projetos</Link>
        <a href="mailto:gusta.brito@icloud.com" className="btn-secondary">
  Contato
</a>
      </div>
    </section>
  )
}

export default Hero