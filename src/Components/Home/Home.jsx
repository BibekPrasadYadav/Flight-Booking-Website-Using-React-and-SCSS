import React from 'react'
import aeroplane from '../../assets/takeoffs.png'
import video from '../../assets/sunset.mp4'

export const Home = () => {
  return (
    <div className="home flex container">

      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}
