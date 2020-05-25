import React from "react";
import classes from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return <div className={classes.dialog}>{props.messages}</div>;
};

const Messages = (props) => {
  let dialogsData = [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
    { id: 4, name: "Name 4" },
  ];

  let messagesData = [
    { id: 1, messages: "Message 1" },
    { id: 2, messages: "Message 2" },
    { id: 3, messages: "Message 3" },
    { id: 4, messages: "Message 4" },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={classes.messages}>
        <Dialogs messages={messagesData[0].messages} />
        <Dialogs messages={messagesData[1].messages} />
        <Dialogs messages={messagesData[2].messages} />
        <Dialogs messages={messagesData[3].messages} />
      </div>
    </div>
  );
};

export default Messages;
