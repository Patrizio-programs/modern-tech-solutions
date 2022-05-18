import React from "react";
import headerImg from "./imgs/header-img.png"
import NavButton from "./navButton";


function Header() {

    return <div>
        <div  className="header-div">
        
        
        <img src={headerImg} alt=""/>
      

            <h1>Modern
            Tech 
            Solutions</h1>

   
        <span className="header-logo">
            <span className="nav-button">
        <NavButton />
        </span>


        </span>

        
    </div>

        <div className="banner-img"></div>
    </div>
    
}


export default Header;