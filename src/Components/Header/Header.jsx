import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import c from "./Header.module.scss";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className={c.header}>
      <img
        className={c.header__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
        alt=""
      />
      <div className={c.login__block}>
        {props.isUserAuth ? (
          <div
            onClick={() => navigate(`/profile/${props.authUserData.id}`)}
            className={c.login}
          >
            {props.authUserData.login}
          </div>
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

// <NavLink
//             onClick={() => navigate("/login")}
//             //to={`/profile/${props.authUserData.id}`}
//             className={c.loginLink}
//           >
//             <div onClick={} className={c.login}>{props.authUserData.login}</div>
//           </NavLink>
