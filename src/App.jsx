import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./section/Hero"
import About from "./section/About"
import Services from "./section/Services"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import ProsperityJourney from "./section/ProsperityJourney"
import Goals from "./section/Goals"
import ScrollBar from "./components/ScrollBar"

function App() {
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState("id") // id buat bahasa, en buat english

  useEffect(() => {
    // Simulasi Loading Screen nya
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"))
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Navbar language={language} toggleLanguage={toggleLanguage} />
            <ScrollBar />
            <Hero language={language} />
            <About language={language} />
            <Services language={language} />
            <ProsperityJourney language={language} />
            <Goals language={language} />
            <Footer language={language} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App