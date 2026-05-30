import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n"


function Cases() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <main>
                <section className="cases">
                    <h2>{t("about.casesTitle")}</h2>
                    <p>{t("about.casesIntro")}</p>

                    <div className="value-grid">
                        <article className="case-card">
                            <h3>{t("about.case1Title")}</h3>
                            <p>{t("about.case1Text")}</p>
                        </article>

                        <article className="case-card">
                            <h3>{t("about.case2Title")}</h3>
                            <p>{t("about.case2Text")}</p>
                        </article>

                        <article className="case-card">
                            <h3>{t("about.case3Title")}</h3>
                            <p>{t("about.case3Text")}</p>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Cases