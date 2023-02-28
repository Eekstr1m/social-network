import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API } from "../../API/api";
import Preloader from "../common/Preloader/Preloader";
import userImg from "./../../Assets/userImg.png";
import c from "./Users.module.scss";

const getPagination = (activePage, totalUsersCount, pageSize) => {
  const offset = 2;
  const totalPageNumber = Math.ceil(totalUsersCount / pageSize);
  const offsetNumber =
    activePage <= offset || activePage > totalPageNumber - offset
      ? offset
      : offset - 1;
  const numbersList = [];
  const numbersListWithDots = [];

  if (totalPageNumber <= 1 || totalPageNumber === undefined) return [1];

  numbersList.push(1);
  for (let i = activePage - offsetNumber; i <= activePage + offsetNumber; i++) {
    if (i < totalPageNumber && i > 1) {
      numbersList.push(i);
    }
  }
  numbersList.push(totalPageNumber);

  numbersList.reduce((accumulator, currentValue) => {
    if (accumulator === 1) {
      numbersListWithDots.push(accumulator);
    }
    if (currentValue - accumulator !== 1) {
      numbersListWithDots.push("...");
    }
    numbersListWithDots.push(currentValue);

    return currentValue;
  });

  return numbersListWithDots;
};

function Users() {
  const [isFollowingProcess, setFollowingProcess] = useState(false);
  const [isFetching, setIsFetching] = useState(false); // Read about useTransition

  const [usersData, setUsersData] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(5);
  const [totalUsersCount, setTotalUsersCount] = useState(0);

  const [userFollow, setUserFollow] = useState(null);
  const [userUnFollow, setUserUnFollow] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    API.getUsers(activePage, pageSize).then((data) => {
      setTotalUsersCount(data.totalCount);
      setUsersData(data.items);
      setIsFetching(false);
    });
  }, [activePage, pageSize]);

  let paginationList = getPagination(activePage, totalUsersCount, pageSize);

  useEffect(() => {
    setUsersData(
      usersData.map((el) => {
        if (el.id === userFollow) el.followed = true;
        return el;
      })
    );

    return () => {
      setUserFollow(null);
    };
  }, [userFollow]);

  useEffect(() => {
    setUsersData(
      usersData.map((el) => {
        if (el.id === userUnFollow) el.followed = false;
        return el;
      })
    );

    return () => {
      setUserUnFollow(null);
    };
  }, [userUnFollow]);

  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          <div className={c.paginator}>
            {paginationList.map((page, index) => {
              if (typeof page === "number") {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      setActivePage(page);
                    }}
                    className={
                      activePage === page ? `${c.item} ${c.selected}` : c.item
                    }
                  >
                    {page}
                  </span>
                );
              } else
                return (
                  <span key={index} className={c.dots}>
                    {page}
                  </span>
                );
            })}
          </div>

          {usersData.map((user) => (
            <div key={user.id} className={c.user}>
              <div className={c.left}>
                <div className={c.avatar}>
                  <NavLink to={`/profile/${user.id}`}>
                    <img
                      src={
                        user.photos.small != null ? user.photos.small : userImg
                      }
                      alt=""
                    />
                  </NavLink>
                </div>
                <div className={c.follow}>
                  <div>
                    {user.followed ? (
                      <button
                        disabled={isFollowingProcess}
                        onClick={() => {
                          setFollowingProcess(true);
                          API.deleteFollow(user.id).then((data) => {
                            if (data.resultCode === 0) {
                              setUserUnFollow(user.id);
                            }
                            setFollowingProcess(false);
                          });
                        }}
                        className={`${c.follow__btn} ${c.followed}`}
                        type="submit"
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        disabled={isFollowingProcess}
                        onClick={() => {
                          setFollowingProcess(true);
                          API.postFollow(user.id).then((data) => {
                            if (data.resultCode === 0) {
                              setUserFollow(user.id);
                            }
                            setFollowingProcess(false);
                          });
                        }}
                        className={`${c.follow__btn}`}
                        type="submit"
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={c.right}>
                <div className={c.userInfo}>
                  <div className={c.name}>{user.name}</div>
                  <div className={c.status}>{user.status}</div>
                </div>
                <div className={c.location}>
                  <div className={c.country}>{"user.location.country"}</div>
                  <div className={c.city}>{"user.location.city"}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Users;
