import { NavLink } from "react-router-dom"
import image from "../assets/image.png"

function Home() {
    return(
        <div>
            <nav>
               <NavLink to="/">Главная</NavLink>
               <NavLink to="/about">О нас</NavLink>
               <NavLink to="/contact">Контакты</NavLink>
            </nav>
            <img src={image} alt="Home" />
        </div>
    )
}
export default Home