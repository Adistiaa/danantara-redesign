import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";

const Footer = ({ language }) => {
  const content = {
    en: {
      about: "About Danantara Indonesia",
      aboutText:
        "Danantara Indonesia is Indonesia's sovereign wealth fund, established to attract and facilitate investments that support Indonesia's economic development.",
      quickLinks: "Quick Links",
      links: [
        { name: "Home", url: "#hero" },
        { name: "About", url: "#about" },
        { name: "Services", url: "#services" },
        { name: "Projects", url: "#projects" },
        { name: "Goals", url: "#goals" },
        { name: "Contact", url: "#footer" },
      ],
      contact: "Contact Us",
      address:
        "Gedung Wisma Nusantara, Jl. M.H. Thamrin No.59, Jakarta 10350, Indonesia",
      phone: "+62 21 1234 5678",
      email: "info@danantaraindonesia.com",
      copyright: "This website was created by Muhammad Adistia Pratama as Basic Training",
    },
    id: {
      about: "Tentang Danantara Indonesia",
      aboutText:
        "Danantara Indonesia adalah dana kekayaan negara Indonesia, didirikan untuk menarik dan memfasilitasi investasi yang mendukung pembangunan ekonomi Indonesia.",
      quickLinks: "Tautan Cepat",
      links: [
        { name: "Beranda", url: "#hero" },
        { name: "Tentang", url: "#about" },
        { name: "Layanan", url: "#services" },
        { name: "Proyek", url: "#projects" },
        { name: "Tujuan", url: "#goals" },
        { name: "Kontak", url: "#footer" },
      ],
      contact: "Hubungi Kami",
      address:
        "Danantara Indonesia Sentra Mandiri. Jl. R.P. Soeroso No.2-4 Jakarta Pusat, 10330, Indonesia",
      phone: "+62 000 0000",
      email: "contact@danantaraindonesia.com",
      copyright: "Website ini dibuat oleh Muhammad Adistia Pratama sebagai Pelatihan Dasar",
    },
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">
              {content[language].about}
            </h4>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <img src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743048653/danantara-logo-black-v2_fjdymq.webp" alt="Logo Danantara"/>
            <p className="text-gray-400 mb-4">{content[language].aboutText}</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">
              {content[language].quickLinks}
            </h4>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <ul className="space-y-3">
              {content[language].links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold mb-4">
              {content[language].contact}
            </h4>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-red-500 flex-shrink-0" />
                <p className="text-gray-400">{content[language].address}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-red-500 flex-shrink-0" />
                <p className="text-gray-400">{content[language].phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-red-500 flex-shrink-0" />
                <p className="text-gray-400">{content[language].email}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
