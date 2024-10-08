import React, { useEffect, useState } from "react";
import { ColorExtractor } from "react-color-extractor";
import { useParams } from "react-router-dom";
import { API } from "../../../../API/api";
import userImg from "../../../../Assets/userImg.png";
import c from "./Image.module.scss";

function Image({ profileData, isUserAuth, authUserData, setBackgroundColor }) {
  let { userId } = useParams();

  const [userImage, setUserImage] = useState(profileData.photos);

  useEffect(() => {
    setUserImage(profileData.photos);
  }, [profileData]);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      let file = e.target.files[0];
      API.savePhoto(file).then((res) => {
        setUserImage(res.data.photos);
      });
    }
  };

  return (
    <div className={c.user__photo}>
      {isUserAuth && authUserData.id === +userId ? (
        <>
          <ColorExtractor getColors={(colors) => setBackgroundColor(colors)}>
            <img
              className={c.user__img}
              src={
                userImage.large
                  ? userImage.large
                  : userImage.small
                  ? userImage.small
                  : userImg
              }
              alt="ProfileImage"
            />
          </ColorExtractor>

          <input
            type="file"
            id="file"
            hidden={true}
            onChange={onMainPhotoSelected}
          />
          <label htmlFor="file" className={c.label}>
            <i className={`fa-regular fa-image ${c.img__icon}`}></i>
          </label>
        </>
      ) : (
        <ColorExtractor getColors={(colors) => setBackgroundColor(colors)}>
          <img
            className={`${c.user__img}`}
            src={
              profileData.photos.large
                ? profileData.photos.large
                : profileData.photos.small
                ? profileData.photos.small
                : userImg
            }
            alt="ProfileImage"
          />
        </ColorExtractor>
      )}
    </div>
  );
}

export default Image;
