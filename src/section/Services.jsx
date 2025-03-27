import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, HeartPulse, Cpu, Mountain, TreePalmIcon as PalmTree, GraduationCap } from "lucide-react"

const Services = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Strategic Investment Areas",
      services: [
        {
          icon: <Building2 className="h-12 w-12" />,
          title: "Infrastructure Development",
          description:
            "Investing in critical infrastructure projects including transportation, energy, and urban development to support Indonesia's growth.",
        },
        {
          icon: <HeartPulse className="h-12 w-12" />,
          title: "Healthcare",
          description:
            "Supporting the development of healthcare facilities, medical technology, and pharmaceutical industries to improve healthcare access.",
        },
        {
          icon: <Cpu className="h-12 w-12" />,
          title: "Digital Technology",
          description:
            "Investing in digital infrastructure, technology startups, and innovation to accelerate Indonesia's digital transformation.",
        },
        {
          icon: <Mountain className="h-12 w-12" />,
          title: "Natural Resources",
          description:
            "Responsible investment in Indonesia's abundant natural resources with focus on sustainable practices and value addition.",
        },
        {
          icon: <PalmTree className="h-12 w-12" />,
          title: "Tourism",
          description:
            "Developing Indonesia's tourism potential through strategic investments in destinations, hospitality, and tourism infrastructure.",
        },
        {
          icon: <GraduationCap className="h-12 w-12" />,
          title: "Education",
          description:
            "Supporting educational initiatives, vocational training, and human capital development to build Indonesia's future workforce.",
        },
      ],
    },
    id: {
      title: "Layanan Kami",
      subtitle: "Area Investasi Strategis",
      services: [
        {
          icon: <Building2 className="h-12 w-12" />,
          title: "Pembangunan Infrastruktur",
          description:
            "Berinvestasi dalam proyek infrastruktur penting termasuk transportasi, energi, dan pembangunan perkotaan untuk mendukung pertumbuhan Indonesia.",
        },
        {
          icon: <HeartPulse className="h-12 w-12" />,
          title: "Kesehatan",
          description:
            "Mendukung pengembangan fasilitas kesehatan, teknologi medis, dan industri farmasi untuk meningkatkan akses layanan kesehatan.",
        },
        {
          icon: <Cpu className="h-12 w-12" />,
          title: "Teknologi Digital",
          description:
            "Berinvestasi dalam infrastruktur digital, startup teknologi, dan inovasi untuk mempercepat transformasi digital Indonesia.",
        },
        {
          icon: <Mountain className="h-12 w-12" />,
          title: "Sumber Daya Alam",
          description:
            "Investasi bertanggung jawab dalam sumber daya alam Indonesia yang melimpah dengan fokus pada praktik berkelanjutan dan penambahan nilai.",
        },
        {
          icon: <PalmTree className="h-12 w-12" />,
          title: "Pariwisata",
          description:
            "Mengembangkan potensi pariwisata Indonesia melalui investasi strategis di destinasi, perhotelan, dan infrastruktur pariwisata.",
        },
        {
          icon: <GraduationCap className="h-12 w-12" />,
          title: "Pendidikan",
          description:
            "Mendukung inisiatif pendidikan, pelatihan kejuruan, dan pengembangan sumber daya manusia untuk membangun tenaga kerja masa depan Indonesia.",
        },
      ],
    },
  }

  return (
    <section id="services" className="py-20" ref={ref}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

