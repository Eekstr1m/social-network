const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: state.postData.length + 1,
        message: state.addNewPostText,
        like: 0,
      };

      state.postData.unshift(newPost);
      state.addNewPostText = "";

      return state;

    case UPDATE_NEW_POST_TEXT:
      state.addNewPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({
  type: ADD_NEW_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profilePageReducer;
