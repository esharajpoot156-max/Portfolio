import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Teyzix-Market",
    description: "Multi-vendor service marketplace — browse services, hire providers, track progress. Fiverr/Upwork-style.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    link: "https://github.com/esharajpoot156-max/Teyzix-Market.git",
  },
  {
    title: "Vendor Management & Quotation System",
    description: "Manages vendors, quotation requests, and proposal comparison — replacing email/spreadsheet procurement workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    link: "https://github.com/esharajpoot156-max/Vendor-Hub.git",
  },
  {
    title: "Sp.market",
    description: "Combined product marketplace (Amazon-style) + service marketplace (Fiverr-style) with admin approval dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    link: "https://github.com/esharajpoot156-max/Sp_market.git",
  },
  {
    title: "Image-to-PDF",
    description: "Python GUI tool that converts multiple selected images into a single PDF file.",
    tech: ["Python"],
    link: "https://github.com/esharajpoot156-max/Image-to-pdf.git",
  },
  {
    title: "Calculator",
    description: "A responsive calculator performing basic arithmetic with a clean, simple UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/esharajpoot156-max/Calculator.git",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const startAutoScroll = (direction: "left" | "right") => {
    stopAutoScroll();
    scrollIntervalRef.current = window.setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === "left" ? -3 : 3;
      }
    }, 16);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  return (
    <section id="projects" className="relative py-24 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 text-center"
      >
        Projects
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-white text-3xl md:text-4xl font-bold mb-4 text-center"
      >
        What I've Built
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-sm mb-12 text-center max-w-md"
      >
        A mix of MERN, Python, and vanilla JS builds — hover the edges to scroll.
      </motion.p>

      <div className="relative w-full max-w-6xl">
        <div
          onMouseEnter={() => startAutoScroll("left")}
          onMouseLeave={stopAutoScroll}
          className="absolute left-0 top-0 h-full w-16 z-10 flex items-center"
        >
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-black/70 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-2"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-80 bg-black/40 border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/40 transition-colors shrink-0 flex flex-col"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-gold/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h4 className="text-white text-lg font-semibold">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-gold text-xs bg-gold/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-gold text-sm pt-1">View Code ↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div
          onMouseEnter={() => startAutoScroll("right")}
          onMouseLeave={stopAutoScroll}
          className="absolute right-0 top-0 h-full w-16 z-10 flex items-center justify-end"
        >
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-black/70 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;