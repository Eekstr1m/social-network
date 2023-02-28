import React, { useState } from "react";
import c from "./NewPost.module.scss";

function NewPost(props) {
  const [tempInputMsg, setTempInputMsg] = useState("");

  return (
    <div className={c.newPost}>
      <div className={c.newPost__title}>What`s new?</div>
      <div className={c.newPost__content}>
        <textarea
          onChange={(e) => {
            setTempInputMsg(e.currentTarget.value);
          }}
          className={c.newPost__textarea}
          value={tempInputMsg}
          name="newpost"
          placeholder="Type post text"
        />
      </div>
      <div className={c.newPost__send}>
        <button
          onClick={() => {
            setTempInputMsg("");
            props.setInputMsg(tempInputMsg);
          }}
          className=""
          type="submit"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default NewPost;
