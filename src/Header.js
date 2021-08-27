import React from "react";
import {Link, NavLink} from "react-router-dom";

const Header = () =>{
    return (
        <header className='header'>
            <a href="" className='logo'>You logo</a>
            <nav className='nav'>
                <NavLink exact to="/" className='nav-link'>Home</NavLink>
                <NavLink to="/pokemon" className='nav-link'>Pokemon</NavLink>
                <NavLink to="/users" className='nav-link'>Users</NavLink>
                <NavLink to="/inform" className='nav-link'>Cats</NavLink>
                <NavLink to="/starwars" className='nav-link'>Starwars</NavLink>
            </nav>
        </header>
    )
}



export default Header
