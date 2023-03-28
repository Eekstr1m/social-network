import React from "react";
import c from "./DialogBody.module.scss";
import MessagesBody from "./MessagesBody/MessagesBody";

export default function DialogBody({ dialogData, authUserData }) {
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
      </div>
    </div>
  );
}
