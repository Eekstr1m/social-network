import React from "react";
import { NavLink } from "react-router-dom";
import c from "./UserMessage.module.scss";

function UserMessage(props) {
  return (
    <div className={c.message}>
      <NavLink
        to={`/messages/${props.id}`}
        className={(navData) =>
          navData.isActive
            ? `${c.user__name} ${c.activeUserMessage}`
            : c.user__name
        }
      >
        <div className={c.message__photo}>
          <img src={props.img} className={c.message__img} alt="" />
        </div>
        <div className={c.message__name}>{props.name}</div>
      </NavLink>
    </div>
  );
}

export default UserMessage;
