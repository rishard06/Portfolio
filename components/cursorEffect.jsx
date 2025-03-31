"use client";

import React, { useEffect, useState } from "react";
import useMousePosition from "@/libs/hooks/useMousePosition.js";
import { motion, useMotionValue } from "motion/react";

function CursorEffect() {
  const { x, y } = useMousePosition();
  

  // console.log
  return (
    <motion.div 
      style={{ left: x, top: y }}
      className="fixed w-10 h-10 bg-none border-2 border-[#FFB703] rounded-full"
    >
    </motion.div>
  )
}

export default CursorEffect;
