import React, { useState } from "react";

//Imported Icons:
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoSignIn, GoSignOut } from "react-icons/go";
import {CgMenuGridO} from "react-icons/cg"

//Imported Images:
import logo from "../../assets/air_logo.png"
export const Navbar = () => {
  const [active,setActive]=useState('navBarMenu');

  const showNavBar=()=>{
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar=()=>{
    setActive('navBarMenu')
  }

  //Let us add the background color in second navbar:

  const [bg,setBg]=useState('navBarTwo');
  const setNavbarBg=()=>{
    if(window.scrollY>=10){
      setBg('navBarTwo navbar_with_bg');
    }else{
      setBg('navBarTwo')
    }
    
  }
//When scroll the second navbar color will change
  window.addEventListener('scroll',setNavbarBg)

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
      
      <div className="none flex">
        <li className="flex">
          <BsPhoneVibrate className="icon" /> Support
        </li>
        <li className="flex">
          <AiOutlineGlobal className="icon" /> Languages
        </li>
      </div>

      <div className="atb flex">
        <span>Sign In</span>
        <span>Sign Out</span>
      </div>

      </div>

      <div className={bg}>

        <div className="logoDiv">
          <img src={logo} className="Logo"/>
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offers</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destination</li>
          </ul>
          <button onClick={removeNavBar} className="btn flex btnOne">Contact</button>
          
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon"/>
        </div>
      </div>
    </div>
  );
};
