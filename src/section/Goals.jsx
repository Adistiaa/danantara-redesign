import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const Goals = ({ language }) => {
  const [currentMission, setCurrentMission] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const content = {
    en: {
      title: "Vision & Mission",
      subtitle: "Our Guiding Principles",
      vision:
        "As a leading investment manager, where strategic SOEs will be the enablers of its investment placement, Danantara Indonesia encourages the transformation of the Indonesian economy by growing a world-scale Sovereign Wealth Fund, supporting national development and creating prosperity for all Indonesian people.",
      missions: [
        "1. Manage state assets professionally, transparently and sustainably in accordance with the principles of good governance to promote people's welfare, as mandated in Article 33 Paragraph 3 of the 1945 Constitution and the Asta Cita mission.",
        "2. Optimizing and managing BUMN assets to create significant economic added value.",
        "3. Becoming a catalyst for national economic growth through strategic investment in priority sectors that encourage global competitiveness.",
        "4. Attract and accelerate domestic and international investment by building strategic partnerships to support inclusive and sustainable national development.",
        "5. Building an independent and superior Sovereign Wealth Fund institution, with healthy financial governance and oriented towards long-term sustainability.",
      ],
      quote:
        "All our wealth must be maximized for the interest and prosperity of our people (the Indonesian people).",
      quoteSource:
        "President Prabowo Subianto's speech at the MPR RI Plenary Session for the Inauguration of the 2024-2029 Elected President and Vice President",
    },
    id: {
      title: "Visi & Misi",
      subtitle: "Prinsip Panduan Kami",
      vision:
        "Sebagai pengelola investasi terkemuka, di mana BUMN strategis akan menjadi enabler penempatan investasinya, Danantara Indonesia mendorong transformasi ekonomi Indonesia dengan menumbuhkan badan Sovereign Wealth Fund berskala dunia, mendukung pembangunan nasional dan menciptakan kemakmuran bagi seluruh rakyat Indonesia.",
      missions: [
        "1. Mengelola kekayaan negara secara profesional, transparan, dan berkelanjutan sesuai dengan prinsip good governance untuk mendorong kesejahteraan rakyat, sebagaimana diamanatkan dalam Pasal 33 Ayat 3 UUD 1945 dan misi Asta Cita.",
        "2. Mengoptimalkan dan mengelola aset BUMN untuk menciptakan nilai tambah ekonomi yang signifikan.",
        "3. Menjadi katalisator pertumbuhan ekonomi nasional melalui investasi strategis di sektor prioritas yang mendorong daya saing global.",
        "4. Menarik dan mengakselerasi investasi domestik maupun internasional dengan membangun kemitraan strategis guna mendukung pembangunan nasional yang inklusif dan berkelanjutan.",
        "5. Membangun institusi Sovereign Wealth Fund yang mandiri dan unggul, dengan tata kelola keuangan yang sehat serta berorientasi pada keberlanjutan jangka panjang.",
      ],
      quote:
        "Semua kekayaan kita harus sebesar-besarnya untuk kepentingan dan kemakmuran rakyat kita (rakyat Indonesia).",
      quoteSource:
        "Pidato Presiden Prabowo Subianto pada Sidang Paripurna MPR RI dalam rangka Pelantikan Presiden dan Wakil Presiden RI Terpilih Periode 2024-2029",
    },
  };

  const nextMission = () => {
    setCurrentMission((prev) =>
      prev === content[language].missions.length - 1 ? 0 : prev + 1
    );
  };

  const prevMission = () => {
    setCurrentMission((prev) =>
      prev === 0 ? content[language].missions.length - 1 : prev - 1
    );
  };

  return (
    <section id="goals" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Judul */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">
            {content[language].subtitle}
          </h3>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Visi */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-lg text-gray-700">
                {content[language].vision}
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
              </div>

              <div className="relative h-40 overflow-hidden">
                {content[language].missions.map((mission, index) => (
                  <motion.p
                    key={index}
                    className={`text-lg text-gray-700 absolute top-0 left-0 w-full ${
                      index === currentMission ? "opacity-100" : "opacity-0"
                    }`}
                    initial={{
                      x: index > currentMission ? 100 : -100,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: index === currentMission ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {mission}
                  </motion.p>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={prevMission}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex space-x-2">
                  {content[language].missions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMission(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentMission ? "bg-red-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextMission}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Kata-kata sama Gambar*/}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Kata-kata */}
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-red-600 text-6xl opacity-20">
                "
              </div>
              <p className="text-xl italic text-gray-800 mb-4 relative z-10">
                "{content[language].quote}"
              </p>
              <p className="text-sm text-gray-500 text-right">
                {content[language].quoteSource}
              </p>
            </div>
          </div>

          {/* Gambar */}
          <motion.div
            className="relative h-64 md:h-96 flex justify-center items-center shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Kotak selang-seling */}
            <div className="absolute w-56 h-56 bg-gray-800 rounded-xl -top-6 -left-6 shadow-lg"></div>
            <div className="absolute w-56 h-56 bg-red-600 rounded-xl top-6 left-6 shadow-lg"></div>
            <div className="absolute w-56 h-56 bg-red-800 rounded-xl -bottom-6 -right-6 shadow-lg"></div>

            {/* Gambar Pak Prabowo */}
            <img
              src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743048654/president-prabowo_bhas63.png"
              alt="Indonesia Development"
              className="w-full h-full object-cover relative z-10 rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
