import React from "react";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../Redux/state";
import c from "./NewPost.module.scss";

function NewPost(props) {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addNewPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={c.newPost}>
      <div className={c.newPost__title}>What`s new?</div>
      <div className={c.newPost__content}>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          className={c.newPost__textarea}
          value={props.addNewPostText}
          name="newpost"
          placeholder="Type post text"
        />
      </div>
      <div className={c.newPost__send}>
        <button onClick={addPost} className="" type="submit">
          Send
        </button>
      </div>
    </div>
  );
}

export default NewPost;
