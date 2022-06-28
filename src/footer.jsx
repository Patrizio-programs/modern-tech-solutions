import React from "react";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";




function Footer() {

    return <div>

        <footer>

            <h3>Modern Tech Solutions</h3>

            <div>&copy; 2022 All rights reserved</div>
             
             <br />

            <div className="social">
                <FaFacebook />
                <AiOutlineInstagram />
            </div>
        </footer>
    </div>
}

export default Footer;