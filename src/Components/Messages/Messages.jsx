import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API/api";
import ActiveDialog from "./ActiveDialog/ActiveDialog";
import c from "./Messages.module.scss";
import SendNewMessage from "./SendNewMessage/SendNewMessage";
import UserMessage from "./UserMessage/UserMessage";

function Messages() {
  let { dialogId } = useParams();
  const [inputMsg, setInputMsg] = useState("");

  const [isFetching, setIsFetching] = useState(false);

  const [dialogData, setDialogData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    API.getDialogs().then((data) => setUsersData(data));
  }, []);

  useEffect(() => {
    if (dialogId) {
      API.getMessages(dialogId).then((data) => {
        setDialogData(data.items);
      });
    }
  }, [dialogId]);

  useEffect(() => {
    if (inputMsg) {
      let copy = structuredClone(dialogData);

      API.getLastSendedMessage(dialogId).then((data) => {
        copy.push(data.items[0]);
        setDialogData(copy);
      });
    }

    return () => {
      setInputMsg("");
    };
  }, [inputMsg]);

  return (
    <div className={c.messages}>
      <div className={c.message}>
        {usersData &&
          usersData.map((item) => <UserMessage key={item.id} item={item} />)}
      </div>
      {dialogId && (
        <div className={c.dialog}>
          <div className={c.dialog__messages}>
            {dialogData &&
              dialogData.map((item) => (
                <ActiveDialog key={item.id} msgText={item.body} />
              ))}
          </div>
          {console.log(dialogData)}
          <SendNewMessage setInputMsg={setInputMsg} />
        </div>
      )}
    </div>
  );
}

export default Messages;
