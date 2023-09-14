import Image from "next/image";
import VideoThumb from '@/public/images/hero-image-01.jpg'

import ModalVideo from '@/components/modal-video'

import HomeBgEmail from '../app/src/assets/images/homeBgIronOre.jpg'
import contactus from '../app/src/assets/images/contactus.png'
import '../app/css/Background.module.css'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

     
        {/* Hero content */}
        <div className="relative pt-40 pb-40 md:pt-60 md:pb-16">
         
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-orange-400 pb-12 md:pb-16">
            <h1 data-aos="fade-up">Let's talk you requirement</h1>
            <p className="text-xl text-black mb-8 " data-aos="fade-up" data-aos-delay="200">Mining and Construction Industry is our expertise. Feel free to dicuss</p>
            <div className="text-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-orange-600 hover:bg-orange-700 w-50 " href="#0">
                <Image src={contactus} alt={""} style={{display: 'flex',alignItems:'center',justifyContent: 'center',width: '50px',height:'50px'}}> 
                </Image> Contact us <br></br> (+63) 915 1234567                   </a> 
                
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
               
              </div>
              <div  data-aos="fade-up" data-aos-delay="600">
                <a className="text-orange-400 w-50 " href="#0" style={{display: 'flex',alignItems:'left',justifyContent: 'left',width: '100px',height:'50px'}}>   </a> 
              </div>
            </div>
          </div>
          <ModalVideo
            thumb={HomeBgEmail}
            thumbWidth={500}
            thumbHeight={600}
            thumbAlt="Modal video thumbnail"
            video="/videos/Mining.mp4"
            videoWidth={1920}
            videoHeight={1080} />
            
        </div>
        
      </div>
    </section>
  )
}
