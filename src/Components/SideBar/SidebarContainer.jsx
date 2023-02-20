import React from "react";
import Sidebar from "./Sidebar";

function SidebarContainer(props) {
  let state = props.store.getState();
  let arrLink = state.sidebarLinks.linkData;

  return <Sidebar arrLink={arrLink} />;
}

export default SidebarContainer;
