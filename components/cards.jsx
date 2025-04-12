"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import TiltCard from "@/components/tiltCard.jsx";
// import pokemonDataFetch from "@/lib/pokemonDataFetch.js";

export default function Cards({ data }) {
  return (
    <div className="flex justify-center items-center gap-6 p-4 text-white">
      <TiltCard
        title="Example"
        description="this is a description example"
        buttonText="try click this"
        image="/bg.jpg"
      />

      <TiltCard
        title="Example"
        description="this is a description example"
        buttonText="try click this"
        image="/noisygradient02.jpg"
        />

      <TiltCard
        title="Example"
        description="this is a description example"
        buttonText="try click this"
        image="/black-bg.jpg"
      />
    </div>
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
