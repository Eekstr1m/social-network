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
      <div className={c.header_container}>
        <div className={c.header__name}>
          Connect<span>U</span>
        </div>
        <nav className={c.login__block}>
          {isUserAuth ? (
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
          ) : (
            <NavLink to={"/login"} className={c.login}>
              <div className={c.login_link}>Login</div>
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
