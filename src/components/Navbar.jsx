import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const Navbar = ({ language, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = {
    en: [
      { name: "Home", id: "hero" },
      { name: "About", id: "about" },
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Goals", id: "goals" },
      { name: "Contact", id: "footer" },
    ],
    id: [
      { name: "Beranda", id: "hero" },
      { name: "Tentang", id: "about" },
      { name: "Layanan", id: "services" },
      { name: "Proyek", id: "projects" },
      { name: "Tujuan", id: "goals" },
      { name: "Kontak", id: "footer" },
    ],
  };

  // Fungsi untuk scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // nutup menu di mobile setelah ngeklik
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md ${
          scrolled ? "py-2" : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <img src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743048653/danantara-logo-black-v2_fjdymq.webp" alt="Logo Danantara" className="size-2/3"/>
          </motion.div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
              {navLinks[language].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-800 hover:text-red-600 transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <button
                onClick={toggleLanguage}
                className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  language === "en" 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <img 
                  src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743049652/Flag_of_the_United_Kingdom__3-5_epyha9.svg" 
                  alt="English" 
                  className="w-4 h-4 mr-1" 
                />
                EN
              </button>
              <button
                onClick={toggleLanguage}
                className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  language === "id" 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <img 
                  src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743049644/Flag_of_Indonesia_mhrc3b.svg" 
                  alt="Bahasa" 
                  className="w-4 h-4 mr-1" 
                />
                ID
              </button>
          </div>

          {/* Navigasi Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="btn btn-circle btn-ghost btn-sm">
              <Globe className="w-5 h-5" />
            </button>
            <button className="btn btn-circle btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Navigasi Mobile */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-xl z-50 md:hidden flex flex-col"
    >
      {/* Judul Atas Navigasi */}
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
        <button 
          onClick={() => setMenuOpen(false)} 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      {/* Link Navigasi */}
      <nav className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-2">
          {navLinks[language].map((link, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tombol Ganti Bahasa */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex space-x-3 justify-center">
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
              language === "en" 
                ? "bg-gray-800 text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <img 
              src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743049652/Flag_of_the_United_Kingdom__3-5_epyha9.svg" 
              alt="English" 
              className="w-5 h-5 mr-2" 
            />
            EN
          </button>
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
              language === "id" 
                ? "bg-gray-800 text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <img 
              src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743049644/Flag_of_Indonesia_mhrc3b.svg" 
              alt="Bahasa" 
              className="w-5 h-5 mr-2" 
            />
            ID
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default Navbar;
