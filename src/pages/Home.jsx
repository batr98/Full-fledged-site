import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import image from "../assets/image.png"
import { NavLink } from "react-router-dom"

function Home() {
    return(
        <>
            <main className="page page-home">
                <Header />
                <section className="hero">
                    <div className="hero-text">
                        <span className="eyebrow">Надёжная защита</span>
                        <h1>Мы помогаем вам остановить мошенников и вернуть уверенность.</h1>
                        <h2>Смарт-анализ, моментальная поддержка и отчёты, которые легко понять.</h2>
                        <div className="hero-actions">
                          <NavLink className="button" to="/contact">Связаться с нами</NavLink>
                          <NavLink className="button button-secondary" to="/about">Узнать больше</NavLink>
                        </div>
                    </div>
                    <img className="hero-image" src={image} alt="Illustration" />
                </section>
                <section className="features">
                    <article className="feature-card">
                        <h3>Быстрый анализ</h3>
                        <p>Проверяем подозрительные аккаунты за пару минут и даём понятный результат.</p>
                    </article>
                    <article className="feature-card">
                        <h3>Личная поддержка</h3>
                        <p>Наши специалисты готовы ответить и помочь с любыми деталями.</p>
                    </article>
                    <article className="feature-card">
                        <h3>Безопасные решения</h3>
                        <p>Действуем по закону и сохраняем конфиденциальность ваших данных.</p>
                    </article>
                </section>
                <Footer />
            </main>
            <audio controls loop >
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Ваш браузер не поддерживает аудио.
            </audio>
        </>
    )
}
export default Home