"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import TiltCard from "@/components/tiltCard.jsx";
import { cardImgLink } from "@/lib/linksObjects.js";
// import pokemonDataFetch from "@/lib/pokemonDataFetch.js";

export default function Cards({ data }) {
  return (
    <motion.div
      initial={{ y: 600, opacity: 0 }}
      transition={{
        duration: 3,
        ease: [0, 0.71, 0.2, 1],
        type: "spring",
        bounce: 0.2,
      }}
      animate={{ y: 0, opacity: 1 }}
      className="relative flex gap-5 py-20 justify-center text-white"
    >
      {cardImgLink.map((item, i) => { 
        return (
          <motion.div
            whilehover={{ x: -100 }}
            initial={{
              x: 0,
              rotate: i * 10,
              transformOrigin: "center",
              zIndex: cardImgLink.length - i,
            }}
            className={`absolute scale-85`}
            key={i}
          >
            <TiltCard
              title="Example"
              description="this is a description example"
              buttonText="try click this"
              image={item.link}
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
