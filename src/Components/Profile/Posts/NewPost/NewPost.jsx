import React from "react";
import c from "./NewPost.module.scss";

function NewPost(props) {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
        <button onClick={onAddPost} className="" type="submit">
          Send
        </button>
      </div>
    </div>
  );
}

export default NewPost;
