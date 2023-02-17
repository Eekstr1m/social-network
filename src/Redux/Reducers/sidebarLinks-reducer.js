let initialStore = {
  linkData: [
    { link: "/profile", linkName: "Profile" },
    { link: "/messages", linkName: "Messages" },
    { link: "/news", linkName: "News" },
    { link: "/music", linkName: "Music" },
    { link: "/settings", linkName: "Settings" },
  ],
};

const sidebarLinksReducer = (state = initialStore, action) => {
  return state;
};

export default sidebarLinksReducer;
