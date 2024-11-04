import "./Profile_Dropdown.css"
import exampleImg from "../exampleImg.jpg"
import {Profile_Dropdown_Data} from "../data"

import React, { useState } from 'react'

const Profile_Dropdown = () => {
    const[open, setOpen] = useState(false)

  return (
    <div>
        {/* profile */}
        <div 
        className="trigger__menu"
        onClick={()=>{setOpen(!open)}}>
            <img src={exampleImg} alt="" width={100}/>
        </div>

        {/* profile dropdown */}
        <div
        className={`dropdown__menu ${open? 'active': 'inactive'}`}>
            <h3>Woong Huh<br/><span>wohu8292@colorado.edu</span></h3>

            <ul>
                {Profile_Dropdown_Data.map((element)=>(
                    <a href="/">
                        <li className="dropdown__item">
                            <div className="logo">{element.img}</div>
                            {element.text}
                        </li>
                    </a>
                ))}
            </ul>
            
        </div>
    </div>
  )
}

export default Profile_Dropdown