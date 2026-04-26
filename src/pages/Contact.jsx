import { NavLink } from "react-router-dom"

function Contact() {
  return (
    <div>
      <div className="navbar">
        <nav>
               <NavLink to="/">Главная</NavLink>
               <NavLink to="/about">О нас</NavLink>
               <NavLink to="/contact">Контакты</NavLink>
        </nav>
        </div>
        <h1>if you have any questions ,you can call this phone number:</h1>
        <p>7 777 620 2711</p>
        
    </div>
  )
}
export default Contact