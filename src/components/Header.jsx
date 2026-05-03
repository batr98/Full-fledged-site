import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="site-header">
      <div className="brand">TrustGuard</div>
      <nav className="header-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Главная
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          О нас
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Контакты
        </NavLink>
        <NavLink to="/stuff" end className={({ isActive }) => isActive ? "active" : ""}>
          Сотрудники
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
