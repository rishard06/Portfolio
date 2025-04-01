"use client";

import React, { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { spring } from "motion";

export default function useMousePosition(navRef) {
  console.log(navRef.current);
  // navRef.current.map((item) => console.log(item.current));
  // const [mousePos, setMousePos] = useState({
  //   x: 0,
  //   y: 0,
  // })

  const [isNavLinkHover, setIsNavLinkHover] = useState(false);
  const mouseSize = isNavLinkHover ? 60 : 30;
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mousePosition.x, { damping: 20, stiffness: 300, mass: 0.5 }),
    y: useSpring(mousePosition.y, { damping: 20, stiffness: 300, mass: 0.5 }),
  };

  const handleMouseMove = (event) => {
    // setMousePos({
    //   x: event.clientX,
    //   y: event.clientY,
    // })
    mousePosition.x.set(event.clientX - mouseSize / 2);
    mousePosition.y.set(event.clientY - mouseSize / 2);
  };

  const handleMouseOver = (event) => {
    setIsNavLinkHover(true);
  };

  const handleMouseLeave = (event) => {
    setIsNavLinkHover(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    navRef.current.map((item) => { 
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    })
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return {
    smoothMouse,
    mouseSize,
  };
}
