"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
  numFrames?: number;
}

export default function ScrollyCanvas({ scrollYProgress, numFrames = 132 }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < numFrames; i++) {
      const img = new Image();
      // frame_000_delay-0.052s.webp
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.052s.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
    
    // Draw first frame once loaded
    loadedImages[0].onload = () => {
      renderFrame(0, loadedImages);
    };
  }, [numFrames]);

  const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = imgArray[index];
    if (!img || !img.complete) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual size in memory (scaled to account for extra pixel density)
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Normalize coordinate system to use css pixels
    ctx.scale(dpr, dpr);

    // object-fit: cover math
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync scroll to frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Calculate current frame index (0 to numFrames - 1)
    const frameIndex = Math.min(
      numFrames - 1,
      Math.max(0, Math.floor(latest * numFrames))
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex, images));
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const currentProgress = scrollYProgress.get();
      const frameIndex = Math.min(
        numFrames - 1,
        Math.max(0, Math.floor(currentProgress * numFrames))
      );
      renderFrame(frameIndex, images);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, numFrames, scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
