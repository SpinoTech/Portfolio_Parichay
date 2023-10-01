import "./NavbarStyle.css";
import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
// for animated Hamburger styled button

import { Sling as Hamburger } from 'hamburger-react'

export default function Navbar() {
    // setting the state properties
    const [click, setClick] = useState(false);
    const handleClick=()=>setClick(!click);

    // getting the location where i navigating
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

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
                <li><Link to="/" className={splitLocation[1]===""&&"activeNav"}>Home</Link></li>
                <li><Link to="/About" className={splitLocation[1]==="About"&&"activeNav"}>About</Link></li>
                <li><Link to="/Project" className={splitLocation[1]==="Project"&&"activeNav"}>Projects</Link></li>
                <li><a href="https://drive.google.com/file/d/13P0iF8a-qUczwUNqDYvdPVy25pmw63EK/view?usp=sharing">Resume</a></li>
                <a id="chatting" href="//api.whatsapp.com/send?phone=9735692626&text=Hi parichay ! I am a visitor of your portfolio ."><img src="https://images.unsplash.com/photo-1633354931133-27ac1ee5d853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt=""/></a>
            </ul>
            <div className="hamburger_manu" onClick={handleClick}>
                {/* from react icon we take that hambergar manu */}
                {click ? (<Hamburger size={ 25 } color="#4FD1C5" duration={0.8} direction="right"/>) : (<Hamburger size={ 25 } color="#4FD1C5" duration={0.8} direction="right"/>)}
                
                
                {}
            </div>
        </div>
    )
}
