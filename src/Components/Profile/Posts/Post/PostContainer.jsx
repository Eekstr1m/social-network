import React from "react";
import PostsList from "../PostsList/PostsList";
import Post from "./Post";

function PostContainer(props) {
  let state = props.store.getState();

  let arrPost = state.profilePage.postData.map((obj) => (
    <Post key={obj.id} message={obj.message} like={obj.like} />
  ));

  return <PostsList arrPost={arrPost} />;
}

export default PostContainer;
