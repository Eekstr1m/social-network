// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { API } from "../../API/api";
// import {
//   setAuthDataAC,
//   setAuthUserDataAC,
// } from "../../Redux/Reducers/auth-reducer";
// import {
//   setIsFetchingAC,
//   setProfileDataAC,
// } from "../../Redux/Reducers/profilePage-reducer";
// import Header from "./Header";

// function HeaderAPI(props) {
//   useEffect(() => {
//     API.getAuthMe().then((data) => {
//       if (data.resultCode === 0) {
//         //console.log(data.data);
//         let { id, login, email } = data.data;
//         props.setAuthUserData(id, login, email);

//         API.getProfile(data.data.id).then((data) => {
//           props.setAuthData(data.photos.large);
//         });
//       }
//     });
//   }, []);

//   function onAuthProfile() {
//     props.toggleIsFetching(true);
//     API.getProfile(props.id)
//       .finally(() => props.toggleIsFetching(false))
//       .then((data) => {
//         props.setProfileData(data);
//       });
//   }

//   return <Header {...props} onAuthProfile={onAuthProfile} />;
// }

// let mapStateToProps = (state) => {
//   return {
//     id: state.auth.id,
//     email: state.auth.email,
//     login: state.auth.login,
//     photo: state.auth.photo,
//     isAuth: state.auth.isAuth,
//   };
// };

// let mapDispatchToProps = {
//   setAuthUserData: setAuthUserDataAC,
//   setProfileData: setProfileDataAC,
//   setAuthData: setAuthDataAC,
//   toggleIsFetching: setIsFetchingAC,
// };

// const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI);

// export default HeaderContainer;
