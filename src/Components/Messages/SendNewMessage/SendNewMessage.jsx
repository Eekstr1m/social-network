import React from "react";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../Redux/state";
import c from "./SendNewMessage.module.scss";

function SendNewMessage(props) {
  let newDialogElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newDialogElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={c.newMessage}>
      <div className={c.newMessage__text}>
        <textarea
          ref={newDialogElement}
          onChange={onMessageChange}
          className={c.newMessage__textarea}
          value={props.addNewMessageText}
          name="newpost"
          placeholder="Type post text"
        />
      </div>
      <div className={c.newMessage__button}>
        <button
          className={c.newMessage__btn}
          onClick={sendMessage}
          type="submit"
        >
          Send message
        </button>
      </div>
    </div>
  );
}

export default SendNewMessage;
