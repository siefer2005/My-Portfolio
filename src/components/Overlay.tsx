"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 text-white">
      {/* Section 1 - Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 drop-shadow-2xl">
          Animesh Ansh Yadav
        </h1>
        <p className="text-xl md:text-3xl text-neutral-300 drop-shadow-lg font-light tracking-wide">
          Web and App Developer.
        </p>
      </motion.div>

      {/* Section 2 - Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl drop-shadow-2xl">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Section 3 - Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl drop-shadow-2xl">
          Bridging design and <span className="text-neutral-400">engineering.</span>
        </h2>
      </motion.div>
    </div>
  );
}
