import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gold uppercase tracking-widest text-base md:text-lg font-bold mb-4 text-center"
      >
        About Me
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-white text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Who I Am
      </motion.h3>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 border border-gold/50 rounded-2xl p-8 space-y-4"
        >
          <p className="text-gray-400 leading-relaxed">
            I'm <span className="text-gold font-semibold">Esha</span>, a Full Stack Web Developer from Lahore, 
            passionate about building modern, responsive, and user-friendly web applications.
             My core focus is <span className="text-gold font-semibold">MERN stack development</span>, where I work with React.js, Node.js, Express.js, 
             and MongoDB to build complete web solutions from frontend to backend.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Alongside MERN, I work with HTML, CSS, JavaScript, and Tailwind CSS 
            to create clean and responsive interfaces. I also have experience with Python,
             C, C++, and SQL, and can develop basic projects using these technologies. </p>
            <p className="text-gray-400 leading-relaxed">
             I enjoy building projects that solve real-world problems and give me
            hands-on experience across different parts of web development. I’ve worked on 
            projects such as marketplace platforms, vendor management systems, job portals, 
            authentication systems, chat features, notifications, payment integration, admin dashboards, and activity logs.
            </p>
        </motion.div>

        {/* Right: Info card */}
        <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center gap-8"
>
  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gold shadow-[0_0_40px_rgba(212,175,55,0.3)]">
    <img
      src={profilePic}
      alt="Esha"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="bg-black/40 border border-gold/10 rounded-2xl p-8 space-y-5 w-full">
    <div className="flex justify-between border-b border-gold/10 pb-3">
      <span className="text-yellow-800 text-xs uppercase tracking-wider">Role</span>
      <span className="text-white text-sm font-semibold">Full-Stack Developer</span>
    </div>
    <div className="flex justify-between border-b border-gold/10 pb-3">
      <span className="text-yellow-800 text-xs uppercase tracking-wider">Stack</span>
      <span className="text-white text-sm font-semibold">MERN</span>
    </div>
    <div className="flex justify-between border-b border-gold/10 pb-3">
      <span className="text-yellow-800 text-xs uppercase tracking-wider">Based In</span>
      <span className="text-white text-sm font-semibold">Lahore, Pakistan</span>
    </div>
    <div className="flex justify-between">
      <span className="text-yellow-800 text-xs uppercase tracking-wider">Status</span>
      <span className="text-white text-sm font-semibold">Open to Work</span>
    </div>
  </div>
</motion.div>
        

      </div>
    </section>
  );
};

export default About;