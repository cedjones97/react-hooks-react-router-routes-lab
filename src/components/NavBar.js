import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function NavBar() {
  return (
    <div>
      <NavLink 
      to='/'
      exact
      style={linkStyles}
      activeStyle={{
        background: "blue",
      }}
      >
        Home
      </NavLink>
      <NavLink 
      to='/movies'
      exact
      style={linkStyles}
      activeStyle={{
        background: "blue",
      }}
      >
        Movies
      </NavLink>
      <NavLink 
      to='/directors'
      exact
      style={linkStyles}
      activeStyle={{
        background: "blue",
      }}
      >
        Directors
      </NavLink>
      <NavLink 
      to='/actors'
      exact
      style={linkStyles}
      activeStyle={{
        background: "blue",
      }}
      >
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
