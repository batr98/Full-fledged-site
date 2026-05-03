import Footer from "../components/Footer"
import Header from "../components/Header"
import doll from "../assets/doll.png"
import heroic from "../assets/heroic.png"

function Stuff() {
    return (
        <div>
            <Header />
            <h1>Doll in Epstein files</h1>
            <img src={doll} alt="Doll" />
            <p>I am a software engineer.I can speak 9 languages.I know a program language known as Python.</p>
            <h1>Jew's killer</h1>
            <img src={heroic} alt="The best one" />
            <p>I am an experienced person in an IT realm.I have been working in that sphere for about 45 years.</p>
            <Footer />
        </div>
    )
}

export default Stuff