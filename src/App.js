import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import SidebarContainer from "./Components/SideBar/SidebarContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <SidebarContainer store={props.store} />
      <div className="app-wrapper__content">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route
            path="/messages/*"
            element={<MessagesContainer store={props.store} />}
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
