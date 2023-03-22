import React from "react";
import { NavLink } from "react-router-dom";
import userImg from "../../../Assets/userImg.png";
import c from "./UserMessage.module.scss";

function UserMessage({ item }) {
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
        <div className={c.message__name}>{item.userName}</div>
      </NavLink>
    </div>
  );
}

export default UserMessage;
