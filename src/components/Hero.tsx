import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const focusWords = ["I'm", "Esha"];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(function () {
    const interval = setInterval(function () {
      setActiveIndex(function (prev) {
        return prev === 0 ? 1 : 0;
      });
    }, 1800);

    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <div className="w-[600px] h-[600px] bg-gold/40 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-widest text-sm mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 flex items-center gap-4 flex-wrap justify-center">
          {focusWords.map(function (word, index) {
            const isActive = activeIndex === index;
            return (
              <span key={word} className="relative inline-block">
                <motion.span
                  animate={{
                    filter: isActive ? "blur(0px)" : "blur(4px)",
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.5 }}
                  className={index === 1 ? "text-gold inline-block" : "inline-block"}
                >
                  {word}
                </motion.span>

                {isActive && (
                  <>
                    <motion.span
                      layoutId="focusTopLeft"
                      className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gold"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                    <motion.span
                      layoutId="focusTopRight"
                      className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gold"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                    <motion.span
                      layoutId="focusBottomLeft"
                      className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-gold"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                    <motion.span
                      layoutId="focusBottomRight"
                      className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gold"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  </>
                )}
              </span>
            );
          })}
        </h1>

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
      </div>
    </section>
  );
};

export default Hero;