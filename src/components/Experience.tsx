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
        Experience
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-white text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Where I've Worked
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-black/40 border border-gold/10 rounded-2xl p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h4 className="text-white text-xl font-semibold">Remote Software Development Intern</h4>
          <span className="text-gold text-sm">June 2026 – July 2026</span>
        </div>
        <p className="text-gray-500 text-sm mb-5">Teyzix Core Software House</p>

        <ul className="text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-inside">
          <li>Assisted in developing and maintaining web applications using the MERN stack, working across both frontend and backend.</li>
          <li>Collaborated remotely with the development team using Git and GitHub.</li>
          <li>Fixed bugs, implemented new features, and participated in code reviews.</li>
          <li>Gained practical experience in API integration, database operations, and version control.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;