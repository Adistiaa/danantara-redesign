import { motion, useInView } from "framer-motion";
import { ArrowRight, BarChart2, Globe, Shield, TrendingUp } from "lucide-react";
import { useRef } from "react";

const ProsperityJourney = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const content = {
    en: {
      title: "Projects",
      subtitle: "To Indonesia's Prosperity",
      description: [
        "Every state asset and resource must be managed effectively and precisely so that its benefits can be directly felt by all Indonesian people.",
        "This effort aligns with the mandate of Article 33 Paragraph 3 of the 1945 Constitution and the national mission of state wealth management."
      ],
      features: [
        {
          icon: <BarChart2 className="w-6 h-6" />,
          title: "Effective Management",
          description: "Optimizing state assets for maximum benefit"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Sustainable Growth",
          description: "Long-term development strategies"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Standards",
          description: "World-class asset management"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Constitutional Mandate",
          description: "Upholding the 1945 Constitution"
        }
      ],
      buttonText: "Learn more about our mission"
    },
    id: {
      title: "Proyek Kami",
      subtitle: "Menggapai Kemakmuran Indonesia",
      description: [
        "Setiap aset dan sumber daya negara harus dikelola secara efektif dan tepat sasaran agar manfaatnya dapat langsung dirasakan oleh seluruh rakyat Indonesia.",
        "Upaya ini sejalan dengan mandat Pasal 33 Ayat 3 UUD 1945 dan misi nasional pengelolaan kekayaan negara."
      ],
      features: [
        {
          icon: <BarChart2 className="w-6 h-6" />,
          title: "Manajemen Efektif",
          description: "Mengoptimalkan aset negara untuk manfaat maksimal"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Pertumbuhan Berkelanjutan",
          description: "Strategi pembangunan jangka panjang"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Standar Global",
          description: "Pengelolaan aset berkelas dunia"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Amanat Konstitusi",
          description: "Menjunjung tinggi UUD 1945"
        }
      ],
      buttonText: "Pelajari lebih lanjut tentang misi kami"
    }
  };

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Judul */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{content[language].title}</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">{content[language].subtitle}</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Gambar */}
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 z-10"></div>
            <img 
              src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743048657/landscape-illustration_qzwygk.png" 
              alt="Indonesia Development" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bagian-bagian */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {content[language].features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="text-red-600 mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Penjelasanan */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {content[language].description.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProsperityJourney;