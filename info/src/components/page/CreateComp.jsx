import './style.css'
import image from '../assets/logo192.png'

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={image} width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    )
}

function CreateComp() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
export default CreateComp;