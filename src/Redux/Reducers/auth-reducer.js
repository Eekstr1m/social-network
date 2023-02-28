// const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
// const SET_AUTH_DATA = "SET_AUTH_DATA";

// let initialStore = {
//   id: null,
//   email: null,
//   login: null,
//   photo: null,
//   isAuth: false,
// };

// const authReducer = (state = initialStore, action) => {
//   switch (action.type) {
//     case SET_AUTH_USER_DATA: {
//       return { ...state, ...action.data, isAuth: true };
//     }

//     case SET_AUTH_DATA: {
//       return { ...state, ...action.photo };
//     }

//     default:
//       return state;
//   }
// };

// export const setAuthUserDataAC = (id, login, email) => ({
//   type: SET_AUTH_USER_DATA,
//   data: { id, login, email },
// });

// export const setAuthDataAC = (photo) => ({
//   type: SET_AUTH_DATA,
//   photo,
// });

// export default authReducer;
