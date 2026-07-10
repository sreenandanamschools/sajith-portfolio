"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxSection({ children, speed = 0.1, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yRange = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const ySpring = useSpring(yRange, { damping: 40, stiffness: 120 });
  
  return (
    <motion.div 
      ref={ref} 
      style={isMobile ? {} : { y: ySpring }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}
