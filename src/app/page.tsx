"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative w-full bg-[#121212]">
      {/* 500vh Scrollytelling Container */}
      <div ref={containerRef} className="relative w-full h-[500vh]">
        
        {/* Sticky wrapper */}
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
        
      </div>

      {/* Content below the scrollytelling section */}
      <About />
      <Projects />
      <TechStack />
      <Contact />
      
    </main>
  );
}
