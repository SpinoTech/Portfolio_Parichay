import "./NavbarStyle.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// for animated Hamburger styled button

import { Sling as Hamburger } from 'hamburger-react'

export default function Navbar() {
    // setting the state properties
    const [click, setClick] = useState(false);
    const handleClick=()=>setClick(!click);

    const[color,setColor]=useState(false);
    const change_nav_color=()=>{
        // window.scrollY is used to check the scrolling rate ,,if the rate >=100 then the action is done
        if(window.scrollY>=100) setColor(true);
        else setColor(false);
    }
    document.addEventListener("scroll",change_nav_color);

    return (
        <div className={color?"header header-scroll":"header"}>
            <Link to="/">
                <h2>Protfolio</h2>
            </Link>

            <ul className={click ? "navlinks active":"navlinks"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Project">Projects</Link></li>
                {/* <li><Link to="/Contact">Contact</Link></li> */}
            </ul>
            <div className="hamburger_manu" onClick={handleClick}>
                {/* from react icon we take that hambergar manu */}
                {click ? (<Hamburger size={ 25 } color="#4FD1C5" duration={0.8} direction="right"/>) : (<Hamburger size={ 25 } color="#4FD1C5" duration={0.8} direction="right"/>)}
                
                
                {}
            </div>
        </div>
    )
}
