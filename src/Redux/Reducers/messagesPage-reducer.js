// const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

// let initialStore = {
//   usersData: [
//     { id: 1, name: "Vlad", img: "https://place-hold.it/50/871" },
//     { id: 2, name: "Andrew", img: "https://place-hold.it/50/571" },
//     { id: 3, name: "Dmitri", img: "https://place-hold.it/50/261" },
//     { id: 4, name: "Alexandra", img: "https://place-hold.it/50/548" },
//   ],
//   dialogData: [
//     { id: 1, msgText: "Hi" },
//     { id: 2, msgText: "How are u?" },
//     { id: 3, msgText: "Good" },
//   ],
//   addNewMessageText: "",
// };

// const messagesPageReducer = (state = initialStore, action) => {
//   let stateCopy;

//   switch (action.type) {
//     case ADD_NEW_MESSAGE: {
//       let newMessage = {
//         id: state.dialogData.length + 1,
//         msgText: state.addNewMessageText,
//       };

//       stateCopy = structuredClone(state);
//       stateCopy.dialogData.push(newMessage);
//       stateCopy.addNewMessageText = "";

//       return stateCopy;
//     }

//     case UPDATE_NEW_MESSAGE_TEXT: {
//       stateCopy = { ...state };
//       stateCopy.addNewMessageText = action.newText;
//       return stateCopy;
//     }

//     default:
//       return state;
//   }
// };

// export const addNewMessageActionCreator = () => ({
//   type: ADD_NEW_MESSAGE,
// });

// export const updateNewMessageTextActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newText: text,
// });

// export default messagesPageReducer;
