import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
 
function Footer() {
    return (
        <div id='footerDiv'>
            <Link to="/" style={{ textDecoration: "none", color: "white"}}><h1>Fun Daily</h1></Link>
            <div id='footerMenuDiv'>
                <h3>커뮤니티</h3>
            </div>
            <div>
                <h3>Contact</h3>
                <p>sschong48@naver.com</p>
            </div>
        </div>
    )
}

export default Footer;