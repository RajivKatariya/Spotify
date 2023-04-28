import React from 'react';
import './Style.css'
import { SidebarData } from './SidebarData'
import {FiGlobe} from 'react-icons/fi';
import Navbar from './Navbar';
import FooterEnd from './FooterEnd';
import Music from './Music';
import Footer from './Footer';

const Sidebar = () => {
  return (
    <>
    <div className='container'>
    <div className='sidebar'>
        <a href=""><img src='asstes/Spotify_Logo_CMYK_Black.png' alt="" /></a>
        <ul className='SidebarList'>
            {SidebarData.map((val,key)=>{
              return(
                <li key={key} className='row' id={window.location.pathname== val.link ? "active" : ""} onClick={()=>{window.location.pathname=val.link;}}>
                   <div id="icon">{val.icon}</div>
                   <div id="title">{val.title}</div>
                </li>
              )
            })}
        </ul>
    <div className='side-menu'>
          <ul>
            <li><a href="">Legal</a></li>
            <li><a href="">Privacy Center</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">About Ads</a></li>
            <li><a href="">Cookies</a></li>
          </ul>
    </div>
    <div className='english'>
    <a href="" className='laguage'><FiGlobe/>English</a>
    </div>
    </div>
    <Navbar/>
    </div>
    {/* <FooterEnd/> */}
    </>
  )
}

export default Sidebar
