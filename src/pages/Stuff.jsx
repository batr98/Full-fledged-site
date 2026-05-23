import Footer from "../components/Footer"
import Header from "../components/Header"
import child from "../assets/child.png"
import heroic from "../assets/heroic.png"
import { NavLink } from "react-router-dom"

function Stuff() {
    return (
        <main className="page page-stuff">
            <Header />
            <section>
                <h1>Forced to fight at a young age</h1>
                <img src={child} alt="Child" />
                <p>I am a software engineer. I can speak 9 languages. I know a programming language known as Python.</p>
            </section>
            <section>
                <h1>The actual legend</h1>
                <img src={heroic} alt="The best one" />
                <p>I am an experienced person in an IT realm. I have been working in that sphere for about 45 years.</p>
            </section>
            <section>
                <h1>Our main stuff</h1>
                <p>We have a lot of employees. They are all very good at their work. We are proud of them.</p>
                <NavLink className="button" to="/batyr">See the best one</NavLink>
            </section>
            <Footer />
            
        </main>
    )
}

export default Stuff