"use client";

import React, { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { useCursorStore } from "../store.js";

export default function useMousePosition() {
  const { size } = useCursorStore();

  const mousePosition = { 
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mousePosition.x, { stiffness: 100, damping: 10, mass: 0.5 }),
    y: useSpring(mousePosition.y, { stiffness: 100, damping: 10, mass: 0.5 }),
  };

  const handleMouseMove = (event) => {
    mousePosition.x.set(event.clientX - size / 2);
    mousePosition.y.set(event.clientY - size / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }), [];

  return {
    smoothMouse,
  };
}
