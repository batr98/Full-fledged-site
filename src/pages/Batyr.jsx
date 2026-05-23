
import Header from "../components/Header"
import Footer from "../components/Footer"
import me from "../assets/me.png"

function Batyr() {
   return(
        <div>
            <Header/>
               <img src={me} alt="My photo" />
               <h1>Main stuff</h1>
               <p>My name is Batyr. I am a web-site writer. I know programming languages like Python, React, and JavaScript.</p>
            <Footer />
        </div>
   )
}
export default Batyr