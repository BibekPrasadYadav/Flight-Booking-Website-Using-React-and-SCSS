import React,{useEffect} from "react";

//Imported images:
import gridImage from "../../assets/GridImage.png"

//Import AOS:
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Support = () => {
  //UseEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small data-aos='fade-up' data-aos-duration='2500'>travel support</small>
          <h2 data-aos='fade-up' data-aos-duration='3500'>Plan your travel with confidence</h2>
          <p data-aos='fade-up' data-aos-duration='4500'>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2000' className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements from Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along
            the journey to your favourite destinations!</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along
            the journey to your favourite destinations!</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className="number">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along
            the journey to your favourite destinations!</p>
            </div>
          </div>

          <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
            <img src={gridImage} />
          </div>
        </div>

      </div>
    </div>
  );
};
