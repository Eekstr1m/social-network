import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../API/api";
import c from "./SendNewMessage.module.scss";

function SendNewMessage(props) {
  let { dialogId } = useParams();

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
            console.log(tempInputMsg.trim());
            API.sendMessage(+dialogId, tempInputMsg.trim()).then((data) => {
              if (data.resultCode === 0) {
                props.setInputMsg(tempInputMsg);
              }
            }); // resultCode 0 available
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
