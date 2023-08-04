import React,{useEffect} from "react";

import { BiPhoneCall } from "react-icons/bi";
//Imported Images:
import gridImage from "../../assets/loungeGrid.png";

//Import AOS:
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Lounge = () => {

  //UseEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img data-aos='fade-left' data-aos-duration='2500' src={gridImage} alt="" />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid">
              <span className="gridTitle">Chaffeur-drive service</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <button data-aos='fade-down' data-aos-duration='4500' className="btn flex">
              <div className="icon">
                <BiPhoneCall />
              </div>
              Call Us Today For Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
