import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
      className='nav_logo'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='Netflix logo'/>
      <img
      className='nav_avatar'
      src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png'
      alt='My avatar'/>
    </div>
  )
}

export default Nav
