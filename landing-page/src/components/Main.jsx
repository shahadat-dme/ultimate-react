import React from "react"
import './Main.css'

export default function Main() {
    return (
        <main className="container">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>React is a free and open-source front-end JavaScript library</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}