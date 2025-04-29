"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import TiltCard from "@/components/tiltCard.jsx";
import { cardImgLink } from "@/lib/linksObjects.js";
import { useCursorStore } from "@/lib/store.js";

export default function Cards({ data }) {
  const updateCursorSize = useCursorStore((state) => state.updateCursorSize);
  const resetCursorSize = useCursorStore((state) => state.resetCursorSize);

  const imageMidNum = Math.floor(cardImgLink.length / 2);

  return (
    <motion.div
      initial={{ y: 700 }}
      transition={{
        duration: 3,
        ease: [0, 0.71, 0.2, 1],
        type: "spring",
        bounce: 0.2,
      }}
      animate={{ y: 0 }}
      className="relative flex gap-5 py-20 justify-center text-white"
    >
      {cardImgLink.map((item, i) => {
        return (
          <motion.div
            whileHover={{
              y: -50,
              zIndex: 50,
              transition: {
                delay: 0.2,
                duration: 0.2,
              },
            }}
            initial={{
              y: 0,
              x: 0,
              transition: { duration: 0.4 },
              rotate: i * 5,
              transformOrigin: "center",
              zIndex: cardImgLink.length - i,
            }}
            animate={{
              x: (i - imageMidNum) * 230,
              rotate:
                i === imageMidNum
                  ? 0
                  : i < imageMidNum
                  ? i + -3
                  : i + 1 - imageMidNum,
            }}
            transition={{ ease: "anticipate", duration: 1, delay: 2 }}
            className={`absolute`}
            key={i}
            onMouseOver={() => updateCursorSize(70)}
            onMouseLeave={() => resetCursorSize()}
          >
            <TiltCard
              title="Example"
              description="this is a description example"
              buttonText="try click this"
              image={item.link}
              className="scale-100"
            />
          </motion.div>
        );
      })}
    </motion.div>

    // <motion.div
    //   initial={{ y: 300 }}
    //   transition={{ duration: 1, delay: 1 }}
    //   animate={{ y: 50 }}
    //   className="relative max-w-[200px] flex  justify-center items-center p-4 text-white gap-4"
    // >
    //   {data.results.map((item, i) => {
    //     return (
    //       <motion.div
    //         initial={{ width: "200px" }}
    //         transition={{ duration: 0.2 }}
    //         whileHover={{ width: "300px" }}
    //         className={`ablsolute flex flex-shrink-0 h-60 w-50 z-${
    //           (i + 1) * 10
    //         } gap-6 justify-center items-center bg rounded-3xl shadow-lg shadow-black/50 `}
    //         key={item.name}
    //       >
    //         {/* {item.name} */}
    //       </motion.div>
    //     );
    //   })}
    // </motion.div>
  );
}
