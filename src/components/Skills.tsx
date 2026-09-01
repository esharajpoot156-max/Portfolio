import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "SQL Lite", "Oracle SQL"],
  },
  {
    category: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "GitHub", "Python", "REST APIs", "C / C++", "Postman", "Bootstrap", "Adobe Photoshop", "Canva", "Coral Draw"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 flex flex-col items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 text-center"
      >
        Skills
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-200 text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        What I Work With
      </motion.h3>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        {skillGroups.map(function (group, index) {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative bg-black/40 border border-gold/10 rounded-2xl p-6 hover:border-gold/40 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon size={18} className="text-gold" />
                </div>
                <h4 className="text-white text-sm uppercase tracking-wider font-semibold">
                  {group.category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map(function (skill) {
                  return (
                    <span
                      key={skill}
                      className="text-gray-300 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-gold/40 hover:text-gold transition-colors"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;