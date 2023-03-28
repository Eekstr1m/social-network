import React, { useContext, useEffect, useState } from "react";
import { AuthUserDataContext } from "../../App";
import c from "./Sidebar.module.scss";
import SideBarItem from "./SideBarItem/SideBarItem";

function Sidebar() {
  const { authUserData, isUserAuth } = useContext(AuthUserDataContext);
  const [sidebarLinks, setSidebarLinks] = useState([]);

  useEffect(() => {
    if (isUserAuth) {
      setSidebarLinks([
        { link: `/profile/${authUserData.id}`, linkName: "My profile" },
        { link: "/messages", linkName: "Messages" },
        { link: "/news", linkName: "News" },
        { link: "/music", linkName: "Music" },
        { link: "/users", linkName: "Users" },
        { link: "/settings", linkName: "Settings" },
      ]);
    } else {
      setSidebarLinks([
        { link: "/login", linkName: "Login" },
        { link: "/users", linkName: "Users" },
      ]);
    }
  }, [authUserData.id, isUserAuth]);

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
