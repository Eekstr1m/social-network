import React from "react";
import c from "./ActiveDialog.module.scss";

function ActiveDialog(props) {
  return (
    <div className={c.dialog__item}>
      <div className={c.item__text}>{props.msgText}</div>
    </div>
  );
}

export default ActiveDialog;
