"use client";

import { motion } from "framer-motion";
import { 
  SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiExpress, 
  SiHtml5, SiCss, SiTailwindcss, SiMongodb, SiSupabase, SiPostgresql, 
  SiFirebase, SiJsonwebtokens, SiGoogle, SiSocketdotio, SiMapbox, 
  SiCloudinary, SiVercel, SiRender, SiGit, SiGithub, SiGithubactions, 
  SiAndroidstudio, SiPostman, SiNpm, SiFigma, 
  SiCanva, SiOpenai, SiAndroid
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { 
  Code, Database, MapPin, MessageSquare, Video, Bell, Wallet, 
  CreditCard, Network, Cpu, Layers, Bot, Repeat, Smartphone, Rocket, 
  Globe, Server, Box, Link, GitBranch, Terminal
} from "lucide-react";
import React from "react";

const iconClass = "w-5 h-5";

const row1 = [
  { name: "TypeScript", icon: <SiTypescript className={`${iconClass} text-blue-500`} /> },
  { name: "JavaScript", icon: <SiJavascript className={`${iconClass} text-yellow-400`} /> },
  { name: "React Native", icon: <SiReact className={`${iconClass} text-cyan-400`} /> },
  { name: "React.js", icon: <SiReact className={`${iconClass} text-cyan-400`} /> },
  { name: "Node.js", icon: <SiNodedotjs className={`${iconClass} text-green-500`} /> },
  { name: "Express.js", icon: <SiExpress className={`${iconClass} text-gray-300`} /> },
  { name: "HTML5", icon: <SiHtml5 className={`${iconClass} text-orange-500`} /> },
  { name: "CSS3", icon: <SiCss className={`${iconClass} text-blue-500`} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className={`${iconClass} text-cyan-400`} /> },
  { name: "MongoDB", icon: <SiMongodb className={`${iconClass} text-green-500`} /> },
  { name: "Supabase", icon: <SiSupabase className={`${iconClass} text-emerald-500`} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className={`${iconClass} text-blue-400`} /> },
  { name: "Firebase", icon: <SiFirebase className={`${iconClass} text-yellow-500`} /> },
  { name: "Firebase Authentication", icon: <SiFirebase className={`${iconClass} text-yellow-500`} /> },
  { name: "Firebase Firestore", icon: <SiFirebase className={`${iconClass} text-yellow-500`} /> },
  { name: "Firebase Realtime Database", icon: <SiFirebase className={`${iconClass} text-yellow-500`} /> },
  { name: "JWT Authentication", icon: <SiJsonwebtokens className={`${iconClass} text-pink-500`} /> },
  { name: "Google OAuth", icon: <SiGoogle className={`${iconClass} text-blue-400`} /> },
  { name: "Google Sign-In", icon: <SiGoogle className={`${iconClass} text-blue-400`} /> },
  { name: "REST APIs", icon: <Link className={`${iconClass} text-purple-400`} /> },
  { name: "LiveKit", icon: <Video className={`${iconClass} text-green-400`} /> },
  { name: "Socket.IO", icon: <SiSocketdotio className={`${iconClass} text-white`} /> },
  { name: "WebSockets", icon: <Globe className={`${iconClass} text-orange-400`} /> },
  { name: "Zustand", icon: <FaReact className={`${iconClass} text-orange-400`} /> },
  { name: "React Context API", icon: <SiReact className={`${iconClass} text-cyan-400`} /> }
];

const row2 = [
  { name: "Mapbox", icon: <SiMapbox className={`${iconClass} text-blue-400`} /> },
  { name: "Google Maps API", icon: <SiGoogle className={`${iconClass} text-green-500`} /> },
  { name: "Google Places API", icon: <SiGoogle className={`${iconClass} text-green-500`} /> },
  { name: "Geolocation API", icon: <MapPin className={`${iconClass} text-red-400`} /> },
  { name: "Firebase Cloud Messaging (FCM)", icon: <SiFirebase className={`${iconClass} text-yellow-500`} /> },
  { name: "Cloudinary", icon: <SiCloudinary className={`${iconClass} text-blue-500`} /> },
  { name: "Vercel", icon: <SiVercel className={`${iconClass} text-white`} /> },
  { name: "Render", icon: <SiRender className={`${iconClass} text-purple-400`} /> },
  { name: "Git", icon: <SiGit className={`${iconClass} text-red-500`} /> },
  { name: "GitHub", icon: <SiGithub className={`${iconClass} text-white`} /> },
  { name: "GitHub Actions", icon: <SiGithubactions className={`${iconClass} text-blue-400`} /> },
  { name: "VS Code", icon: <VscVscode className={`${iconClass} text-blue-500`} /> },
  { name: "Android Studio", icon: <SiAndroidstudio className={`${iconClass} text-green-400`} /> },
  { name: "Postman", icon: <SiPostman className={`${iconClass} text-orange-500`} /> },
  { name: "npm", icon: <SiNpm className={`${iconClass} text-red-500`} /> },
  { name: "Figma", icon: <SiFigma className={`${iconClass} text-pink-400`} /> },
  { name: "Canva", icon: <SiCanva className={`${iconClass} text-blue-400`} /> },
  { name: "ChatGPT", icon: <SiOpenai className={`${iconClass} text-emerald-400`} /> },
  { name: "Claude", icon: <Bot className={`${iconClass} text-orange-300`} /> },
  { name: "Claude Code", icon: <Code className={`${iconClass} text-orange-300`} /> },
  { name: "Cursor AI", icon: <Terminal className={`${iconClass} text-blue-300`} /> },
  { name: "Antigravity", icon: <Rocket className={`${iconClass} text-cyan-400`} /> },
  { name: "GitHub Copilot", icon: <SiGithub className={`${iconClass} text-white`} /> },
  { name: "Prompt Engineering", icon: <MessageSquare className={`${iconClass} text-yellow-400`} /> },
  { name: "Android Development", icon: <SiAndroid className={`${iconClass} text-green-500`} /> },
  { name: "Cross-Platform Mobile Development", icon: <Smartphone className={`${iconClass} text-blue-400`} /> },
  { name: "Full-Stack Development", icon: <Layers className={`${iconClass} text-purple-400`} /> },
  { name: "API Integration", icon: <Link className={`${iconClass} text-blue-400`} /> },
  { name: "Real-Time Chat", icon: <MessageSquare className={`${iconClass} text-green-400`} /> },
  { name: "Live Streaming", icon: <Video className={`${iconClass} text-red-400`} /> },
  { name: "Video Calling", icon: <Video className={`${iconClass} text-blue-400`} /> },
  { name: "Location Tracking", icon: <MapPin className={`${iconClass} text-red-400`} /> },
  { name: "Push Notifications", icon: <Bell className={`${iconClass} text-yellow-400`} /> },
  { name: "Wallet Integration", icon: <Wallet className={`${iconClass} text-orange-400`} /> },
  { name: "Payment Gateway Integration (Cashfree)", icon: <CreditCard className={`${iconClass} text-emerald-400`} /> },
  { name: "CRUD Operations", icon: <Database className={`${iconClass} text-gray-400`} /> },
  { name: "Database Design", icon: <Database className={`${iconClass} text-blue-400`} /> },
  { name: "Data Structures & Algorithms", icon: <GitBranch className={`${iconClass} text-yellow-400`} /> },
  { name: "Object-Oriented Programming (OOP)", icon: <Box className={`${iconClass} text-blue-400`} /> },
  { name: "DBMS", icon: <Server className={`${iconClass} text-purple-400`} /> },
  { name: "Computer Networks", icon: <Network className={`${iconClass} text-green-400`} /> },
  { name: "Operating Systems", icon: <Cpu className={`${iconClass} text-gray-400`} /> },
  { name: "Software Engineering", icon: <Code className={`${iconClass} text-cyan-400`} /> },
  { name: "Agile Development", icon: <Repeat className={`${iconClass} text-orange-400`} /> }
];

const TechBox = ({ text, icon }: { text: string, icon: React.ReactNode }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-6 py-3.5 mx-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default">
    <div className="flex items-center justify-center opacity-90 group-hover/box:opacity-100 transition-opacity">
      {icon}
    </div>
    <span className="text-neutral-200 font-medium whitespace-nowrap">{text}</span>
  </div>
);

export default function TechStack() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 overflow-hidden border-t border-white/5">
      <style>{`
        @keyframes techstack-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes techstack-marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee {
          animation: techstack-marquee 80s linear infinite;
        }
        .animate-marquee-reverse {
          animation: techstack-marquee-reverse 120s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 md:px-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Tech Stack</h2>
          <div className="h-[2px] w-12 bg-emerald-400 rounded-full opacity-80 mb-6"></div>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
            A comprehensive toolkit of languages, frameworks, and tools I use to build robust, scalable, and modern digital experiences.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-8 w-full">
        {/* Subtle fading edges for seamless entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Left to Right */}
        <div className="flex w-full overflow-hidden group">
          <div className="flex shrink-0 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((item, idx) => (
              <TechBox key={`row1-${idx}`} text={item.name} icon={item.icon} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-full overflow-hidden group">
          <div className="flex shrink-0 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((item, idx) => (
              <TechBox key={`row2-${idx}`} text={item.name} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
