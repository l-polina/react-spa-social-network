import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let postsData = [
  { id: 1, message: "Hi,how are you?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
  { id: 3, message: "Hi,how are you?", likesCount: 12 },
  { id: 4, message: "It's my first post", likesCount: 11 },
];

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

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
