import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Navbar from '../navitem/NavBar'

import OrcaLogoHeader from "../../app/src/assets/images/OrcaLogoHeader.png"

export default function Header() {
  return (
    <header className="flex w-full z-30" style={{backgroundColor:'#08c5d6'}}>
      <div className="max-w-6sm mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between h-30">
          {/* Site branding */}
          <div className="shrink-0 mr-1">
            {/* Logo */}
            <Link href="/"  >
              <Image src={OrcaLogoHeader} alt=''/>
            </Link>
           
          </div>
        
        
        </div>
        
      </div>
      <Navbar/>
    </header>
    
  )
}
