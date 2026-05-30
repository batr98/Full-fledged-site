import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useTranslation } from "../i18n"

function About() {
    const { t } = useTranslation()

    return(
        <main className="page page-about">
            <Header />
            <section className="page-intro">
                <span className="eyebrow">{t("about.eyebrow")}</span>
                <h1>{t("about.title")}</h1>
                <p>{t("about.intro")}</p>
            </section>
            <section className="value-grid">
                <article className="value">
                    <h3>{t("about.value1Title")}</h3>
                    <p>{t("about.value1Text")}</p>
                </article>
                <article className="grippping">
                    <h3>{t("about.value2Title")}</h3>
                    <p>{t("about.value2Text")}</p>
                </article>
                <article className="intriguing">
                    <h3>{t("about.value3Title")}</h3>
                    <p>{t("about.value3Text")}</p>
                </article>
            </section>
            <section className="story">
                <h2>{t("about.storyTitle")}</h2>
                <p>{t("about.storyText")}</p>
            </section>
            <Footer />
        </main>
    )
}
export default About