import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Navbar from '../navitem/NavBar'

import OrcaLogoHeader from "../../app/src/assets/images/OrcaLogoHeader.png"

export default function Header() {
  return (
    <header className="flex z-30" style={{backgroundColor:'#08c5d6'}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={OrcaLogoHeader} alt=''/>
            </Link>
          </div>
          <Navbar/>
          {/* Desktop navigation
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links 
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-black hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
             
            </ul>
          </nav>
             <MobileMenu />
 */} 
       

        </div>
      </div>
    </header>
  )
}
