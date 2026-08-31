import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 text-center"
      >
        Experience & Education
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-white text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        My Journey So Far
      </motion.h3>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 border border-gold/10 rounded-2xl p-8"
        >
          <h4 className="text-gold text-sm uppercase tracking-wider font-semibold mb-4">
            Experience
          </h4>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h5 className="text-white text-lg font-semibold">Remote Software Development Intern</h5>
          </div>
          <p className="text-gray-500 text-sm mb-1">Teyzix Core Software House</p>
          <p className="text-gold text-xs mb-4">June 2026 – July 2026</p>

          <ul className="text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li>Developed and maintained web apps using the MERN stack — frontend and backend.</li>
            <li>Collaborated remotely with the team using Git and GitHub.</li>
            <li>Fixed bugs, implemented features, and participated in code reviews.</li>
            <li>Gained hands-on experience in API integration and database operations.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 border border-gold/10 rounded-2xl p-8"
        >
          <h4 className="text-gold text-sm uppercase tracking-wider font-semibold mb-4">
            Education
          </h4>

          <h5 className="text-white text-lg font-semibold mb-2">
            Bachelor of Science in Information Technology
          </h5>
          <p className="text-gray-500 text-sm mb-1">Punjab University</p>
          <p className="text-gold text-xs mb-4">2022 – 2026</p>
          <p className="text-gray-300 text-sm">CGPA: 3.11</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;