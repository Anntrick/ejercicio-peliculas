import React from "react"
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = props => {

    return (
        //En el header (o menu) ponemos los enlaces a las distintas rutas, podemos usar Link o NavLink
        <header className="Header">
           <NavLink activeClassName="is-active" to="/">home</NavLink>
           <NavLink to="movies">Listar peliculas</NavLink>
           <NavLink to="contact">Contacto</NavLink>
        </header>
    )
}

export default Header