import React from "react";
import c from "./Sidebar.module.scss";
import SideBarItems from "./SideBarItem/SideBarItem";

function Sidebar(props) {
  let arrLink = props.arrLink.map((obj, index) => (
    <SideBarItems key={index} link={obj["link"]} linkName={obj["linkName"]} />
  ));

  return <nav className={c.sidebar}>{arrLink}</nav>;
}

export default Sidebar;
