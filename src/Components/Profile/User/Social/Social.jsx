import React from "react";
import SocialItem from "./SocialItem";

function Social(props) {
  let social;
  if (props.contacts) {
    social = { ...props.contacts };

    for (let [k, v] of Object.entries(social)) {
      if (k === "website" && v !== null) {
        social.react = v;
        delete social[k];
      } else if (v === null || k === "mainLink") {
        delete social[k];
      }
    }
  }

  return (
    <div>
      {Object.entries(social).map((user, i) => (
        <SocialItem key={i} classTag={user[0]} value={user[1]} />
      ))}
    </div>
  );
}

export default Social;
