import React, { useState } from "react";
import { API } from "../../../../API/api";
import c from "./Followed.module.scss";

function Followed({ user, setUsersData }) {
  const [isFollowingProcess, setFollowingProcess] = useState(false);

  const changeFollowData = (follow) => {
    setUsersData((u) =>
      u.map((el) => {
        if (el.id === user.id) {
          el.followed = !follow;
        }
        return el;
      })
    );
  };

  const fetch = async (method, follow) => {
    setFollowingProcess(true);
    const response = await method;

    if (response.resultCode === 0) {
      changeFollowData(follow);
    }
    setFollowingProcess(false);
  };

  const followingProcess = (follow) => {
    if (follow) {
      fetch(API.deleteFollow(user.id), follow);
    } else {
      fetch(API.postFollow(user.id), follow);
    }
  };

  return (
    <div className={c.follow}>
      <div>
        <button
          disabled={isFollowingProcess}
          onClick={() => followingProcess(user.followed)}
          className={
            user.followed
              ? `${c.follow__btn} ${c.followed}`
              : `${c.follow__btn}`
          }
          type="submit"
        >
          {user.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default Followed;
