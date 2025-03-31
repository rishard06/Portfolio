"use client"

import React, { useState, useEffect } from 'react'
import { useMotionValue, useSpring } from 'motion/react'
import { spring } from 'motion'

export default function useMousePosition() {
  // const [mousePos, setMousePos] = useState({
  //   x: 0,
  //   y: 0,
  // })

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothMouse = {
    x: useSpring(mousePosition.x, spring, { stiffness: 100, mass: 0.5 }),
    y: useSpring(mousePosition.y, spring, { stiffness: 100, mass: 0.5 }),
  }

  const handleMouseMove = (event) => {
    // setMousePos({
    //   x: event.clientX,
    //   y: event.clientY,
    // })
    
    mousePosition.x.set(event.clientX - 20 / 2)
    mousePosition.y.set(event.clientY - 20 / 2)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return smoothMouse
}