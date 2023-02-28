import React, { useEffect, useState } from "react";
import ActiveDialog from "./ActiveDialog/ActiveDialog";
import c from "./Messages.module.scss";
import SendNewMessage from "./SendNewMessage/SendNewMessage";
import UserMessage from "./UserMessage/UserMessage";

function Messages(props) {
  const [inputMsg, setInputMsg] = useState("");

  const [dialogData, setDialogData] = useState([
    { id: 1, msgText: "Hi" },
    { id: 2, msgText: "How are u?" },
    { id: 3, msgText: "Good" },
  ]);
  const [usersData, setUsersData] = useState([
    { id: 1, name: "Vlad", img: "https://place-hold.it/50/871" },
    { id: 2, name: "Andrew", img: "https://place-hold.it/50/571" },
    { id: 3, name: "Dmitri", img: "https://place-hold.it/50/261" },
    { id: 4, name: "Alexandra", img: "https://place-hold.it/50/548" },
  ]);

  useEffect(() => {
    let copy = structuredClone(dialogData);
    copy.push({ id: dialogData.length + 1, msgText: inputMsg });

    setDialogData(copy);

    return () => {
      setInputMsg("");
    };
  }, [inputMsg]);

  return (
    <div className={c.messages}>
      <div className={c.message}>
        {usersData.map((item) => (
          <UserMessage
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
          />
        ))}
      </div>
      <div className={c.dialog}>
        <div className={c.dialog__messages}>
          {dialogData.map((item) => (
            <ActiveDialog key={item.id} msgText={item.msgText} />
          ))}
        </div>

        <SendNewMessage setInputMsg={setInputMsg} />
      </div>
    </div>
  );
}

export default Messages;
