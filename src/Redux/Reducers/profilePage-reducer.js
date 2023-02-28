// const ADD_NEW_POST = "ADD-NEW-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const SET_PROFILE_DATA = "SET-PROFILE-DATA";
// const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

// let initialStore = {
//   postData: [
//     { id: 1, message: "Hello", like: 5 },
//     { id: 2, message: "Ya tut", like: 6 },
//     { id: 3, message: "My post", like: 11 },
//   ],
//   profile: null,
//   isFetching: false,
//   addNewPostText: "",
// };

// const profilePageReducer = (state = initialStore, action) => {
//   let stateCopy;
//   switch (action.type) {
//     case ADD_NEW_POST: {
//       let newPost = {
//         id: state.postData.length + 1,
//         message: state.addNewPostText,
//         like: 0,
//       };

//       stateCopy = structuredClone(state);
//       stateCopy.postData.unshift(newPost);
//       stateCopy.addNewPostText = "";

//       return stateCopy;
//     }

//     case UPDATE_NEW_POST_TEXT: {
//       stateCopy = { ...state };
//       stateCopy.addNewPostText = action.newText;
//       return stateCopy;
//     }

//     case SET_PROFILE_DATA: {
//       return { ...state, profile: action.profile };
//     }

//     case TOGGLE_IS_FETCHING: {
//       return {
//         ...state,
//         isFetching: action.isFetching,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const addNewPostActionCreator = () => ({
//   type: ADD_NEW_POST,
// });

// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });

// export const setProfileDataAC = (profile) => ({
//   type: SET_PROFILE_DATA,
//   profile,
// });

// export const setIsFetchingAC = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });

// export default profilePageReducer;
