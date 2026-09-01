import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const logoText = "Esha_Ayaz.";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(function () {
    let index = 0;
    const interval = setInterval(function () {
      if (index <= logoText.length) {
        setDisplayedText(logoText.slice(0, index));
        index = index + 1;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-gold/10"
    >
      <span className="text-skyBlue text-xl font-bold tracking-wide flex items-center">
        {displayedText.split("").map(function (letter, index) {
          const isDot = letter === ".";
          return (
            <span key={index} className={isDot ? "text-gold" : ""}>
              {letter}
            </span>
          );
        })}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-5 bg-gold ml-1"
        />
      </span>

      <div className="hidden md:flex items-center gap-8">
        {links.map(function (link) {
          const linkName = link.name;
          const linkHref = link.href;
          const isActive = active === linkName;

          return (
            <a
              key={linkName}
              href={linkHref}
              onClick={function () {
                setActive(linkName);
              }}
              className={
                isActive
                  ? "relative text-sm pb-1 text-gold"
                  : "relative text-sm pb-1 text-gray-300 hover:text-gold transition-colors"
              }
            >
              {linkName}
              {isActive && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              )}
            </a>
          );
        })}
      </div>

      <a
        href="#contact"
        onClick={function () {
          setActive("Contact");
        }}
        className="bg-gold hover:bg-gold-light text-black font-semibold px-5 py-2 rounded-full text-sm transition-colors"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
};

export default Navbar;
