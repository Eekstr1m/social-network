import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { API } from "./API/api";
import "./App.scss";
//Pages
import Preloader from "./Components/common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
const Messages = React.lazy(() => import("./Components/Messages/Messages"));
const Music = React.lazy(() => import("./Components/Music/Music"));
const News = React.lazy(() => import("./Components/News/News"));
const NotFound = React.lazy(() => import("./Components/NotFound/NotFound"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const Users = React.lazy(() => import("./Components/UsersPage/Users"));
const Profile = React.lazy(() => import("./Components/Profile/Profile"));
const Login = React.lazy(() => import("./Components/Login/Login"));

function App(props) {
  const [authUserData, setAuthUserData] = useState(null);
  const [isUserAuth, setIsUserAuth] = useState(false);

  useEffect(() => {
    API.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        setAuthUserData(data.data);
        setIsUserAuth(true);
      }
    });
  }, []);

  const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
      if (!isUserAuth) return <Navigate to={`/login`} />;
      return <Component {...props} />;
    }
    return RedirectComponent;
  };

  const withRedirectToProfile = (Component) => {
    function RedirectComponent(props) {
      if (isUserAuth) return <Navigate to={`/profile/${authUserData.id}`} />;
      return <Component {...props} />;
    }
    return RedirectComponent;
  };

  const MessagesComponent = withAuthRedirect(Messages);
  const NewsComponent = withAuthRedirect(News);
  const MusicComponent = withAuthRedirect(Music);
  const SettingsComponent = withAuthRedirect(Settings);

  const RedirectToProfile = withRedirectToProfile(Login);

  return (
    <div className="app-wrapper">
      <Header isUserAuth={isUserAuth} authUserData={authUserData} />
      <Sidebar isUserAuth={isUserAuth} />
      <div className="app-wrapper__content">
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="" element={<RedirectToProfile />} />
            <Route path="/profile">
              <Route
                path=":userId"
                element={
                  <Profile
                    isUserAuth={isUserAuth}
                    authUserData={authUserData}
                  />
                }
              />
              <Route path="" element={<RedirectToProfile />} />
            </Route>
            <Route path="/myprofile" element={<RedirectToProfile />} />
            <Route path="/messages/*" element={<MessagesComponent />} />
            <Route path="/news" element={<NewsComponent />} />
            <Route path="/music" element={<MusicComponent />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<SettingsComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
