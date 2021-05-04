import React from 'react'
import {    NavLink      } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="nav  mt-5">
            <div className="btn-group">
            <NavLink  to="/" 
                        className="btn "
                        activeClassName="active"> Landing </NavLink>
            <NavLink  to="/home" 
                        className="btn"
                        activeClassName="active"
                        /* onClick={chequeoToken('home')} */ > Inicio </NavLink>
            <NavLink  to="/login" 
                        className="btn "
                        activeClassName="active"> Login </NavLink>
            <NavLink  to="/buscador" 
                        className="btn "
                        activeClassName="active"
                        /* onClick={chequeoToken('buscador')} */> Buscador </NavLink>
            </div>
      </div>
     );
}
 
export default Nav;