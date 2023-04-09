import React from "react";
import { NavLink } from "react-router-dom";
import userImg from "./../../../Assets/userImg.png";
import Followed from "./Followed/Followed";
import c from "./UsersList.module.scss";

function UsersList({ usersData, setUsersData }) {
  return (
    <div className={c.users_list}>
      {usersData.map((user) => (
        <div key={user.id} className={c.user}>
          <div className={c.left}>
            <div className={c.avatar}>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small != null ? user.photos.small : userImg}
                  alt=""
                />
              </NavLink>
            </div>
            <Followed user={user} setUsersData={setUsersData} />
          </div>

          <div className={c.right}>
            <div className={c.userInfo}>
              <div className={c.name}>{user.name}</div>
              <div className={c.status}>{user.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
