import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerItem}>
        <div className={classes.logo}>logo</div>
        <div className={classes.search}>search</div>
        <div className={classes.list}>drop-down list</div>
      </div>
    </header>
  );
};

export default Header;
