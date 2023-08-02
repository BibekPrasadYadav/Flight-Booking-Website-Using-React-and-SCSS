import React from "react";

import paris from "../../assets/paris.jpg";
import dubai from "../../assets/dubai.jpg";
import london from "../../assets/london.jpg";
import newYork from "../../assets/new-york.jpg";
import user from "../../assets/UserAvatar.png";
export const Travelers = () => {
  const travelers = [
    {
      id: 1,
      destinationImage: paris,
      travelerImage: user,
      travelerName: "Ajay",
      socialLink: "@ajay999",
    },
    {
      id: 2,
      destinationImage: london,
      travelerImage: user,
      travelerName: "Rohit",
      socialLink: "@rohit45",
    },
    {
      id: 3,
      destinationImage: newYork,
      travelerImage: user,
      travelerName: "Akshay",
      socialLink: "@akshay88",
    },
    {
      id: 1,
      destinationImage: dubai,
      travelerImage: user,
      travelerName: "Ram",
      socialLink: "@ram78",
    },
  ];
  return (
    <div className="travelers section container">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} alt="" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
