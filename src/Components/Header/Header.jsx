import c from "./Header.module.scss";
import React from "react";

function Header() {
  return (
    <header className={c.header}>
      <img
        className={c.header__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
        alt=""
      />
    </header>
  );
}

export default Header;
