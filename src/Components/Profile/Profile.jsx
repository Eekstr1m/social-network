import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../API/api";
import { AuthUserDataContext } from "../../App";
import NewPost from "./Posts/NewPost/NewPost";
import PostsList from "./Posts/PostsList/PostsList";
import c from "./Profile.module.scss";
import ProfileUser from "./User/ProfileUser";

function Profile() {
  let { userId } = useParams();
  let navigate = useNavigate();
  const { authUserData, isUserAuth } = useContext(AuthUserDataContext);

  const [inputMsg, setInputMsg] = useState("");
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    API.getProfile(userId).then((data) => {
      setProfileData(data);
    });
  }, [userId]);

  const onSendMessageHandle = async (userId) => {
    const response = await API.startChat(userId);

    if (response.resultCode === 0) {
      navigate(`/messages/${userId}`);
    }
  };

  return (
    <div className={c.profile}>
      <ProfileUser
        profileData={profileData}
        isUserAuth={isUserAuth}
        authUserData={authUserData}
      />

      {isUserAuth && authUserData.id !== +userId ? (
        <div
          onClick={() => {
            onSendMessageHandle(userId);
          }}
        >
          Send Message
        </div>
      ) : null}

      {isUserAuth && authUserData.id === +userId ? (
        <NewPost setInputMsg={setInputMsg} />
      ) : (
        <div className={c.posts}>Posts</div>
      )}

      <PostsList inputMsg={inputMsg} setInputMsg={setInputMsg} />
    </div>
  );
}

export default Profile;
