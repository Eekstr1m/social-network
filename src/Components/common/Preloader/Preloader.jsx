import React from "react";
import c from "./Preloader.module.scss";

function Preloader(props) {
  return (
    <div className={c.preloader}>
      <span className={c.loader}></span>
    </div>
  );
}

export default Preloader;
