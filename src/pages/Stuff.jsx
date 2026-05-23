import Footer from "../components/Footer"
import Header from "../components/Header"
import child from "../assets/child.png"
import heroic from "../assets/heroic.png"
import { NavLink } from "react-router-dom"
import { useTranslation } from "../i18n"

function Stuff() {
    const { t } = useTranslation()

    return (
        <main className="page page-stuff">
            <Header />
            <section>
                <h1>{t("stuff.section1Title")}</h1>
                <img src={child} alt="Child" />
                <p>{t("stuff.section1Text")}</p>
            </section>
            <section>
                <h1>{t("stuff.section2Title")}</h1>
                <img src={heroic} alt="The best one" />
                <p>{t("stuff.section2Text")}</p>
            </section>
            <section>
                <h1>{t("stuff.section3Title")}</h1>
                <p>{t("stuff.section3Text")}</p>
                <NavLink className="button" to="/batyr">{t("stuff.section3Button")}</NavLink>
            </section>
            <Footer />
        </main>
    )
}

export default Stuff