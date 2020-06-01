import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return <div className={classes.dialog}>{props.messages}</div>;
};

export default Dialogs;
