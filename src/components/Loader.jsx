import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 space-y-6">
      {/* Loading */}
      <div className="flex items-center justify-center space-x-3">
  {[...Array(4)].map((_, i) => (
    <motion.div
      key={i}
      className="w-3 h-3 rounded-full relative overflow-hidden"
      initial={{ y: 0 }}
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.15,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: ["#dc2626", "#9b2c2c", "#2d3748", "#dc2626"], //Warnanya
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "anticipate"
        }}
      />
    </motion.div>
  ))}
</div>

      {/* Loading Nama Danantara */}
      <div className="text-center">
        <div className="flex justify-center">
          {"Danantara".split("").map((letter, i) => (
            <motion.span
              key={i}
              className={`text-3xl font-bold ${
                i === 0 ? "text-red-600" : "text-gray-800"
              }`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + i * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        <motion.p
          className="text-gray-500 mt-3 text-sm font-medium tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="inline-block">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="block h-[1px] bg-gray-300 mb-1"
            />
            Indonesia Sovereign Fund
          </span>
        </motion.p>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-gray-100 rounded-full w-64 mt-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-red-600 to-red-800"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;