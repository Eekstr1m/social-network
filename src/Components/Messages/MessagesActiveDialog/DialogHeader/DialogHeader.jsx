import React from "react";
import { useParams } from "react-router-dom";
import userImg from "../../../../Assets/userImg.png";
import c from "./DialogHeader.module.scss";

const lastActivity = (lastUserActivityDate) => {
  let now = new Date();
  let date = new Date(lastUserActivityDate);

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = date.getHours() + 2;
  hour = hour < 10 ? `0${hour}` : `${hour}`;

  let min = date.getMinutes();
  min = min < 10 ? `0${min}` : `${min}`;

  let time = `${hour}:${min}`;

  if (now.getDay() !== date.getDay() || now.getDate() !== date.getDate()) {
    time = `${dayOfWeek[date.getDay()]} ${time}`;
  }

  return time;
};

export default function DialogHeader({ usersData }) {
  let { dialogId } = useParams();

  let usersDataFilter = usersData.filter((i) =>
    i.id === +dialogId ? i.id : null
  );

  return (
    <div>
      {usersDataFilter.map((user) => (
        <Header key={user.id} user={user} />
      ))}
    </div>
  );
}

function Header({ user }) {
  const lastAct = lastActivity(user.lastUserActivityDate);

  return (
    <div className={c.header_box}>
      <div className={c.header}>
        <div className={c.photo_box}>
          <img className={c.photo} src={user.photos.small || userImg} alt="" />
        </div>
        <div className={c.userInfo_box}>
          <div className={c.userInfo_name}>{user.userName}</div>
          <div className={c.userInfo_date}>{lastAct}</div>
        </div>
      </div>
    </div>
  );
}
