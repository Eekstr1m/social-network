import React, { useEffect, useState } from "react";
import { API } from "../../../API/api";
import User from "./User/User";

function MessagesDialogs({ usersData }) {
  return (
    <div>
      {usersData && usersData.map((item) => <User key={item.id} item={item} />)}
    </div>
  );
}

export default MessagesDialogs;
