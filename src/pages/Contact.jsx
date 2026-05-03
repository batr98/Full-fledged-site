import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Contact() {
  return (
    <main className="page page-contact">
      <Header />
      <section className="contact-hero">
        <div>
          <span className="eyebrow">Контакты</span>
          <h1>Напишите нам, и мы ответим в течение рабочего дня.</h1>
          <p>Если вы заметили подозрительный аккаунт или уже стали жертвой мошенников, мы готовы помочь — быстро, профессионально и конфиденциально.</p>
        </div>
        <div className="contact-card">
          <p>Электронная почта</p>
          <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>
          <p>Телефон</p>
          <a href="tel:+12345678901">+1 234 567 8901</a>
          <p>Адрес</p>
          <a href="https://www.google.com/maps/search/123+Trust+Lane,+Safe+City,+Country" target="_blank" rel="noreferrer">123 Trust Lane, Safe City, Country</a>
          <p>Telegram</p>
          <a href="https://t.me/+77776202711" target="_blank" rel="noreferrer"> Telegram </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
export default Contact