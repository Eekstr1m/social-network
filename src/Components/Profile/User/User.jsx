import c from "./User.module.scss";
import React from "react";

function ProfileUser(props) {
  return (
    <div className={c.user__profile}>
      <div className={c.mainImg}>
        <img
          className={c.mainImg}
          src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300"
          alt=""
        />
      </div>
      <div className={c.user}>
        <div className={c.user__photo}>
          <img
            className={c.user__img}
            src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            alt=""
          />
        </div>
        <div className={c.user__content}>
          <div className={c.user__name}>{props.name}</div>
          <div className={c.user__description}>Desc</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
