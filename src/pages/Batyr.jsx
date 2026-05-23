
import Header from "../components/Header"
import Footer from "../components/Footer"
import me from "../assets/me.png"
import { useTranslation } from "../i18n"

function Batyr() {
   const { t } = useTranslation()

   return(
        <div>
            <Header/>
               <img src={me} alt="My photo" />
               <h1>{t("batyr.title")}</h1>
               <p>{t("batyr.description")}</p>
            <Footer />
        </div>
   )
}
export default Batyr