import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {
  let dialogsElement = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = props.state.messagesData.map((m) => (
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
