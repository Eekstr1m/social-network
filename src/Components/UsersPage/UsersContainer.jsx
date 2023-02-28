// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { API } from "../../API/api";
// import {
//   followAC,
//   getPaginationAC,
//   setActivePageAC,
//   setIsFetchingAC,
//   setTotalUsersCountAC,
//   setUsersAC,
//   unFollowAC,
// } from "../../Redux/Reducers/usersPage-reducer";
// import Preloader from "../common/Preloader/Preloader";
// import Users from "./Users";

// function UsersAPI(props) {
//   useEffect(() => {
//     props.toggleIsFetching(true);
//     API.getUsers(props.activePage, props.pageSize).then((data) => {
//       props.toggleIsFetching(false);
//       props.setUsers(data.items);
//       props.setTotalUsersCount(data.totalCount);
//       props.getPagination();
//     });
//   }, []);

//   function onPageChanged(page) {
//     props.setActivePage(page);
//     props.getPagination();
//     props.toggleIsFetching(true);
//     API.getUsers(page, props.pageSize).then((data) => {
//       props.toggleIsFetching(false);
//       props.setUsers(data.items);
//     });
//   }

//   return (
//     <>
//       {props.isFetching ? (
//         <Preloader />
//       ) : (
//         <Users
//           paginationList={props.paginationList}
//           onPageChanged={onPageChanged}
//           activePage={props.activePage}
//           usersData={props.usersData}
//           unfollowUser={props.unfollowUser}
//           followUser={props.followUser}
//         />
//       )}
//     </>
//   );
// }

// let mapStateToProps = (state) => {
//   return {
//     usersData: state.usersPage.usersData,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     pageSize: state.usersPage.pageSize,
//     activePage: state.usersPage.activePage,
//     paginationList: state.usersPage.paginationList,
//     isFetching: state.usersPage.isFetching,
//   };
// };

// let mapDispatchToProps = {
//   followUser: followAC,
//   unfollowUser: unFollowAC,
//   setUsers: setUsersAC,
//   setActivePage: setActivePageAC,
//   setTotalUsersCount: setTotalUsersCountAC,
//   getPagination: getPaginationAC,
//   toggleIsFetching: setIsFetchingAC,
// };

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

// export default UsersContainer;
