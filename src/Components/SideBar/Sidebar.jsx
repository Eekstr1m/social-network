import React, { useState } from "react";
import c from "./Sidebar.module.scss";
import SideBarItems from "./SideBarItem/SideBarItem";

function Sidebar(props) {
  const [sidebarAuthLinks] = useState([
    { link: "/myprofile", linkName: "My profile" },
    { link: "/messages", linkName: "Messages" },
    { link: "/news", linkName: "News" },
    { link: "/music", linkName: "Music" },
    { link: "/users", linkName: "Users" },
    { link: "/settings", linkName: "Settings" },
  ]);

  const [sidebarNoAuthLinks] = useState([
    { link: "/login", linkName: "Login" },
    { link: "/users", linkName: "Users" },
  ]);

  let arrLink;

  if (props.isUserAuth) {
    arrLink = sidebarAuthLinks.map((obj, index) => (
      <SideBarItems key={index} link={obj["link"]} linkName={obj["linkName"]} />
    ));
  } else {
    arrLink = sidebarNoAuthLinks.map((obj, index) => (
      <SideBarItems key={index} link={obj["link"]} linkName={obj["linkName"]} />
    ));
  }

  return <nav className={c.sidebar}>{arrLink}</nav>;
}

export default Sidebar;
