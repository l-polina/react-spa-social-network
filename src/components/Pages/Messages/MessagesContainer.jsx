import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs/Dialogs";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../../redux/message-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Messages
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messagesPage={state}
    />
  );
};

export default MessagesContainer;
