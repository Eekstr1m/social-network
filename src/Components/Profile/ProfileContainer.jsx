// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";
// import { API } from "../../API/api";
// import {
//   setIsFetchingAC,
//   setProfileDataAC,
// } from "../../Redux/Reducers/profilePage-reducer";
// import Preloader from "../common/Preloader/Preloader";
// import Profile from "./Profile";

// function ProfileAPI(props) {
//   let { userId } = useParams();

//   useEffect(() => {
//     props.toggleIsFetching(true);
//     if (!userId) {
//       userId = 2;
//     }
//     API.getProfile(userId)
//       .finally(() => props.toggleIsFetching(false))
//       .then((data) => {
//         props.setProfileData(data);
//       });
//   }, []);

//   if (!props.profile) {
//     return <Preloader />;
//   }

//   return (
//     <>
//       {props.isFetching ? (
//         <Preloader />
//       ) : (
//         <Profile {...props} profile={props.profile} />
//       )}
//     </>
//   );
// }

// let mapStateToProps = (state) => {
//   return {
//     profile: state.profilePage.profile,
//     authUserId: state.auth.id,
//     isFetching: state.profilePage.isFetching,
//   };
// };

// let mapDispatchToProps = {
//   setProfileData: setProfileDataAC,
//   toggleIsFetching: setIsFetchingAC,
// };

// const ProfileContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileAPI);

// export default ProfileContainer;
