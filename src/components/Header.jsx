import { NavLink } from "react-router-dom"
import { useTranslation } from "../i18n"
import { useEffect, useState } from "react"
import { getCurrentUser, logoutUser } from "../Auth"

function Header() {
  const { t, language, setLanguage, languages } = useTranslation()
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    } catch {
      return "light"
    }
  })
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser())

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme)
      localStorage.setItem("theme", theme)
    } catch {
      // localStorage can be unavailable in restricted browser modes.
    }
  }, [theme])

  useEffect(() => {
    function syncUser() {
      setCurrentUser(getCurrentUser())
    }

    window.addEventListener("auth-change", syncUser)
    window.addEventListener("storage", syncUser)

    return () => {
      window.removeEventListener("auth-change", syncUser)
      window.removeEventListener("storage", syncUser)
    }
  }, [])

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
        {!currentUser && (
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Вход
          </NavLink>
        )}
      </nav>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {currentUser && (
          <div className="auth-status">
            <span>{currentUser.name}</span>
            <button type="button" onClick={logoutUser}>Выйти</button>
          </div>
        )}
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
