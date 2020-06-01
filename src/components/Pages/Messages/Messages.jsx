import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {
  let dialogsData = [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
    { id: 4, name: "Name 4" },
  ];

  let dialogsElement = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesData = [
    { id: 1, messages: "Message 1" },
    { id: 2, messages: "Message 2" },
    { id: 3, messages: "Message 3" },
    { id: 4, messages: "Message 4" },
  ];

  let messagesElement = messagesData.map((m) => (
    <Dialogs messages={m.messages} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>
      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
};

export default Messages;
