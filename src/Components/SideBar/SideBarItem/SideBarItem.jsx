import React from "react";
import { NavLink } from "react-router-dom";
import c from "./SideBarItem.module.scss";

function SideBarItem(props) {
  return (
    <div className={c.item}>
      <NavLink
        to={props.link}
        className={({ isActive }) =>
          isActive ? `${c.item__link} ${c.activeLink}` : c.item__link
        }
      >
        {props.linkName}
      </NavLink>
    </div>
  );
}

export default SideBarItem;
