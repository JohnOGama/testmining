import React, { useState } from "react";
import { governanceDropdown } from "./NavItem";
//import { Link } from "react-router-dom";
import Link from 'next/link'
import "./DropdownProduct.css";

function DropdownProduct() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>

      <ul
        className={dropdown ?  "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {
            governanceDropdown.map((item) => {
              
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
            })
          
       }
      
      </ul>
    </>
  );
}

export default DropdownProduct;
