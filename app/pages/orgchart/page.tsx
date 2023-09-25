export const metadata = {
    title: 'Mission and Vision',
    description: 'Missin and Vision of Company',
  }
  
  import Link from 'next/link'
  import background from "../../src/assets/images/OrgChart.jpg"

  
  export default function OrgChart() {
  
    const backgroundImgStyle={
      backgroundImage:
     `url(${background.src})`,
      marginTop:'10px',
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
     
    };
  

    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6"    >
          <div className="pt-10 pb-12 md:pt-10 md:pb-20"  >
  
          <div className="pt-10 pb-12 md:pt-40 md:pb-30"  style={backgroundImgStyle}>
          </div>

          </div>
        </div>
      </section>
    )
  }
  