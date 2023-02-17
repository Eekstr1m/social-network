import c from "./Post.module.scss";
import React from "react";

function Post(props) {
  return (
    <div className={c.post}>
      <div className={c.post__photo}>
        <img
          className={c.post__img}
          src="https://place-hold.it/30/781"
          alt=""
        />
      </div>
      <div className={c.post__content}>
        <div className={c.post__message}>
          <div>{props.message}</div>
          <div>{props.like}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
