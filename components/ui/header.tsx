import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from "../../app/src/assets/images/OrcaLogoHeader.png"

import Image from "next/image";
import "@/app/css/Background.module.css"

export default function Header() {
  return (
    <header className="absolute w-50 z-30">
      <div className="max-w-8sm mx-auto px-2 sm:px-6">
        <div className="flex items-center h-30">

          {/* Site branding  sac*/}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
           <Image src={logo} alt={""} style={{display: 'flex'}}/>
              
              
            </Link>
           
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
              {/*
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>

              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  Sign up
                </Link>
              </li>
              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  SUSTAINABILITY
                </Link>
              </li>
  */}
              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  CORPORATE GOVERNANCE
                </Link>
              </li>
              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  CORPORATE GOVERNANCE
                </Link>
              </li>
              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  COMPANY DISCLOSURE
                </Link>
              </li>
              <li>
                <Link href="/signup" className=" text-black hover:text-orange-600 ml-4">
                  INVESTOR RELATIONS
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
