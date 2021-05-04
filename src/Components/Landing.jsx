import React from 'react'
import {
     NavLink,    
  } from "react-router-dom";

function Landing(props) {
    return (
        <div className="landing-container" >
            <h1>Super Special Team</h1>
            <h2>Make your hero die for u</h2>

            <NavLink
             to="/login"
             className="button">
                Ingresar
            </NavLink>
            
           
        </div>
    )
}

export default Landing
