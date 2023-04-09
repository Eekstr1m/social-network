import React, { useEffect, useState } from "react";
import { API } from "../../../API/api";
import c from "./MessagesDialogs.module.scss";
import User from "./User/User";

function MessagesDialogs({ usersData }) {
  return (
    <div className={c.dialogs}>
      {usersData && usersData.map((item) => <User key={item.id} item={item} />)}
    </div>
  );
}

export default MessagesDialogs;
