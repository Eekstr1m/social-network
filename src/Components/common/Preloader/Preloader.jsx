import React from "react";
import c from "./Preloader.module.scss";

function Preloader(props) {
  return (
    <div className={c.preloader_box}>
      <div className={c.preloader}>
        <span className={c.loader}></span>
      </div>
    </div>
  );
}

export default Preloader;
