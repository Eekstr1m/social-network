import React, { useContext, useEffect, useState } from "react";
import { AuthUserDataContext } from "../../App";
import SideBarItem from "./SideBarItem/SideBarItem";
import c from "./Sidebar.module.scss";

function Sidebar() {
  const { authUserData, isUserAuth } = useContext(AuthUserDataContext);
  const [sidebarLinks, setSidebarLinks] = useState([]);

  useEffect(() => {
    if (isUserAuth) {
      setSidebarLinks([
        { link: `/profile/${authUserData.id}`, linkName: "My profile" },
        { link: "/messages", linkName: "Messages" },
        { link: "/chat", linkName: "Chat" },
        { link: "/users", linkName: "Users" },
        { link: "/settings", linkName: "Settings" },
      ]);
    } else {
      setSidebarLinks([
        { link: "/login", linkName: "Login" },
        { link: "/users", linkName: "Users" },
      ]);
    }
  }, [isUserAuth]);

  return (
    <nav className={c.sidebar}>
      {sidebarLinks.map((obj, index) => (
        <SideBarItem
          key={index}
          link={obj["link"]}
          linkName={obj["linkName"]}
        />
      ))}
    </nav>
  );
}

export default Sidebar;
