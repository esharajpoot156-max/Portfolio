import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
 
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-gold/10"
    >
      <span className="text-white text-xl font-bold tracking-wide">
        ESHA<span className="text-gold">.</span>
      </span>

      <div className="hidden md:flex items-center gap-8">
        {links.map(function (link) {
          const linkName = link.name;
          const linkHref = link.href;
          const isActive = active === linkName;
          const linkClass = isActive
            ? "text-sm pb-1 border-b-2 text-gold border-gold"
            : "text-sm pb-1 border-b-2 text-gray-300 border-transparent hover:text-gold";

          return (
            <a
              key={linkName}
              href={linkHref}
              onClick={function () {
                setActive(linkName);
              }}
              className={linkClass}
            >
              {linkName}
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