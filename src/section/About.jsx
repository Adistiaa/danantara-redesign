import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Info, Users, Target, Award } from "lucide-react"
import { useEffect, useState } from "react"

const About = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedValues, setAnimatedValues] = useState({
    assets: 0,
    partnerships: 0,
    projects: 0,
    experience: 0
  })

  useEffect(() => {
    if (inView) {
      // Durasi Animasi Angka
      const durations = [2000, 1800, 2200, 2500]
      
      // Target Angka
      const targets = [100, 100, 100, 100]
      
      // Animasi Angka
      targets.forEach((target, index) => {
        const duration = durations[index]
        const startTime = Date.now()
        const increment = target / (duration / 16) // 60fps
        
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const currentValue = Math.floor(progress * target)
          
          setAnimatedValues(prev => ({
            ...prev,
            assets: index === 0 ? currentValue : prev.assets,
            partnerships: index === 1 ? currentValue : prev.partnerships,
            projects: index === 2 ? currentValue : prev.projects,
            experience: index === 3 ? currentValue : prev.experience
          }))
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        requestAnimationFrame(animate)
      })
    }
  }, [inView])

  const content = {
    en: {
      title: "About",
      subtitle: "Danantara Indonesia",
      description: [
        "Danantara Indonesia is a strategic investment management body that optimizes government investments to drive national economic growth.",
        "The name Daya Anagata Nusantara was given by President Prabowo Subianto, symbolizing energy, the future, and Indonesia. Committed to economic transformation through professionalism and good governance, Danantara focuses on asset efficiency, global investment, and strengthening strategic sectors to ensure nationwide prosperity.",
      ],
      stats: [
        { icon: <Info className="h-8 w-8" />, value: `$${animatedValues.assets}B+`, label: "Assets Under Management" },
        { icon: <Users className="h-8 w-8" />, value: `${animatedValues.partnerships}+`, label: "Strategic Partnerships" },
        { icon: <Target className="h-8 w-8" />, value: `${animatedValues.projects}+`, label: "Investment Projects" },
        { icon: <Award className="h-8 w-8" />, value: `${animatedValues.experience}+`, label: "Years of Experience" },
      ],
    },
    id: {
      title: "Tentang Kami",
      subtitle: "Danantara Indonesia",
      description: [
        "Danantara Indonesia adalah badan pengelola investasi strategis yang mengoptimalkan investasi pemerintah untuk pertumbuhan ekonomi nasional.",
        "Nama Daya Anagata Nusantara diberikan oleh Presiden Prabowo Subianto, dengan makna energi, masa depan, dan Indonesia. Danantara berkomitmen pada transformasi ekonomi melalui profesionalisme dan good governance, serta fokus pada efisiensi aset, investasi global, dan daya saing sektor strategis demi kemakmuran rakyat.",
      ],
      stats: [
        { icon: <Info className="h-8 w-8" />, value: `$${animatedValues.assets}M+`, label: "Aset Dalam Pengelolaan" },
        { icon: <Users className="h-8 w-8" />, value: `${animatedValues.partnerships}+`, label: "Kemitraan Strategis" },
        { icon: <Target className="h-8 w-8" />, value: `${animatedValues.projects}+`, label: "Proyek Investasi" },
        { icon: <Award className="h-8 w-8" />, value: `${animatedValues.experience}+`, label: "Tahun Pengalaman" },
      ],
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{content[language].title}</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">{content[language].subtitle}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {content[language].description.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {content[language].stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
              >
                <div className="text-red-600 mb-3 flex justify-center">{stat.icon}</div>
                <motion.h4 
                  className="text-3xl md:text-4xl font-bold text-red-600 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {stat.value}
                </motion.h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About