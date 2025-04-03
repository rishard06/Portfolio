"use client";

import React, { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { spring } from "motion";

export default function useMousePosition(navRef) {
  const [isNavLinkHover, setIsNavLinkHover] = useState(false);
  const mouseSize = isNavLinkHover ? 70 : 30;
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mousePosition.x, spring, { damping: 20, stiffness: 300, mass: 0.5 }),
    y: useSpring(mousePosition.y, spring, { damping: 20, stiffness: 300, mass: 0.5 }),
  };

  const handleMouseMove = (event) => {
    mousePosition.x.set(event.clientX - mouseSize / 2);
    mousePosition.y.set(event.clientY - mouseSize / 2);
  };

  const handleMouseOver = (event) => {
    setIsNavLinkHover(true);
    
    // console.log(navRef);
    // const childs = navRef.current.childNodes.forEach((child) => {console.log(child.onmouseover)});
    // childs.forEach((child) => {
    //   console.log(child.onmouseover);
    //   child.addEventListener("mouseover", (event) => {
    //     event.stopPropagation();
    //     event.target.style.cursor = "none";
    //   });
    //   child.addEventListener("mouseleave", (event) => {
    //     event.stopPropagation();
    //     event.target.style.cursor = "none";
    //   });
    // });
    // event.target.style.cursor = "pointer";
  };

  const handleMouseLeave = (event) => {
    setIsNavLinkHover(false);
    console.log("mouse is leave");
  };

  useEffect(() => {
    const currentNavRef = navRef.current;

    window.addEventListener("mousemove", handleMouseMove);
    currentNavRef.addEventListener("mouseover", handleMouseOver);
    currentNavRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      currentNavRef.removeEventListener("mouseover", handleMouseOver);
      currentNavRef.removeEventListener("mouseleave", handleMouseLeave);
    };
  }), [];

  return {
    smoothMouse,
    mouseSize,
    isNavLinkHover,
  };
}
