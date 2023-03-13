import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "./FilterBar.module.scss";

function FilterBar({ setFriendParam, setTermParam, setActivePage }) {
  let navigate = useNavigate();

  const [pickedState, setPickedState] = useState("");

  const followed = "followed";
  const unfollowed = "unfollowed";

  useEffect(() => {
    switch (pickedState) {
      case followed:
        setActivePage(1);
        setFriendParam(true);
        break;

      case unfollowed:
        setActivePage(1);
        setFriendParam(false);
        break;

      default:
        setActivePage(1);
        setFriendParam("");
        break;
    }
  }, [pickedState, setActivePage, setFriendParam]);

  let onClickHandler = (e, values, { resetForm }) => {
    if (values.picked === e.target.value) {
      setPickedState("");
      resetForm({
        values: {
          text: values.text,
          picked: "",
        },
      });
    } else setPickedState(e.target.value);
  };

  return (
    <div className={c.search}>
      <Formik
        initialValues={{
          text: "",
          picked: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setActivePage(1);
          setTermParam(values.text);
          navigate(`/users/1`);
          setSubmitting(false);
        }}
      >
        {({ values, setValues, isSubmitting, resetForm }) => (
          <Form>
            <Field
              type="input"
              name="text"
              placeholder="Search user"
              className={c.search_input}
            />
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className={c.filters}
            >
              <label className={c.filter_item}>
                <Field
                  type="radio"
                  name="picked"
                  value={followed}
                  onClick={(e) => onClickHandler(e, values, { resetForm })}
                />
                Followed
              </label>
              <label className={c.filter_item}>
                <Field
                  type="radio"
                  name="picked"
                  value={unfollowed}
                  onClick={(e) => onClickHandler(e, values, { resetForm })}
                />
                Unfollowed
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FilterBar;
