import { Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useRef, useState } from "react";
import userImage from "./../../Assets/userImg.png";
import c from "./Chat.module.scss";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

function Chat() {
  const [messages, setMessages] = useState([]);

  const [wsChannel, setWsChannel] = useState(null);
  const [status, setStatus] = useState("pending");
  const [isReconnect, setIsReconnect] = useToggle();

  useEffect(() => {
    let socket;

    const closeHandler = () => {
      console.log("close");
      setStatus("pending");

      setMessages([]);
    };

    const openHandler = (e) => {
      console.log("connected");
      setStatus("ready");
    };

    const messageHandler = (e) => {
      console.log("messages");
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    };

    const errorHandler = (e) => {
      console.log("error");
    };

    const EVENT_ADD = "addEventListener";
    const EVENT_REMOVE = "removeEventListener";

    const eventListeners = (ws, type) => {
      switch (type) {
        case EVENT_ADD:
          ws.addEventListener("open", openHandler);
          ws.addEventListener("message", messageHandler);
          ws.addEventListener("close", closeHandler);
          ws.addEventListener("error", errorHandler);
          break;

        case EVENT_REMOVE:
          ws.removeEventListener("open", openHandler);
          ws.removeEventListener("message", messageHandler);
          ws.removeEventListener("close", closeHandler);
          ws.removeEventListener("error", errorHandler);
          break;

        default:
          break;
      }
    };

    const createChannel = () => {
      if (wsChannel) {
        eventListeners(wsChannel, EVENT_REMOVE);
        wsChannel.close();
      }
      socket = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );

      eventListeners(socket, EVENT_ADD);
      setWsChannel(socket);
    };

    createChannel();

    return () => {
      socket.close();
    };
  }, [isReconnect]);

  return (
    <div className={c.chat}>
      <Messages messages={messages} setIsReconnect={setIsReconnect} />
      <SendMessage wsChannel={wsChannel} status={status} />
    </div>
  );
}

export default Chat;

function Messages({ messages, setIsReconnect }) {
  const messagesAnchorRef = useRef(null);

  useEffect(() => {
    if (messagesAnchorRef.current) {
      messagesAnchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <div className={c.messages}>
      {messages.length ? (
        messages.map((item, i) => <MessageItem key={i} item={item} />)
      ) : (
        <div>
          <div>Connection abort, click button to try reconnect</div>
          <button onClick={() => setIsReconnect()} type="submit">
            Reconnect
          </button>
        </div>
      )}
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

function SendMessage({ wsChannel, status }) {
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
              disabled={status !== "ready"}
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
