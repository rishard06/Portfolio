"use client";

import React, { memo, useRef } from "react";
import Link from "next/link.js";
import { navValues } from "@/libs/linksObjects.js";
import CursorEffect from "@/components/cursorEffect.jsx";

function NavBar() {
  const navRef = useRef(null);

  return (
    <div
      className="flex justify-center items-center p-4 text-white"
    >
      <nav 
        ref={navRef}
        className="flex flex-row gap-6 px-8 rounded-full shadow-lg shadow-primary/50 bg-[#023047]"
      >
        {navValues.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex h-14 w-14 gap-6 justify-center items-center"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <CursorEffect navRef={navRef} />
    </div>
  );
}

export default NavBar;
