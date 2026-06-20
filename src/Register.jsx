import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import { registerUser } from "./Auth.js"

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError("")
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError("Заполните все поля")
      return
    }

    if (form.password.length < 4) {
      setError("Пароль должен быть минимум 4 символа")
      return
    }

    try {
      registerUser(form)
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
          <h1>Регистрация</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Имя
              <input name="name" value={form.name} onChange={updateField} placeholder="Ваше имя" />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
            </label>
            <label>
              Пароль
              <input name="password" type="password" value={form.password} onChange={updateField} placeholder="Минимум 4 символа" />
            </label>
            {error && <p className="auth-error">{error}</p>}
            <button className="button" type="submit">Создать аккаунт</button>
          </form>
          <p className="auth-note">
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Register