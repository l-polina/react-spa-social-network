import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>Friends</a>
      </div>
      <div>
        <a>Images</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Videos</a>
      </div>
    </nav>
  );
};

export default Navbar;
