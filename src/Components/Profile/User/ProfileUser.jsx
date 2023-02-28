import React from "react";
import userImg from "../../../Assets/userImg.png";
import Preloader from "../../common/Preloader/Preloader";
import c from "./ProfileUser.module.scss";
import Social from "./Social/Social";

function ProfileUser({ profileData }) {
  return (
    <>
      {profileData ? (
        <div className={c.user__profile}>
          <div className={c.user}>
            <div className={c.user__photo}>
              <img
                className={c.user__img}
                src={
                  profileData.photos.large
                    ? profileData.photos.large
                    : profileData.photos.small
                    ? profileData.photos.small
                    : userImg
                }
                alt="ProfileImage"
              />
            </div>
            <div className={c.user__content}>
              <div className={c.user__name}>{profileData.fullName}</div>
              <div className={c.user__description}>{profileData.aboutMe}</div>
              <div className={c.user__job}>
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
              </div>
            </div>
            <div className={c.user__social}>
              <Social contacts={profileData.contacts} />
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default ProfileUser;
