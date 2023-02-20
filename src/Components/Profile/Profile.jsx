import React from "react";
import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import PostContainer from "./Posts/Post/PostContainer";
import c from "./Profile.module.scss";
import ProfileUser from "./User/User";

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileUser name="Dmitri K." />
      <NewPostContainer store={props.store} />
      <PostContainer store={props.store} />
    </div>
  );
}

export default Profile;
