import React,{useEffect} from 'react'
import aeroplane from '../../assets/takeoffshd.png'
import video from '../../assets/sunset.mp4'

//Import AOS:
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Home = () => {

  //UseEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className="home flex container">

      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}
