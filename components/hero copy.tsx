import VideoThumb from '@/public/images/hero-image-01.jpg'

import HomeBgEmail from '../app/src/assets/images/homeBgIronOre.jpg'
import ModalVideo from '@/components/modal-video'


export default function Hero() {
  return (
    <section >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-10" style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            marginTop: '-60px'
          }}  data-aos="fade-up" data-aos-delay="400"  >
         {/* Hero content 
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" >
        <h1 className="h1 mb-4">Let's talk </h1>
        </div>*/}
           <ModalVideo
              thumb={HomeBgEmail}
              thumbWidth={500}
              thumbHeight={600}
              thumbAlt="Modal video thumbnail"
              video="/videos/Mining.mp4"
              videoWidth={1920}
              videoHeight={1080} />
             
        </div>
        <a className='boxexploreFont'  href="#0">Explore here</a>
        <div>
       
      </div>
 
    </div>
    </section>
  )
}
