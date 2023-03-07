import React, { useEffect, useState } from "react";
import c from "./Sidebar.module.scss";
import SideBarItems from "./SideBarItem/SideBarItem";

function Sidebar({ isUserAuth, authUserData }) {
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
      {isUserAuth
        ? sidebarLinks.map((obj, index) => (
            <SideBarItems
              key={index}
              link={obj["link"]}
              linkName={obj["linkName"]}
            />
          ))
        : sidebarLinks.map((obj, index) => (
            <SideBarItems
              key={index}
              link={obj["link"]}
              linkName={obj["linkName"]}
            />
          ))}
    </nav>
  );
}

export default Sidebar;
