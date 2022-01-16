import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Shahadat's</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))