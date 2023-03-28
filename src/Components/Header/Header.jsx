import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { API } from "../../API/api";
import { AuthUserDataContext } from "../../App";
import c from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();
  const { authUserData, isUserAuth, setIsChanged } =
    useContext(AuthUserDataContext);

  const onLogOut = () => {
    API.logout().then((res) => {
      if (res.resultCode === 0) {
        setIsChanged();
      }
    });
  };

  return (
    <header className={c.header}>
      <img
        className={c.header__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
        alt=""
      />
      <div className={c.login__block}>
        {isUserAuth ? (
          <nav className={c.nav}>
            <ul className={c.nav_list}>
              <li className={c.nav_item}>
                <div className={c.nav_link}>{authUserData.login}</div>

                <ul className={c.subNav}>
                  <li
                    onClick={() => navigate(`/profile/${authUserData.id}`)}
                    className={c.subNav_item}
                  >
                    My Profile
                  </li>
                  <li onClick={onLogOut} className={c.subNav_item}>
                    Log Out
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        ) : (
          <NavLink to={"/login"} className={c.login}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
