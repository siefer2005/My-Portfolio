"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Dating App",
    category: "Mobile Application",
    description: "A comprehensive, accessible, and beautiful design system built for the modern app.",
    image: "/dating-app.png",
  },
  {
    id: 2,
    title: "Mingoo.live",
    category: "Web Application",
    description: "Built a full-stack creator platform enabling users to share posts, host live streams, interact through real-time chat, and manage subscriptions with a modern responsive interface.",
    image: "/mingoo-live.png",
  },
  {
    id: 3,
    title: "Crypto Wallet",
    category: "BlockChain",
    description: "Created a digital wallet application that enables users to securely store, send, receive, and monitor cryptocurrencies with real-time market updates.",
    image: "/crypto-wallet.jpg",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    category: "Moblie Application (Kotlin)",
    description: "A creative mobile game with multiplayer support.",
    image: "/tic-tac-toe.png",
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h3>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
            A collection of recent projects exploring interaction, performance, and aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group relative h-[400px] flex flex-col justify-end p-8 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 cursor-pointer"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
              
              {/* Project Image mapped to the vacant space */}
              {project.image && (
                <div className="absolute inset-x-0 top-0 bottom-[140px] flex justify-center items-end overflow-hidden px-4 pt-8 pointer-events-none">
                  <div className={`relative ${(project.category.includes('Mobile') || project.category.includes('Moblie') || project.category === 'BlockChain') ? 'w-[85%] max-w-[280px]' : 'w-[95%]'} h-[115%] rounded-t-2xl border-t border-l border-r border-white/10 shadow-2xl overflow-hidden group-hover:-translate-y-3 group-hover:scale-[1.02] transition-all duration-700`}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}

              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <p className="text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wider">{project.category}</p>
                  <h4 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-neutral-300 max-w-sm line-clamp-2">{project.description}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
