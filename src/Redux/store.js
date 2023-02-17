import messagesPageReducer from "./Reducers/messagesPage-reducer";
import profilePageReducer from "./Reducers/profilePage-reducer";
import sidebarLinksReducer from "./Reducers/sidebarLinks-reducer";

let store = {
  _state: {
    // Data Posts
    profilePage: {
      postData: [
        { id: 1, message: "Hello", like: 5 },
        { id: 2, message: "Ya tut", like: 6 },
        { id: 3, message: "My post", like: 11 },
      ],
      addNewPostText: "",
    },

    // Data Messages
    messagesPage: {
      usersData: [
        { id: 1, name: "Vlad", img: "https://place-hold.it/50/871" },
        { id: 2, name: "Andrew", img: "https://place-hold.it/50/571" },
        { id: 3, name: "Dmitri", img: "https://place-hold.it/50/261" },
        { id: 4, name: "Alexandra", img: "https://place-hold.it/50/548" },
      ],
      dialogData: [
        { id: 1, msgText: "Hi" },
        { id: 2, msgText: "How are u?" },
        { id: 3, msgText: "Good" },
      ],
      addNewMessageText: "",
    },

    // Data Sidebar
    sidebarLinks: {
      linkData: [
        { link: "/profile", linkName: "Profile" },
        { link: "/messages", linkName: "Messages" },
        { link: "/news", linkName: "News" },
        { link: "/music", linkName: "Music" },
        { link: "/settings", linkName: "Settings" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State not defined");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );

    this._state.messagesPage = messagesPageReducer(
      this._state.messagesPage,
      action
    );

    this._state.sidebarLinks = sidebarLinksReducer(
      this._state.sidebarLinks,
      action
    );

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
