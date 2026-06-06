import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { loginUser } from "../auth.js"

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError("")
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.email.trim() || !form.password.trim()) {
      setError("Введите почту и пароль")
      return
    }

    try {
      loginUser(form)
      navigate("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="page page-auth">
      <Header />
      <section className="auth-section">
        <div className="auth-card">
          <span className="eyebrow">Аккаунт</span>
          <h1>Вход</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
            </label>
            <label>
              Пароль
              <input name="password" type="password" value={form.password} onChange={updateField} placeholder="Ваш пароль" />
            </label>
            {error && <p className="auth-error">{error}</p>}
            <button className="button" type="submit">Войти</button>
          </form>
          <p className="auth-note">
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Login