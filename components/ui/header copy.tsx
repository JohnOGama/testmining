"use client";
import React, { useState } from "react";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Navbar from "../navitem/NavBar";

import "./style.css";

import OrcaLogoHeader from "../../app/src/assets/images/OrcaLogoHeader.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "font-awesome/css/font-awesome.min.css";

import { motion } from "framer-motion";
//@ts-ignore
export default function HeaderCopy() {
  const [dropdown, setDropdown] = useState(false);
  const [subMenuAbout, setSubMenuAbout] = useState(false);
  const [subMenuServices, setSubMenuServices] = useState(false);
  const [subMenuCorp, setSubMenuCorp] = useState(false);

  return (
    <div className=" bg-[#08c5d6] h-auto fixed top-0 w-full z-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-center px-5 relative ">
          <Link href="/">
            <Image className="logo" src={OrcaLogoHeader} alt="" height={70} />
          </Link>
          {/* Desktop mode */}
          <div>
            <ul className="hidden lg:flex md:gap-10 text-xl text-white">
              <li className="relative cursor-pointer hover:scale-[1.1] transition-all duration-300">
                Home
              </li>
              <li
                className="relative cursor-pointer hover:scale-[1.1] transition-all duration-300"
                onClick={() => setSubMenuAbout(!subMenuAbout)}
              >
                About Us
                {subMenuAbout && (
                  <div className="flex flex-col   mt-3 absolute bg-white text-black w-[200px] text-base">
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Company Profile
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Mission And Vision
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Core Values
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Organization Chart
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Article of Incorporation and By-Laws
                    </Link>
                  </div>
                )}
              </li>

              <li
                onClick={() => setSubMenuServices(!subMenuServices)}
                className="relative cursor-pointer hover:scale-[1.1] transition-all duration-300"
              >
                Services
                {subMenuServices && (
                  <div className="flex flex-col   mt-3 absolute bg-white text-black w-[200px] text-base">
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Company Profile
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Mission And Vision
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Core Values
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Organization Chart
                    </Link>
                    <Link href="#" className="hover:bg-gray-300 p-3 space-y-3">
                      Article of Incorporation and By-Laws
                    </Link>
                  </div>
                )}
              </li>
              <li
                onClick={() => setSubMenuCorp(!subMenuCorp)}
                className="relative cursor-pointer hover:scale-[1.1] transition-all duration-300"
              >
                Corporate Governance
              </li>
            </ul>
          </div>
          {/* Mobile and tablet mode */}
          {dropdown && (
            <div className="absolute top-[70px] left-0 w-full bg-black lg:hidden p-6">
              <ul className=" space-y-5">
                <li>Home</li>
                <li
                  className="cursor-pointer"
                  onClick={() => setSubMenuAbout(!subMenuAbout)}
                >
                  About Us
                  {subMenuAbout && (
                    <motion.div className="flex flex-col space-y-3 mt-3 ">
                      <Link href="#" className="text-white">
                        Company Profile
                      </Link>
                      <Link href="#" className="text-white">
                        Mission And Vission
                      </Link>
                      <Link href="#" className="text-white">
                        Core Values
                      </Link>
                      <Link href="#" className="text-white">
                        Organization Chart
                      </Link>
                      <Link href="#" className="text-white">
                        Article of Incorporation and By-Laws
                      </Link>
                    </motion.div>
                  )}
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setSubMenuServices(!subMenuServices)}
                >
                  Services
                  {subMenuServices && (
                    <motion.div className="flex flex-col space-y-3 mt-3 ">
                      <Link href="" className="text-white">
                        Mineral Supply
                      </Link>
                      <Link href="#" className="text-white">
                        Waste Management
                      </Link>
                      <Link href="#" className="text-white">
                        Construction
                      </Link>
                    </motion.div>
                  )}
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setSubMenuCorp(!subMenuCorp)}
                >
                  Corporate Governance{" "}
                  {subMenuCorp && (
                    <motion.div className="flex flex-col space-y-3 mt-3 ">
                      <Link href="#" className="text-white">
                        Mineral Supply
                      </Link>
                      <Link href="#" className="text-white">
                        Waste Management
                      </Link>
                      <Link href="#" className="text-white">
                        Construction
                      </Link>
                    </motion.div>
                  )}
                </li>
              </ul>
            </div>
          )}

          <input
            type="checkbox"
            name=""
            id="check"
            className="lg:hidden -mr-2"
            onClick={() => setDropdown(!dropdown)}
          ></input>
          <div className="hamburger-menu-container lg:hidden">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
