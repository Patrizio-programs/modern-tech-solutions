import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    
    


    return <div>

        <nav className="clearfix">

            <ul className={"nav-ul Ham-Menu hidden"}  > 

                <li><Link to="/">Home</Link></li>

                <li><Link to="/Services">Services</Link></li>
                
                <li><Link to="/Contact">Contact</Link></li>

                

                            
            </ul>
        </nav>
    </div>
}

export default Nav;