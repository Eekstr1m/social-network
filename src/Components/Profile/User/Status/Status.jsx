import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../API/api";
import c from "./Status.module.scss";

function Status({ authUserData, isUserAuth }) {
  let { userId } = useParams();

  const [statusEditing, setStatusEditing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [statusInputText, setStatusInputText] = useState("");

  const fetchGetStatus = useCallback(async () => {
    const data = await API.getStatus(userId);

    setStatusText(data);
    setStatusInputText(data);
  }, [userId]);

  useEffect(() => {
    fetchGetStatus().catch(console.error);
  }, [fetchGetStatus]);

  let submitHandler = (e) => {
    e.preventDefault();
    setStatusEditing(false);
    API.setStatus(statusInputText).then((res) => {
      if (res.resultCode === 0) {
        setStatusText(statusInputText);
      }
    });
  };

  return (
    <div className={c.status__box}>
      {isUserAuth && authUserData.id === +userId ? (
        statusEditing ? (
          <>
            <form onSubmit={submitHandler}>
              <input
                autoFocus={true}
                onFocus={(e) => e.target.select()}
                onBlur={(_) => {
                  setTimeout(() => {
                    setStatusEditing(false);
                    setStatusInputText(statusText);
                  }, 100);
                }}
                onChange={(e) => setStatusInputText(e.target.value)}
                type="text"
                value={statusInputText}
              />
              <input type="submit" value="Sub" />
            </form>
          </>
        ) : statusText ? (
          <div
            onClick={() => setStatusEditing(true)}
            className={c.status__text}
          >
            {statusText}
          </div>
        ) : (
          <div onClick={() => setStatusEditing(true)}>Add status</div>
        )
      ) : (
        <div className={c.status__text}>{statusText}</div>
      )}
    </div>
    // <div>
    //   <h1>Any place in your app!</h1>
    //   <Formik
    //     initialValues={{ text: "" }}
    //     onSubmit={(values, { setSubmitting }) => {
    //       console.log(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }}
    //   >
    //     {({ isSubmitting, touched, setSubmitting }) => (
    //       <Form>
    //         <Field
    //           onBlur={() => setSubmitting(false)}
    //           type="text"
    //           name="text"
    //         />
    //         <button
    //           onClick={() => console.log(touched.text)}
    //           type="submit"
    //           disabled={isSubmitting}
    //         >
    //           Submit
    //         </button>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
  );
}

export default Status;
