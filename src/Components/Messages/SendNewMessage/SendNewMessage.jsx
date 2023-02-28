import React, { useState } from "react";
import c from "./SendNewMessage.module.scss";

function SendNewMessage(props) {
  const [tempInputMsg, setTempInputMsg] = useState("");
  return (
    <div className={c.newMessage}>
      <div className={c.newMessage__text}>
        <textarea
          onChange={(e) => {
            setTempInputMsg(e.currentTarget.value);
          }}
          className={c.newMessage__textarea}
          value={tempInputMsg}
          name="newMessage"
          placeholder="Type message"
        />
      </div>
      <div className={c.newMessage__button}>
        <button
          className={c.newMessage__btn}
          onClick={() => {
            setTempInputMsg("");
            props.setInputMsg(tempInputMsg);
          }}
          type="submit"
        >
          Send message
        </button>
      </div>
    </div>
  );
}

export default SendNewMessage;
