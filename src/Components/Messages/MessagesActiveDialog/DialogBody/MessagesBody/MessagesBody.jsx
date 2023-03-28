import React from "react";
import c from "./MessagesBody.module.scss";

export default function MessagesBody({ item, authUserData }) {
  let date = new Date(item.addedAt);

  let hour = date.getHours() + 2;
  hour = hour < 10 ? `0${hour}` : `${hour}`;

  let min = date.getMinutes();
  min = min < 10 ? `0${min}` : `${min}`;

  let sendedTime = `${hour}:${min}`;

  return (
    <div
      className={
        authUserData.id === item.senderId
          ? `${c.message} ${c.myMessage}`
          : `${c.message}`
      }
    >
      <div className={c.message__wrapper}>
        <div className={c.message__content}>
          <span>{item.body}</span>
          <span className={c.time}>{sendedTime}</span>
        </div>
      </div>
    </div>
  );
}
