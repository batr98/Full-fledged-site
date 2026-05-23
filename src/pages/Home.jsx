import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import image from "../assets/image.png"
import { NavLink } from "react-router-dom"
import { useTranslation } from "../i18n"

function Home() {
    const { t, language } = useTranslation()

    const eyebrowText = t("home.eyebrow")
    let eyebrowContent = eyebrowText
    if (language === "ru" && eyebrowText.includes("защита")) {
        const parts = eyebrowText.split("защита")
        eyebrowContent = (
            <>
                {parts[0]}
                <span className="protection">защита</span>
                {parts[1] ?? ""}
            </>
        )
    }

    return(
        <>
            <main className="page page-home">
                <Header />
                <section className="hero">
                    <div className="hero-text">
                        <span className="eyebrow">{eyebrowContent}</span>
                        <h1>{t("home.title")}</h1>
                        <h2>{t("home.subtitle")}</h2>
                        <div className="hero-actions">
                          <NavLink className="button" to="/contact">{t("home.contactButton")}</NavLink>
                          <NavLink className="button button-secondary" to="/about">{t("home.learnButton")}</NavLink>
                        </div>
                    </div>
                    <img className="hero-image" src={image} alt="Illustration" />
                </section>
                <section className="features">
                    <article className="feature-card">
                        <h3>{t("home.feature1Title")}</h3>
                        <p>{t("home.feature1Text")}</p>
                    </article>
                    <article className="feature-card">
                        <h3>{t("home.feature2Title")}</h3>
                        <p>{t("home.feature2Text")}</p>
                    </article>
                    <article className="feature-card">
                        <h3>{t("home.feature3Title")}</h3>
                        <p>{t("home.feature3Text")}</p>
                    </article>
                </section>
                <Footer />
            </main>
            <audio autoPlay loop>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Ваш браузер не поддерживает аудио.
            </audio>
        </>
    )
}
export default Home