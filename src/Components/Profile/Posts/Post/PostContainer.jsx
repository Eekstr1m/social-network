import React from "react";
import { connect } from "react-redux";
import PostsList from "../PostsList/PostsList";
import Post from "./Post";

// function PostContainer(props) {
//   // let state = props.store.getState();

//   // let arrPost = state.profilePage.postData.map((obj) => (
//   //   <Post key={obj.id} message={obj.message} like={obj.like} />
//   // ));

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let arrPost = state.profilePage.postData.map((obj) => (
//           <Post key={obj.id} message={obj.message} like={obj.like} />
//         ));

//         return <PostsList arrPost={arrPost} />;
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    arrPost: state.profilePage.postData.map((obj) => (
      <Post key={obj.id} message={obj.message} like={obj.like} />
    )),
  };
};

const PostContainer = connect(mapStateToProps)(PostsList);

export default PostContainer;
