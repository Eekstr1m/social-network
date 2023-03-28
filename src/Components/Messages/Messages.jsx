import React, { useContext, useEffect, useState } from "react";
import { API } from "../../API/api";
import { AuthUserDataContext } from "../../App";
import Preloader from "../common/Preloader/Preloader";
import c from "./Messages.module.scss";
import MessagesActiveDialog from "./MessagesActiveDialog/MessagesActiveDialog";
import MessagesDialogs from "./MessagesDialogs/MessagesDialogs";

function Messages() {
  const { authUserData } = useContext(AuthUserDataContext);

  const [isFetching, setIsFetching] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    API.getDialogs().then((data) => {
      setUsersData(data);
      setIsFetching(false);
    });
  }, []);

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={c.messages}>
          <MessagesDialogs usersData={usersData} />
          <MessagesActiveDialog
            usersData={usersData}
            authUserData={authUserData}
          />
        </div>
      )}
    </>
  );
}

export default Messages;
