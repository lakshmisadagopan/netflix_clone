import React, { useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const NavBar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('navdark')
      }else{
        navRef.current.classList.remove('navdark')
      }
    })
  },[]);
  
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar_left">
        <img src={logo} alt="logo"/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={search_icon} alt="search" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="search" className='icons'/>
        <div className="navbar_profile">
          <img src={profile_img} alt="" className='profile'/>
          <img src={caret_icon} alt=""/>
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
