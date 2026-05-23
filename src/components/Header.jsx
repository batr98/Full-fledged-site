import { NavLink } from "react-router-dom"
import { useTranslation } from "../i18n"

function Header() {
  const { t, language, setLanguage, languages } = useTranslation()

  return (
    <header className="site-header">
      <div className="brand">{t("header.brand")}</div>
      <nav className="header-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.home")}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.about")}
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.contact")}
        </NavLink>
        <NavLink to="/stuff" end className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.stuff")}
        </NavLink>
      </nav>
      <div className="language-switch">
        {languages.map((item) => (
          <button
            type="button"
            key={item.code}
            className={language === item.code ? "active" : ""}
            onClick={() => setLanguage(item.code)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header
