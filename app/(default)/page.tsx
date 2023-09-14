export const metadata = {
  title: 'Test Project',
  description: 'Page Description Here',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

import styles from '../app/css/Background.module.css'
import background from "../../app/src/assets/images/homeDefaultBg.jpg"
// "../src/assets/images/homeDefaultBg.png" 
//'../../src/assets/images/features-03-image-03.png'

export default function Home() {

  const videoStyle={
    backgroundImage:
    `url(${background.src})`,
    //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,
    height:'80vh',
    
    marginTop:'-70px',
    fontSize:'50px',
   // backgroundSize: 'cover',
    backgroundSize: '1600px 1200px',
    backgroundRepeat: 'no-repeat',
  };

  return (
    
    <div  >
      <Hero />
      
   
      {/*
      style= {videoStyle}
sdfdsf
       style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
      }} 
   <Features /> 
      `url(${background})
      <br></br>
       
      <Zigzag />
      <Testimonials />
      <Newsletter />
          */}
            </div>

   
    
  )
}
