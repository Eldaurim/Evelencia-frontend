import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <h1>
        <Link to='/'>Evelencia</Link>
      </h1>
      <Link to='/login'>Connexion</Link>
      <Link to='/signup'>S'inscrire</Link>
    </nav>
  )
}

export default Header
