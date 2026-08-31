import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10">
        <div className="w-[500px] h-[500px] bg-gold/20 rounded-full blur-[120px]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gold uppercase tracking-widest text-sm mb-4"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm <span className="text-gold">Esha</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-gray-400 text-lg md:text-xl max-w-xl mb-8"
      >
        Full-Stack Developer crafting clean, creative web experiences
      </motion.p>
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.6 }}
  className="flex flex-col sm:flex-row gap-4"
>
  <a
    href="#projects"
    className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded-full transition-colors text-center"
  >
    View My Work
  </a>
  <a
    href="/resume.pdf"
    download
    className="border border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 rounded-full transition-colors text-center"
  >
    Download Resume
  </a>
</motion.div>
    </section>
  );
};

export default Hero;