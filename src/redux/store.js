import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi,how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Hi,how are you?", likesCount: 12 },
        { id: 4, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "it-kamasutra.com",
    },

    messagesPage: {
      dialogsData: [
        { id: 1, name: "Name 1" },
        { id: 2, name: "Name 2" },
        { id: 3, name: "Name 3" },
        { id: 4, name: "Name 4" },
      ],
      messagesData: [
        { id: 1, messages: "Message 1" },
        { id: 2, messages: "Message 2" },
        { id: 3, messages: "Message 3" },
        { id: 4, messages: "Message 4" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
