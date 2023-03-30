import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthUserDataContext } from "../../App";
import userImage from "./../../Assets/userImg.png";
import c from "./Chat.module.scss";

// const ws = new WebSocket(
//   "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
// );

function Chat() {
  const { authUserData } = useContext(AuthUserDataContext);

  const [wsChannel, setWsChannel] = useState(null);

  useEffect(() => {
    let ws;
    const closeHandler = () => {
      console.log("CLOSE WS");
      setTimeout(createChannel, 3000);
    };

    function createChannel() {
      if (ws) {
        ws.removeEventListener("close", closeHandler);
        ws.close();
      }
      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.addEventListener("close", closeHandler);
      setWsChannel(ws);
    }

    createChannel();

    return () => {
      ws.removeEventListener("close", closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div className={c.chat}>
      <Messages wsChannel={wsChannel} />
      <SendMessage wsChannel={wsChannel} />
    </div>
  );
}

export default Chat;

function Messages({ wsChannel }) {
  const [messages, setMessages] = useState([]);
  const messagesAnchorRef = useRef(null);

  useEffect(() => {
    let messageHandler = (e) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    };

    if (wsChannel) {
      wsChannel.addEventListener("message", messageHandler);
    }

    return () => {
      if (wsChannel) {
        wsChannel.removeEventListener("message", messageHandler);
      }
    };
  }, [wsChannel]);

  useEffect(() => {
    if (messagesAnchorRef.current) {
      messagesAnchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={c.messages}>
      {messages.map((item, i) => (
        <MessageItem key={i} item={item} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
}

function MessageItem({ item }) {
  return (
    <div className={c.messageItem}>
      <img src={item.photo || userImage} className={c.image} alt="" />

      <div className={c.message_body}>
        <div className={c.userName}>{item.userName}</div>
        <div className={c.message}>{item.message}</div>
      </div>
    </div>
  );
}

function SendMessage({ wsChannel }) {
  const [readyStatus, setReadyStatus] = useState("pending");

  useEffect(() => {
    let openHandler = () => {
      setReadyStatus("ready");
    };

    if (wsChannel) {
      wsChannel.addEventListener("open", openHandler);
    }

    return () => {
      if (wsChannel) {
        wsChannel.removeEventListener("open", openHandler);
      }
    };
  }, [wsChannel]);

  const onSubmitHandler = (values, { setSubmitting, resetForm }) => {
    if (!values.messageText) {
      return;
    }
    wsChannel.send(values.messageText);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className={c.form_box}>
      <Formik initialValues={{ messageText: "" }} onSubmit={onSubmitHandler}>
        {({ isSubmitting }) => (
          <Form className={c.form}>
            <Field
              type="textarea"
              id="messageText"
              name="messageText"
              placeholder="Type message text"
              className={c.input}
            />

            <button
              disabled={wsChannel === null || readyStatus !== "ready"}
              className={c.submit}
              type="submit"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
