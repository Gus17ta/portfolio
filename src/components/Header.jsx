import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">Gustavo</div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
       <a href="mailto:gusta.brito@icloud.com">Contato</a>
      </nav>
    </header>
  )
}

export default Header