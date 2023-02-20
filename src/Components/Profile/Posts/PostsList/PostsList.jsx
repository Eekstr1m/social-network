import React from "react";
import c from "./PostsList.module.scss";

function PostsList(props) {
  return <div className={c.postsList}>{props.arrPost}</div>;
}

export default PostsList;
