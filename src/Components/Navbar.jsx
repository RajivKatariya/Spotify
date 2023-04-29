import React from 'react';
import './Style.css';
import {AiFillLeftCircle} from 'react-icons/ai';
import {AiFillRightCircle} from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
    <div className='all-content'>
    <div className='upper'>
            <ul className='left-right'>
              <a href=""><AiFillLeftCircle/></a>
              <a href=""><AiFillRightCircle/></a>
            </ul>
            <ul className='nav-menu'>
              <li><a href="">Premium</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Download</a></li>
            </ul>
            <ul className='auth'>
              <a href="">Sign up</a>
              <button className='login'>Log in</button>
            </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
