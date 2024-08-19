import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/images/Logo.png'
import { router } from '../router'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="" />
                    </Link>
                    <ul className='header__list'>
                        {router.map((route, index) => (
                            <li key={index}>
                                <NavLink className="header__link" to={route.path}>{route.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header