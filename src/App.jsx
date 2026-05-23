import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Stuff from "./pages/Stuff"
import Batyr from "./pages/batyr"
import { LanguageProvider } from "./i18n"

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/batyr" element={<Batyr />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
export default App