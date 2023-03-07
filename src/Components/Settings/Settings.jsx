import React from "react";
import { API } from "../../API/api";

function Settings({ setIsChanged }) {
  const onClick = () => {
    API.logout().then((res) => {
      if (res.resultCode === 0) {
        setIsChanged();
      }
    });
  };
  return (
    <div>
      <div>Settings</div>
      <div onClick={onClick}>Log Out</div>
    </div>
  );
}

export default Settings;
