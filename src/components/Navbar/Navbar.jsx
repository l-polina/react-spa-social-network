import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/news">News</NavLink>
      </div>
      <div>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div>
        <NavLink to="/friends">Friends</NavLink>
      </div>
      <div>
        <NavLink to="/images">Images</NavLink>
      </div>
      <div>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink to="/videos">Videos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
