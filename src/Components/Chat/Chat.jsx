import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { AuthUserDataContext } from "../../App";
import c from "./Chat.module.scss";

function Chat() {
  const { authUserData } = useContext(AuthUserDataContext);

  return (
    <div>
      <Messages />
      <SendMessage />
    </div>
  );
}

export default Chat;

function Messages() {
  return <div>Messages</div>;
}

function SendMessage() {
  return (
    <div className={c.form_box}>
      <Formik
        initialValues={{ messageText: "" }}
        onSubmit={Formik.onSubmitHandler}
      >
        {({ isSubmitting }) => (
          <Form className={c.form}>
            <Field
              type="textarea"
              id="messageText"
              name="messageText"
              placeholder="Type message text"
              className={c.input}
            />

            <button disabled={isSubmitting} className={c.submit} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
