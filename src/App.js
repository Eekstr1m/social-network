import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Messages from "./Components/Messages/Messages";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import Sidebar from "./Components/SideBar/Sidebar";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar state={props.state.sidebarLinks} />
      <div className="app-wrapper__content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/messages/*"
            element={
              <Messages
                state={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
