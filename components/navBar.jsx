import React from "react";
import Link from "next/link.js";
import { navValues } from "@/libs/linksObjects.js";

function NavBar() {  
  return (
    <div>
      <nav className="flex justify-center items-center p-4 text-white bg-lightBlue">
        <ul className="flex space-x-10">
          {navValues.map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="hover:text-gray-400 hover:border-b-2 border-[#FFB703] transition duration-300 ease-in-out">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
