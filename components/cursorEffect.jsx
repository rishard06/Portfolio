"use client";

import React, { useEffect, useState } from "react";
import useMousePosition from "@/libs/hooks/useMousePosition.js";
import { motion, useMotionValue } from "motion/react";

function CursorEffect({ navRef }) {
  // console.log(navRef)
  // const everyRef = navRef

  const { smoothMouse, mouseSize } = useMousePosition(navRef);
  
  return (
    <motion.div 
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{
        width: mouseSize,
        height: mouseSize,
        borderRadius: 10,
      }}
      className="fixed w-10 h-10 bg-none border-2 border-[#FFB703] rounded-full"
    >
    </motion.div>
  )
}

export default CursorEffect;
