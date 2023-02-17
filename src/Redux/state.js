const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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

  // Post
  // _addNewPost() {
  //   let newPost = {
  //     id: this._state.profilePage.postData.length + 1,
  //     message: this._state.profilePage.addNewPostText,
  //     like: 0,
  //   };

  //   this._state.profilePage.postData.unshift(newPost);
  //   this._state.profilePage.addNewPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // _updateNewPostText(newText) {
  //   this._state.profilePage.addNewPostText = newText;

  //   this._callSubscriber(this._state);
  // },

  // // Message
  // _addNewMessage() {
  //   let newMessage = {
  //     id: this._state.messagesPage.dialogData.length + 1,
  //     msgText: this._state.messagesPage.addNewMessageText,
  //   };

  //   this._state.messagesPage.dialogData.push(newMessage);
  //   this._state.messagesPage.addNewMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // _updateNewMessageText(newText) {
  //   this._state.messagesPage.addNewMessageText = newText;

  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_NEW_POST) {
      let newPost = {
        id: this._state.profilePage.postData.length + 1,
        message: this._state.profilePage.addNewPostText,
        like: 0,
      };

      this._state.profilePage.postData.unshift(newPost);
      this._state.profilePage.addNewPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.addNewPostText = action.newText;

      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_MESSAGE) {
      let newMessage = {
        id: this._state.messagesPage.dialogData.length + 1,
        msgText: this._state.messagesPage.addNewMessageText,
      };

      this._state.messagesPage.dialogData.push(newMessage);
      this._state.messagesPage.addNewMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.addNewMessageText = action.newText;

      this._callSubscriber(this._state);
    }
  },
};

export const addNewPostActionCreator = () => ({
  type: ADD_NEW_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

window.store = store;

export default store;
