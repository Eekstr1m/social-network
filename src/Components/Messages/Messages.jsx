import React from "react";
import c from "./Messages.module.scss";
import SendNewMessage from "./SendNewMessage/SendNewMessage";

function Messages(props) {
  return (
    <div className={c.messages}>
      <div className={c.message}>{props.arrUserMessage}</div>
      <div className={c.dialog}>
        <div className={c.dialog__messages}>{props.arrActiveDialog}</div>
        <SendNewMessage
          addNewMessageText={props.addNewMessageText}
          updateNewMessageText={props.updateNewMessageText}
          sendMessage={props.sendMessage}
        />
      </div>
    </div>
  );
}

export default Messages;
