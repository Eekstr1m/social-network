import { rerenderEntireTree } from "../render";

let state = {
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
};

// Post
export let addNewPost = () => {
  let newPost = {
    id: state.profilePage.postData.length + 1,
    message: state.profilePage.addNewPostText,
    like: 0,
  };

  state.profilePage.postData.unshift(newPost);
  state.profilePage.addNewPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.addNewPostText = newText;

  rerenderEntireTree(state);
};

// Messages
export let addNewMessage = () => {
  let newMessage = {
    id: state.messagesPage.dialogData.length + 1,
    msgText: state.messagesPage.addNewMessageText,
  };

  state.messagesPage.dialogData.push(newMessage);
  state.messagesPage.addNewMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.messagesPage.addNewMessageText = newText;

  rerenderEntireTree(state);
};

export default state;
