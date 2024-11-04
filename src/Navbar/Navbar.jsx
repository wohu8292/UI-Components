import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
    const[active, setActive]=useState("nav__menu")
    const[toggleIcon, setToggleIcon]=useState("nav__toggler")

  return (
    <nav className='nav'>
        <a href="/" className='nav__brand'>Site Name</a>

        <ul className={active}>
            <a href="/" className='nav__link'><li className='nav__item'>Home</li></a>
            <a href="/" className='nav__link'><li className='nav__item'>About</li></a>
            <a href="/" className='nav__link'><li className='nav__item'>Skills</li></a>
            <a href="/" className='nav__link'><li className='nav__item'>Portfolio</li></a>
            <a href="/" className='nav__link'><li className='nav__item'>Contact</li></a>
        </ul>

        <div 
        className={toggleIcon} 
        onClick={()=>{
            active==="nav__menu" ? setActive("nav__menu nav__active"): setActive("nav__menu")
            toggleIcon==="nav__toggler" ? setToggleIcon("nav__toggler toggle"): setToggleIcon("nav__toggler")
            }}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>
  )
}

export default Navbar