import { Field, Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../API/api";
import c from "./DialogSendMessage.module.scss";

export default function DialogSendMessage({ dialogData, setDialogData }) {
  let { dialogId } = useParams();

  let onSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const response = await API.sendMessage(
      +dialogId,
      values.messageText.trim()
    );

    if (response.resultCode === 0) {
      let copy = structuredClone(dialogData);

      const response = await API.getLastSendedMessage(+dialogId);

      copy.push(response.items[0]);
      setDialogData(copy);
    }

    resetForm();
    setSubmitting(false);
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

            <button disabled={isSubmitting} className={c.submit} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
