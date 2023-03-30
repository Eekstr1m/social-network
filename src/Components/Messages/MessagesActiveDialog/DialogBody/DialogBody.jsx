import React, { useEffect, useRef } from "react";
import c from "./DialogBody.module.scss";
import MessagesBody from "./MessagesBody/MessagesBody";

export default function DialogBody({ dialogData, authUserData }) {
  const newMessageRef = useRef(null);

  useEffect(() => {
    if (newMessageRef.current) {
      newMessageRef.current.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    if (newMessageRef.current) {
      newMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dialogData]);

  return (
    <div className={c.dialog}>
      <div className={c.dialog_messages}>
        {dialogData.length ? (
          dialogData.map((item) => (
            <MessagesBody
              key={item.id}
              item={item}
              authUserData={authUserData}
            />
          ))
        ) : (
          <div className={c.no_messages}>
            <div>No messages yet</div>
            <div>Send first one</div>
          </div>
        )}
        <div ref={newMessageRef}></div>
      </div>
    </div>
  );
}
