const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const messagesPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessage = {
        id: state.dialogData.length + 1,
        msgText: state.addNewMessageText,
      };

      state.dialogData.push(newMessage);
      state.addNewMessageText = "";

      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.addNewMessageText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default messagesPageReducer;
