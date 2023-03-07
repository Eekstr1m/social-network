import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import Image from "./Image/Image";
import c from "./ProfileUser.module.scss";
import Social from "./Social/Social";
import Status from "./Status/Status";

function ProfileUser({ profileData, isUserAuth, authUserData }) {
  return (
    <>
      {profileData ? (
        <div className={c.user__profile}>
          <div className={c.user}>
            <Image
              profileData={profileData}
              isUserAuth={isUserAuth}
              authUserData={authUserData}
            />
            <div className={c.user__content}>
              <div className={c.user__name}>{profileData.fullName}</div>
              <Status isUserAuth={isUserAuth} authUserData={authUserData} />
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
