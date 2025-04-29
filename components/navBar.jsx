"use client";

import React, { memo, useRef } from "react";
import Link from "next/link.js";
import { spring, motion } from "motion/react";
import { navValues } from "@/lib/linksObjects.js";
import CursorEffect from "@/components/cursorEffect.jsx";
import { useCursorStore } from "@/lib/store.js";

function NavBar() {
  const updateCursorSize = useCursorStore((state) => state.updateCursorSize);
  const resetCursorSize = useCursorStore((state) => state.resetCursorSize);

  return (
    <div className="flex justify-center items-center p-4 text-white">
      <motion.nav
        className="fixed z-50 top-2 bg-gray-50/30 overflow-hidden whitespace-nowrap flex flex-row gap-6 px-8 py-2 dark:bg-black/50 backdrop-blur-3xl rounded-full shadow-lg shadow-black/50"
        onMouseOver={() => updateCursorSize(70)}
        onMouseLeave={() => resetCursorSize()}
      >
        {navValues.map((item) => (
          <motion.div
            initial="initial"
            whileHover="hovered"
            transition="transitions"
            className="relative flex h-12 w-auto rounded-full px-3 font-semibold"
            key={item.name}
          >
            <motion.div
              className="pointer-events-none"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
                transition: { type: spring, stiffness: 300, damping: 20 },
              }}
            >
              <Link
                className="w-full h-full flex items-center"
                href={item.link}
              >
                {item.name}
              </Link>
            </motion.div>

            <motion.div
              className="absolute inset-0 h-12 w-auto px-3 font-semibold"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
                transitions: { type: spring, stiffness: 300, damping: 20 },
              }}
            >
              <Link
                className="w-full h-full flex items-center"
                href={item.link}
              >
                {item.name}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.nav>

      <CursorEffect />
    </div>
  );
}

export default NavBar;
