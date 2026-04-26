import { NavLink } from "react-router-dom"

function Home() {
    return(
        <div>
            <nav>
               <NavLink to="/">Главная</NavLink>
               <NavLink to="/about">О нас</NavLink>
               <NavLink to="/contact">Контакты</NavLink>
            </nav>
            <h1>Home page</h1>
        </div>
    )
}
export default Home