import { Field, Form, Formik } from "formik";
import React from "react";
import c from "./NewPost.module.scss";

function NewPost({ setInputMsg }) {
  let onSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    setInputMsg(values.messageText);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className={c.newPost}>
      <label htmlFor="messageText" className={c.newPost__title}>
        What's new?
      </label>

      <Formik initialValues={{ messageText: "" }} onSubmit={onSubmitHandler}>
        {({ isSubmitting }) => (
          <Form className={c.form}>
            <Field
              type="textarea"
              id="messageText"
              name="messageText"
              placeholder="Write your thoughts here..."
              className={c.newPost__input}
            />

            <button
              disabled={isSubmitting}
              className={c.newPost__submit}
              type="submit"
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewPost;

{
  /* <div className={c.newPost__content}>
        <textarea
          onChange={(e) => {
            setTempInputMsg(e.currentTarget.value);
          }}
          className={c.newPost__textarea}
          value={tempInputMsg}
          name="newpost"
          placeholder="Type post text"
        />
      </div>
      <div className={c.newPost__send}>
        <button
          onClick={() => {
            setTempInputMsg("");
            props.setInputMsg(tempInputMsg);
          }}
          className=""
          type="submit"
        >
          Send
        </button>
      </div> */
}
