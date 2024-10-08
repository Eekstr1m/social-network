import React, {
  createContext,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { API } from "./API/api";
import "./App.scss";
//Pages
import Preloader from "./Components/common/Preloader/Preloader";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";

const Messages = React.lazy(() => import("./Components/Messages/Messages"));
const Chat = React.lazy(() => import("./Components/Chat/Chat"));
const NotFound = React.lazy(() => import("./Components/NotFound/NotFound"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const Users = React.lazy(() => import("./Components/UsersPage/Users"));
const Profile = React.lazy(() => import("./Components/Profile/Profile"));
const Login = React.lazy(() => import("./Components/Login/Login"));

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

export const AuthUserDataContext = createContext(null);

function App() {
  const [initialization, setInitialization] = useState(false);

  const [authUserData, setAuthUserData] = useState(null);
  const [isUserAuth, setIsUserAuth] = useState(false);

  const [isChanged, setIsChanged] = useToggle();

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.getAuthMe();
      if (data.resultCode === 0) {
        setAuthUserData(data.data);
        setIsUserAuth(true);
      } else {
        setIsUserAuth(false);
        setAuthUserData(null);
      }
      setInitialization(true);
    };

    fetchData();
  }, [isChanged]);

  const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
      if (isUserAuth) return <Component {...props} />;
      return <Navigate to={`/login`} />;
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

  const withLoginRedirect = () => {
    function RedirectComponent() {
      if (isUserAuth) {
        return <Navigate to={`/profile/${authUserData.id}`} />;
      }
      return <Navigate to={`/login`} />;
    }
    return RedirectComponent;
  };

  const RedirectToLogin = withLoginRedirect();

  const MessagesComponent = withAuthRedirect(Messages);
  const ChatComponent = withAuthRedirect(Chat);
  const SettingsComponent = withAuthRedirect(Settings);

  const RedirectToProfile = withRedirectToProfile(Login);

  return (
    <div className="app-wrapper">
      {initialization ? (
        <>
          <AuthUserDataContext.Provider
            value={{ authUserData, isUserAuth, setIsChanged }}
          >
            <Header />

            <div className="app-wrapper__content">
              <Sidebar />
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route path="" element={<RedirectToLogin />} />
                  <Route path="/profile">
                    <Route path=":userId" element={<Profile />} />
                    <Route path="" element={<RedirectToLogin />} />
                  </Route>
                  <Route path="/messages">
                    <Route path=":dialogId" element={<MessagesComponent />} />
                    <Route path="" element={<MessagesComponent />} />
                  </Route>
                  <Route path="/chat" element={<ChatComponent />} />
                  <Route path="/users">
                    <Route path=":aPage" element={<Users />} />
                    <Route path="" element={<Navigate to={`/users/1`} />} />
                  </Route>
                  <Route path="/settings" element={<SettingsComponent />} />
                  <Route path="/login" element={<RedirectToProfile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </AuthUserDataContext.Provider>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;
