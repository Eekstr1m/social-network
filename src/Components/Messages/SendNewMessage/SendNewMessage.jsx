import React from "react";
import c from "./SendNewMessage.module.scss";

function SendNewMessage(props) {
  let newDialogElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newDialogElement.current.value;
    props.updateNewMessageText(text);
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
          placeholder="Type message"
        />
      </div>
      <div className={c.newMessage__button}>
        <button
          className={c.newMessage__btn}
          onClick={onSendMessage}
          type="submit"
        >
          Send message
        </button>
      </div>
    </div>
  );
}

export default SendNewMessage;
