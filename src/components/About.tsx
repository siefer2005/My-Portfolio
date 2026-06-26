"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  // Animation variants for cleaner, staggered rendering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Smooth custom cubic-bezier
    },
  };

  return (
    <section className="relative z-20 bg-[#0a0a0a] pt-32 pb-24 px-6 sm:px-12 md:px-24 border-b border-neutral-900 overflow-hidden">
      {/* Optional subtle background gradient glow */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column: Heading */}
        <motion.div variants={itemVariants} className="lg:col-span-4 lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            About Me
          </h2>
          <div className="h-[2px] w-12 bg-white rounded-full opacity-80"></div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
          {/* Main Bio Paragraphs */}
          <div className="text-neutral-300 text-lg md:text-xl leading-relaxed space-y-6 font-light">
            <p>
              I am a recent <span className="text-white font-medium">B.Tech graduate in Information Technology</span> from Jabalpur Engineering College, currently based in Bhopal, Madhya Pradesh. Driven by a passion for designing and developing seamless digital experiences, I specialize in engineering modern, scalable web and mobile applications.
            </p>
            <p className="text-neutral-400 text-base md:text-lg">
              My core technical expertise spans <span className="text-neutral-200 font-medium">React Native, MERN Stack, React.js, Node.js, and TypeScript</span>. I have hands-on experience building out cross-platform mobile apps, real-time communication systems, geolocation features, and secure backend architectures. I thrive on translating complex technical challenges into clean, maintainable, and highly efficient code.
            </p>
          </div>

          {/* Quick Info Grid for a professional look */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm"
            >
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Philosophy
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Focused on continuous learning and adapting to modern frameworks to build impactful, real-world solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm"
            >
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Collaboration
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                An energetic team player who thrives in fast-paced environments and values clean, collaborative development practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}