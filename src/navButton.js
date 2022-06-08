import React from "react";
import Nav from "./nav";

function NavButton(){
 

    function toggleMenu(){
        document.getElementsByClassName("Ham-Menu")[0].classList.toggle("hidden");
    }



    return <div>

        <button className="menu-btn" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>

        <Nav/>

   
        </div>

    
    
}

export default NavButton;