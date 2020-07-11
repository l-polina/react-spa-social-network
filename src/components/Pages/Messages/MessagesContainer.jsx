import React from "react";
import classes from "./Messages.module.css";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../../redux/message-reducer";
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Messages
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
