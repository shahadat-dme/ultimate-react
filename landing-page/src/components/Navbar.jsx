import React from "react"
import logo from '../assets/logo192.png'
import './Navbar.css'


export default function Navbar() {
    return (
        <nav>
            <img className="nav--icon" src={logo} alt="" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <ul className="navbar-items">
                <li><a href="#main">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Resume</a></li>
                <li><i class="fas fa-search"></i></li>

            </ul>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}