import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from "../../app/src/assets/images/orca.png"

import Image from "next/image";
import "@/app/css/Background.module.css"

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6sm mx-auto px-6 sm:px-8">
        <div className="flex items-left justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
           <Image className="h-20 mix-blend-multiply" src={logo} alt={""} />
            
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
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
