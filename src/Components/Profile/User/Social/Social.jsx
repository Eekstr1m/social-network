import React from "react";
import c from "./Social.module.scss";
import SocialItem from "./SocialItem";

function Social(props) {
  let social;
  let set = new Set();
  if (props.contacts) {
    social = { ...props.contacts };

    for (let [k, v] of Object.entries(social)) {
      if (k === "website" && v !== null) {
        social.react = v;
        delete social[k];
      } else if (v === null || k === "mainLink") {
        delete social[k];
      } else set.add(v);
    }
  }

  return (
    <>
      {!!set.size && (
        <div className={c.social}>
          <div className={c.social_text}>SOCIAL</div>
          <div className={c.social_icons}>
            {Object.entries(social).map((user, i) => (
              <SocialItem key={i} classTag={user[0]} value={user[1]} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Social;
