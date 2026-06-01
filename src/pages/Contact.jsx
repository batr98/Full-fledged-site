import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useTranslation } from "../i18n"

function Contact() {
  const { t } = useTranslation()
  const email = t("contact.emailAddress")
  const mailTo = `mailto:${email}?subject=${encodeURIComponent(t("contact.requestSubject"))}&body=${encodeURIComponent(t("contact.requestBody"))}`

  return (
    <main className="page page-contact">
      <Header />
      <section className="contact-hero">
        <div>
          <span className="eyebrow">{t("contact.eyebrow")}</span>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.intro")}</p>
        </div>
        <div className="contact-card">
          <p>{t("contact.emailLabel")}</p>
          <a href={`mailto:${email}`}>{email}</a>
          <p>{t("contact.requestLabel")}</p>
          <a href={mailTo}>{t("contact.requestButton")}</a>
          <p>{t("contact.phoneLabel")}</p>
          <a href={`tel:${t("contact.phoneNumber").replace(/\s+/g, "")}`}>{t("contact.phoneNumber")}</a>
          <p>{t("contact.addressLabel")}</p>
          <a href="https://www.google.com/maps/search/Mangilik +El+Avenue+53,+Astana,+Kazakhstan" target="_blank" rel="noreferrer">{t("contact.addressText")}</a>
          <p>{t("contact.telegramLabel")}</p>
          <a href="https://t.me/+77776202711" target="_blank" rel="noreferrer">{t("contact.telegramText")}</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
export default Contact