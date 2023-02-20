import React from "react";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../Redux/Reducers/profilePage-reducer";
import NewPost from "./NewPost";

function NewPostContainer(props) {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  };

  let postChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <NewPost
      addPost={addPost}
      updateNewPostText={postChange}
      addNewPostText={state.profilePage.addNewPostText}
    />
  );
}

export default NewPostContainer;
