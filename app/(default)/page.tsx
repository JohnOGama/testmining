export const metadata = {
  title: 'Test Project',
  description: 'Page Description Here',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

import background from "../../app/src/assets/images/homeDefaultBg.jpg"
// "../src/assets/images/homeDefaultBg.png" 
//'../../src/assets/images/features-03-image-03.png'

export default function Home() {


  const backgroundImgStyle={
    backgroundImage:
    `url(${background.src})`,
    //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,
   
    
    marginTop:'-70px',
    //fontSize:'50px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    innerHeight: '100vh',
    innerWidth: '100%'
    
  };

  return (
    <>
      <div  className="w-full z-50"  style={backgroundImgStyle}>
        <div  style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
          }} >
            <Hero /> 
           
        </div>

      </div>
      <Features />
      <Zigzag />
      <br></br>
      <br></br>
          <Testimonials />
         
         
      {/*
         <Features /> 
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
  
</>
   
    
  )
}
