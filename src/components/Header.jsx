import { NavLink } from "react-router-dom"
import { useTranslation } from "../i18n"
import { useEffect, useState } from "react"

function Header() {
  const { t, language, setLanguage, languages } = useTranslation()
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    } catch {
      return "light"
    }
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme)
      localStorage.setItem("theme", theme)
    } catch {}
  }, [theme])

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
        <NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.faq")}
        </NavLink>
        <NavLink to="/stuff" end className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.stuff")}
        </NavLink>
        <NavLink to="/cases" end className={({ isActive }) => isActive ? "active" : ""}>
          {t("header.cases")}
        </NavLink>
      </nav>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
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
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  )
}

export default Header
