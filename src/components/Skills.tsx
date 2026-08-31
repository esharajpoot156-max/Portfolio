import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    category: "Database",
    skills: ["MongoDB","SQL Lite","Oracle SQL"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "Python", "REST APIs"," C / C++"," Postman","Bootstrap","javascript","Adobe Photoshop","Canva","Coral Draw"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 flex flex-col items-center">
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
        className="text-white text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        What I Work With
      </motion.h3>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/40 border border-gold/10 rounded-2xl p-6"
          >
            <h4 className="text-gold text-sm uppercase tracking-wider font-semibold mb-4">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-white text-sm bg-white/5 border border-gold/10 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;