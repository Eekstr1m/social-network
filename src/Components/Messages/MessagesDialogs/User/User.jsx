import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API } from "../../../../API/api";
import userImg from "../../../../Assets/userImg.png";
import c from "./User.module.scss";

const lastActivity = (lastUserActivityDate) => {
  let now = new Date();
  let date = new Date(lastUserActivityDate);

  const dayOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  let hour = date.getHours() + 2;
  hour = hour < 10 ? `0${hour}` : `${hour}`;

  let min = date.getMinutes();
  min = min < 10 ? `0${min}` : `${min}`;

  let time = `${hour}:${min}`;

  if (now.getDay() !== date.getDay() || now.getDate() !== date.getDate()) {
    time = `${dayOfWeek[date.getDay()]}`;
  }

  return time;
};

function User({ item }) {
  const [lastMessage, setLastMessage] = useState("");

  // useEffect(() => {
  //   if (item.id) {
  //     API.getLastSendedMessage(item.id).then((data) => {
  //       if (data.totalCount > 0) {
  //         setLastMessage(data.items[0].body);
  //       }
  //     });
  //   }
  // }, [item.id]);

  return (
    <div className={c.message}>
      <NavLink
        to={`/messages/${item.id}`}
        className={(navData) =>
          navData.isActive
            ? `${c.user__name} ${c.activeUserMessage}`
            : c.user__name
        }
      >
        <div className={c.message__photo}>
          <img
            src={item.photos.small || userImg}
            className={c.message__img}
            alt=""
          />
        </div>
        <div className={c.message__name}>
          <div className={c.message__name}>{item.userName}</div>
          <div className={c.last__message}>{lastMessage}</div>
        </div>
        <div className={c.message__info}>
          <div className={c.message__time}>
            {lastActivity(item.lastDialogActivityDate)}
          </div>
          {item.hasNewMessages && (
            <div className={c.new__message}>{item.newMessagesCount}</div>
          )}
        </div>
      </NavLink>
    </div>
  );
}

export default User;
