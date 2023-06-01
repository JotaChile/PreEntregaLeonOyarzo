import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Marolio Online</h1>

        <nav>
            <ul>
                <li>Pack de inicio</li>
                <li>Botellones</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar