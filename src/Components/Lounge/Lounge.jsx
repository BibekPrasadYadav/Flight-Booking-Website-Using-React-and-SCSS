import React from "react";

import { BiPhoneCall } from "react-icons/bi";
//Imported Images:
import gridImage from "../../assets/loungeGrid.png";
export const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={gridImage} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chaffeur-drive service</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call us from your phone and book a flight ticket to
                one of your favourite destinations.
              </p>
            </div>

            <button className="btn flex">
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
