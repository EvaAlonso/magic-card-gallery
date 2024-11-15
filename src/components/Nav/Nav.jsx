import { Link } from "react-router-dom"
import "./Nav.css"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav-container">
      <ul className="items-container">
        <NavLink to="/"><li>Inicio</li></NavLink>
        <li>Favoritos</li>
        <NavLink to="type"><li>Tipos</li></NavLink> 
        <li>Contactos</li>
      </ul>
    </nav>
  )
}

export default Nav