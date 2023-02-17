import React from "react";
import ActiveDialog from "./ActiveDialog/ActiveDialog";
import c from "./Messages.module.scss";
import SendNewMessage from "./SendNewMessage/SendNewMessage";
import UserMessage from "./UserMessage/UserMessage";

function Messages(props) {
  // Map array
  let arrUSerMessage = props.state.usersData.map((obj) => (
    <UserMessage key={obj.id} id={obj.id} name={obj.name} img={obj.img} />
  ));

  let arrActiveDialog = props.state.dialogData.map((obj) => (
    <ActiveDialog key={obj.id} msgText={obj.msgText} />
  ));

  return (
    <div className={c.messages}>
      <div className={c.message}>{arrUSerMessage}</div>
      <div className={c.dialog}>
        <div className={c.dialog__messages}>{arrActiveDialog}</div>
        <SendNewMessage
          dispatch={props.dispatch}
          addNewMessageText={props.state.addNewMessageText}
        />
      </div>
    </div>
  );
}

export default Messages;
