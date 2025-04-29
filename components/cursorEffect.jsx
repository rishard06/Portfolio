"use client";

import React, { useEffect, useState } from "react";
import useMousePosition from "@/lib/hooks/useMousePosition.js";
import { motion, useMotionValue } from "motion/react";
import { useCursorStore } from "@/lib/store.js";

function CursorEffect() {
  const { smoothMouse } = useMousePosition();
  const { size } = useCursorStore();

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{
        width: size,
        height: size,
      }}
      className="z-[100] fixed w-10 h-10 border-2 border-yellows rounded-full pointer-events-none"
    >

    </motion.div>
  );
}

export default CursorEffect;
