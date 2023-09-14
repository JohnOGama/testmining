import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

import HomeBgEmail from '../app/src/assets/images/homeBgIronOre.jpg'
import '../app/css/Background.module.css'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

     
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
       
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-orange-400 pb-12 md:pb-16">
            <h1 className="boxexploreFont" data-aos="fade-up">Let's talk you requirement</h1>
            <p className="text-xl text-gray-400 mb-8 text-center" data-aos="fade-up" data-aos-delay="200">Mining and Construction Industry is our expertise. <br></br> Feel free to dicuss</p>
            <div className="text-xl mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Contact us </a>
              </div>
              
            </div>
          </div>
          <ModalVideo
            thumb={HomeBgEmail}
            thumbWidth={500}
            thumbHeight={600}
            thumbAlt="Modal video thumbnail"
            video="/videos/mining.mp4"
            videoWidth={1920}
            videoHeight={1080} />


        </div>

      </div>
    </section>
  )
}
