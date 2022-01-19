import React from "react"
import './Header.css'
import logo from '../assets/logo192.png'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" />
                <ul className="nav-items">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blogs</a></li>
                    <li> <a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
