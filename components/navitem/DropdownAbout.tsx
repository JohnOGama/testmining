import React, { useState } from "react";
import { aboutDropdown } from "./NavItem";
//import { Link } from "react-router-dom";
import Link from "next/link";
import "./DropdownAbout.css";

function DropdownAbout() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "about-submenu active" : "about-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {aboutDropdown.map((item) => {
          {
            console.log(item.cName);
          }
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownAbout;
