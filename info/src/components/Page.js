import React from "react"
import image from '../assets/logo192.png'
// import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src={image} width="80px" alt="logo"/>
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}
export default Page;

// ReactDOM.render(<Page />, document.getElementById("root"))