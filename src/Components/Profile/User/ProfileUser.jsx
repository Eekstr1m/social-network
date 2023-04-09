import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { API } from "../../../API/api";
import Preloader from "../../common/Preloader/Preloader";
import Image from "./Image/Image";
import c from "./ProfileUser.module.scss";
import Social from "./Social/Social";
import Status from "./Status/Status";

const UserInfoBg = styled.div.attrs((props) => ({
  // background: props.backgroundColor[0] || "#ccc",
}))`
  display: grid;
  grid-template-columns: auto 1fr;

  width: 100%;
  height: 300px;

  position: relative;

  background: #ccc;
  background: linear-gradient(90deg, #ccc);

  border-radius: 10px;
`;

// ${(props) => props.backgroundColor[0]},
//     ${(props) => props.backgroundColor[1]}

function ProfileUser({ profileData, isUserAuth, authUserData }) {
  let { userId } = useParams();
  let navigate = useNavigate();

  const [backgroundColor, setBackgroundColor] = useState([]);

  const onSendMessageHandle = async (userId) => {
    const response = await API.startChat(userId);

    if (response.resultCode === 0) {
      navigate(`/messages/${userId}`);
    }
  };

  return (
    <>
      {profileData ? (
        <div className={c.user__profile}>
          <UserInfoBg backgroundColor={backgroundColor}>
            <Image
              profileData={profileData}
              isUserAuth={isUserAuth}
              authUserData={authUserData}
              setBackgroundColor={setBackgroundColor}
            />
            {profileData.contacts && <Social contacts={profileData.contacts} />}
            <div className={c.user__content}>
              <div className={c.user__container}>
                <div className={c.user__name}>{profileData.fullName}</div>
                <Status isUserAuth={isUserAuth} authUserData={authUserData} />
                {profileData.aboutMe && (
                  <div className={c.user__description}>
                    {profileData.aboutMe}
                  </div>
                )}
                {isUserAuth && authUserData.id !== +userId ? (
                  <div
                    className={c.sendMessage__container}
                    onClick={() => {
                      onSendMessageHandle(userId);
                    }}
                  >
                    <div className={c.SendMessage}>Send Message</div>
                  </div>
                ) : null}
              </div>
            </div>
          </UserInfoBg>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default ProfileUser;

{
  /* <div className={c.user__job}>
                {profileData.lookingForAJob ? (
                  <>
                    <div className={c.job__status}>
                      Currently looking for a job
                    </div>
                    <div className={c.job__desc}>
                      {profileData.lookingForAJobDescription}
                    </div>
                  </>
                ) : null}
              </div> */
}
