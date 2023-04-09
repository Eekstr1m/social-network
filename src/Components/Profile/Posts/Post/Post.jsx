import React from "react";
import c from "./Post.module.scss";

function Post({ userName, message, like }) {
  return (
    <>
      <div className={c.post}>
        <div className={c.post__photo}>
          <img
            className={c.post__img}
            src="https://place-hold.it/30/781"
            alt=""
          />
        </div>
        <div className={c.post__content}>
          <div className={c.content__userName}>{userName}</div>
          <div className={c.content__message}>{message}</div>
          {/* <div className={c.content__more}>Load more</div> */}
        </div>
        <div className={c.post__info}>
          <div className={c.info__like}>{like}</div>
          <div className={c.info__icon}>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
