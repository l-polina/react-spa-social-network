import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs/Dialogs";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../../redux/message-reducer";

const Messages = (props) => {
  let state = props.messagesPage;

  let dialogsElement = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = state.messagesData.map((m) => (
    <Dialogs messages={m.messages} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>
      <div className={classes.messages}>{messagesElement}</div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
