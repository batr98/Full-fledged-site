import { NavLink } from "react-router-dom"

function About() {
    return(
        <div >
            <nav>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/about">О нас</NavLink>
                <NavLink to="/contact">Контакты</NavLink>
            </nav>
            <h1>About us</h1>
            <p>We are acompany that scams people for money.</p><br></br>
            <p>We have been doing this for 10 years and we are very good at it.</p>
            
        </div>
    )
}
export default About