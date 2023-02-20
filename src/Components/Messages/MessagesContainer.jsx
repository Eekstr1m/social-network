import React from "react";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/Reducers/messagesPage-reducer";
import ActiveDialog from "./ActiveDialog/ActiveDialog";
import Messages from "./Messages";
import UserMessage from "./UserMessage/UserMessage";

function MessagesContainer(props) {
  let state = props.store.getState();

  // Map array
  let arrUserMessage = state.messagesPage.usersData.map((obj) => (
    <UserMessage key={obj.id} id={obj.id} name={obj.name} img={obj.img} />
  ));

  let arrActiveDialog = state.messagesPage.dialogData.map((obj) => (
    <ActiveDialog key={obj.id} msgText={obj.msgText} />
  ));

  let sendMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Messages
      arrUserMessage={arrUserMessage}
      arrActiveDialog={arrActiveDialog}
      addNewMessageText={state.messagesPage.addNewMessageText}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
}

export default MessagesContainer;
