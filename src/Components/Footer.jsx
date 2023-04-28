import React from 'react';
import './Style.css';
import FooterEnd from './FooterEnd';

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="f-content">
        <div className="one">
          <h1>Company</h1>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">For the Record</a></li>
          </ul>
        </div>
        <div className="one">
          <h1>Communities</h1>
          <ul>
            <li><a href="">For Artists</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Advertising</a></li>
            <li><a href="">Investors</a></li>
            <li><a href="">Vendors</a></li>
          </ul>
        </div>
        <div className="one">
          <h1>Useful links</h1>
          <ul>
            <li><a href="">Support</a></li>
            <li><a href="">Free Mobile App</a></li>
          </ul>
        </div>
        <div className="social-media">
          <a href=""
            ><i className="fa-brands fa-instagram"></i
          ></a>
          <a href=""
            ><i className="fa-brands fa-twitter"></i
          ></a>
          <a href=""
            ><i className="fa-brands fa-facebook"></i
          ></a>
        </div>
      </div>
      <hr />
      <div
        className="CountryCopyright__CountryCopyrightContainer-sc-1k7wleo-0 iFoPDp"
      >
        <div className="CountryCopyright__Copyright-sc-1k7wleo-3 WNASO">
          <p data-encore-id="type" className="Type__TypeElement-sc-goli3j-0 eIvwKg">
            © 2023 Katariya Spotify 
          </p>
        </div>
      </div>
    </div>
    <FooterEnd/>
    </>
  )
}

export default Footer
