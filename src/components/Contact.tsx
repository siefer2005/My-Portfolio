"use client";

import React from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
import { motion } from "framer-motion";

// Define the type for the contact items
type ContactItem = {
  id: string;
  name: string;
  url: string;
  animationUrl: string;
};

const contactItems: ContactItem[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/animesh-ansh-yadav",
    animationUrl: "/Linkedin.svg", // Animated SVG
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/siefer2005",
    animationUrl: "/github.svg", // Animated SVG
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/animesh.yadav10", 
    animationUrl: "/Instagram.svg", // Animated SVG
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:animeshansh10@gmail.com", 
    animationUrl: "https://assets3.lottiefiles.com/packages/lf20_u25cckyh.json", // Animated Email Envelope
  },
];

const Contact = () => {
  return (
    <section className="w-full py-24 bg-[#121212] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background accents to match dark mode slate-900 / zinc-900 styles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Together</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            I&apos;m always open to discussing product design work or partnership opportunities. Reach out and let&apos;s create an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 mb-4 flex items-center justify-center relative z-10">
                {item.animationUrl ? (
                  item.animationUrl.endsWith('.svg') ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.animationUrl} alt={item.name} className="w-full h-full object-contain" />
                  ) : (
                    <Player
                      autoplay
                      loop
                      src={item.animationUrl}
                      style={{ height: '100%', width: '100%' }}
                    />
                  )
                ) : (
                  <div className="w-full h-full bg-white/10 rounded-full animate-pulse flex items-center justify-center text-[10px] text-zinc-500 text-center p-2">
                    Lottie
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors relative z-10">
                {item.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
