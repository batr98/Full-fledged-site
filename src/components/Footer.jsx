import { useTranslation } from "../i18n"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">{t("header.brand")}</p>
        <p>{t("footer.description")}</p>
      </div>
      <div className="footer-links">
        <a href="/">{t("footer.home")}</a>
        <a href="/about">{t("footer.about")}</a>
        <a href="/contact">{t("footer.contact")}</a>
        <a href="/stuff">{t("footer.stuff")}</a>
      </div>
    </footer>
  )
}

export default Footer
