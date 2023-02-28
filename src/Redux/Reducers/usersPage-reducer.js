// const FOLLOW_USER = "FOLLOW-USER";
// const UNFOLLOW_USER = "UNFOLLOW-USER";
// const SET_USERS = "SET-USERS";
// const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE";
// const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
// const GET_PAGINATION = "GET-PAGINATION";
// const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

// let initialStore = {
//   usersData: [],
//   totalUsersCount: 0,
//   pageSize: 5,
//   activePage: 1,
//   paginationList: [],
//   isFetching: false,
// };

// const usersPageReducer = (state = initialStore, action) => {
//   switch (action.type) {
//     case FOLLOW_USER: {
//       return {
//         ...state,
//         usersData: state.usersData.map((user) => {
//           if (user.id === action.userId) {
//             return { ...user, followed: true };
//           }
//           return user;
//         }),
//       };
//     }

//     case UNFOLLOW_USER: {
//       return {
//         ...state,
//         usersData: state.usersData.map((user) => {
//           if (user.id === action.userId) {
//             return { ...user, followed: false };
//           }
//           return user;
//         }),
//       };
//     }

//     case SET_USERS: {
//       return {
//         ...state,
//         usersData: action.users,
//       };
//     }

//     case SET_ACTIVE_PAGE: {
//       return {
//         ...state,
//         activePage: action.activePage,
//       };
//     }

//     case SET_TOTAL_USERS_COUNT: {
//       return {
//         ...state,
//         totalUsersCount: action.totalUsersCount,
//       };
//     }

//     case GET_PAGINATION: {
//       const getPagination = (activePage, totalUsersCount, pageSize) => {
//         const offset = 2;
//         const totalPageNumber = Math.ceil(totalUsersCount / pageSize);
//         const offsetNumber =
//           activePage <= offset || activePage > totalPageNumber - offset
//             ? offset
//             : offset - 1;
//         const numbersList = [];
//         const numbersListWithDots = [];

//         if (totalPageNumber <= 1 || totalPageNumber === undefined) return [1];

//         numbersList.push(1);
//         for (
//           let i = activePage - offsetNumber;
//           i <= activePage + offsetNumber;
//           i++
//         ) {
//           if (i < totalPageNumber && i > 1) {
//             numbersList.push(i);
//           }
//         }
//         numbersList.push(totalPageNumber);

//         numbersList.reduce((accumulator, currentValue) => {
//           if (accumulator === 1) {
//             numbersListWithDots.push(accumulator);
//           }
//           if (currentValue - accumulator !== 1) {
//             numbersListWithDots.push("...");
//           }
//           numbersListWithDots.push(currentValue);

//           return currentValue;
//         });

//         return numbersListWithDots;
//       };

//       return {
//         ...state,
//         paginationList: getPagination(
//           state.activePage,
//           state.totalUsersCount,
//           state.pageSize
//         ),
//       };
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

// export const followAC = (userId) => ({
//   type: FOLLOW_USER,
//   userId,
// });

// export const unFollowAC = (userId) => ({
//   type: UNFOLLOW_USER,
//   userId,
// });

// export const setUsersAC = (users) => ({
//   type: SET_USERS,
//   users,
// });

// export const setActivePageAC = (activePage) => ({
//   type: SET_ACTIVE_PAGE,
//   activePage,
// });

// export const setTotalUsersCountAC = (totalUsersCount) => ({
//   type: SET_TOTAL_USERS_COUNT,
//   totalUsersCount,
// });

// export const getPaginationAC = () => ({
//   type: GET_PAGINATION,
// });

// export const setIsFetchingAC = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });

// export default usersPageReducer;
