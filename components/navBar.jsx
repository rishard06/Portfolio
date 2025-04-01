"use client";

import React, { memo, useRef } from "react";
import Link from "next/link.js";
import { navValues } from "@/libs/linksObjects.js";
import CursorEffect from "@/components/cursorEffect.jsx";

function NavBar() {
  const navRef = useRef([]);

  return (
    <div>
      <nav className="flex justify-center items-center z-10 p-4 text-white bg-lightBlue">
        {navValues.map((item, index) => (
          <div 
            key={item.name}
            ref={(el) => {navRef.current[index] = el;}}
            className="flex h-14 w-14 gap-6 justify-center items-center hover:cursor-pointer"
          >
            
            <Link
              href={item.link}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>

      <CursorEffect navRef={navRef} />
    </div>
  );
}

export default NavBar;
