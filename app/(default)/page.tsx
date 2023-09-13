export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

import styles from '../app/css/Background.module.css'
import background from "../src/assets/images/homeDefaultBg.png"
//'../../src/assets/images/features-03-image-03.png'

export default function Home() {

  const myStyle={
    backgroundImage:
    `url(${background.src})`,
    //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,
    height:'100vh',
    
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

  return (
    
    <div  style= {myStyle}>
      <div>
      <Hero />
      </div>
      
   
      {/*

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
