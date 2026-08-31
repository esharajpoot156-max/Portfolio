import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4"
      >
        Contact
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-white text-3xl md:text-4xl font-bold mb-6"
      >
        Let's Work Together
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 max-w-xl mb-10"
      >
        Have a project in mind or just want to connect? Feel free to reach out —
        I'm always open to new opportunities and collaborations.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        href="mailto:esharajpoot156@gmail.com"
        className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded-full transition-colors mb-10"
      >
        Say Hello
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-6"
      >
        <a href="https://github.com/esharajpoot156-max" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold transition-colors text-sm">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/esha-ayyaz-80933435b/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold transition-colors text-sm">
          LinkedIn
        </a>
      </motion.div>

    </section>
  );
};

export default Contact;