import { Form, Formik, useField } from "formik";
import React from "react";
import * as Yup from "yup";
import { API } from "../../API/api";
import c from "./Login.module.scss";

function Login({ setIsChanged }) {
  return <LoginForm setIsChanged={setIsChanged} />;
}

export default Login;

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={c.text_input_area}>
      <label htmlFor={props.id || props.name} className={c.text_label}>
        {label}
      </label>
      <input className={c.text_input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={c.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label className={c.checkbox}>
        <input
          {...field}
          {...props}
          type="checkbox"
          className={c.checkbox_input}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const LoginForm = ({ setIsChanged }) => {
  let onSubmitHandler = (values, { setSubmitting, setStatus, resetForm }) => {
    API.login(values.email, values.password, values.rememberMe).then((res) => {
      if (res.resultCode === 0) {
        setIsChanged();
      } else {
        resetForm();
        setStatus(res.messages);
      }
    });
    setSubmitting(false);
  };

  return (
    <div className={c.form}>
      <h1>Log In</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address`")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={onSubmitHandler}
      >
        {({ isSubmitting, status }) => (
          <Form>
            {status && <div className={c.form_error}>{status}</div>}
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="email@address.com"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <MyCheckbox name="rememberMe">Stay signed</MyCheckbox>

            <div className={c.submit_place}>
              <button
                disabled={isSubmitting}
                className={c.submit}
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
