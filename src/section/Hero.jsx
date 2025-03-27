import { motion, useAnimation } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const Hero = ({ language }) => {
  const [isHolding, setIsHolding] = useState(false)
  const controls = useAnimation()

  const content = {
    en: {
      title: "Daya Anagata Nusantara",
      subtitle: "For Indonesia's Prosperity",
      description: "Investing in Indonesia's future through strategic partnerships and sustainable development",
      buttonText: "Hold to Explore",
    },
    id: {
      title: "Daya Anagata Nusantara",
      subtitle: "Untuk Kemakmuran Indonesia",
      description: "Berinvestasi untuk masa depan Indonesia melalui kemitraan strategis dan pembangunan berkelanjutan",
      buttonText: "Tahan untuk Jelajahi",
    },
  }

  const handleHoldStart = () => {
    setIsHolding(true)
    controls.start({
      scale: 0.95,
      transition: { duration: 0.1 }
    })
    
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      })
    }, 800) // durasi 0,8
  }

  const handleHoldEnd = () => {
    setIsHolding(false)
    controls.start({
      scale: 1,
      transition: { duration: 0.3 }
    })
  }

  return (
    <div id="hero" className="relative min-h-screen pt-[74px] flex items-center justify-center overflow-hidden">
      {/* Backgroud Gambar */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743048656/hero-children-indo_bhsfty.png" alt="Indonesia (Utama)" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 z-20 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">{content[language].title}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-4xl font-medium mb-6 italic">"{content[language].subtitle}"</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">{content[language].description}</p>

          <div className="relative inline-block">
            <motion.button
              className="btn btn-primary btn-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              animate={controls}
              onMouseDown={handleHoldStart}
              onMouseUp={handleHoldEnd}
              onMouseLeave={handleHoldEnd}
              onTouchStart={handleHoldStart}
              onTouchEnd={handleHoldEnd}
            >
              {content[language].buttonText}
              {isHolding && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-70"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "linear" }}
                />
              )}
            </motion.button>
            {!isHolding && (
              <motion.div 
                className="absolute -bottom-6 left-0 right-0 text-center text-xs text-white opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Scroll indikator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"></div>
            </div>
          </div>
          <ChevronDown className="h-10 w-10" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero