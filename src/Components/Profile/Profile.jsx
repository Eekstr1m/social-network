import React from "react";
import NewPost from "./Posts/NewPost/NewPost";
import Post from "./Posts/Post/Post";
import c from "./Profile.module.scss";
import ProfileUser from "./User/User";

function Profile(props) {
  let arrPost = props.state.postData.map((obj) => (
    <Post key={obj.id} message={obj.message} like={obj.like} />
  ));

  return (
    <div className={c.profile}>
      <ProfileUser name="Dmitri K." />
      <NewPost
        addNewPost={props.addNewPost}
        addNewPostText={props.state.addNewPostText}
        updateNewPostText={props.updateNewPostText}
      />
      <div className={c.posts}>{arrPost}</div>
    </div>
  );
}

export default Profile;
