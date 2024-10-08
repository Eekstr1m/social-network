import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API/api";
import { AuthUserDataContext } from "../../App";
import NewPost from "./Posts/NewPost/NewPost";
import PostsList from "./Posts/PostsList/PostsList";
import c from "./Profile.module.scss";
import ProfileUser from "./User/ProfileUser";

function Profile() {
  let { userId } = useParams();

  const { authUserData, isUserAuth } = useContext(AuthUserDataContext);

  const [inputMsg, setInputMsg] = useState("");
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    API.getProfile(userId).then((data) => {
      setProfileData(data);
    });
  }, [userId]);

  return (
    <div className={c.profile}>
      <ProfileUser
        profileData={profileData}
        isUserAuth={isUserAuth}
        authUserData={authUserData}
      />

      {isUserAuth && authUserData.id === +userId ? (
        <NewPost setInputMsg={setInputMsg} />
      ) : (
        <div className={c.posts}>Posts</div>
      )}

      <PostsList
        profileData={profileData}
        inputMsg={inputMsg}
        setInputMsg={setInputMsg}
      />
    </div>
  );
}

export default Profile;
