"use client";

import React, { useEffect, useState } from "react";
import useMousePosition from "@/libs/hooks/useMousePosition.js";
import { motion, useMotionValue } from "motion/react";

function CursorEffect({ navRef }) {
  const { smoothMouse, mouseSize, isNavLinkHover } = useMousePosition(navRef); 
  
  return (
    <motion.div 
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{
        width: mouseSize,
        height: mouseSize,
        background: isNavLinkHover ? "color-mix(in oklab, #FFB703 80%, transparent)" : "",
      }}
      className="fixed w-10 h-10 border-2 border-primary/30 rounded-full pointer-events-none"
    >
    </motion.div>
  )
}

export default CursorEffect;
