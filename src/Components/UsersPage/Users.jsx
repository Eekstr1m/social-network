import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API/api";
import Preloader from "../common/Preloader/Preloader";
import FilterBar from "./FilterBar/FilterBar";
import Paginator from "./Paginator/Paginator";
import c from "./Users.module.scss";
import UsersList from "./UsersList/UsersList";

function Users() {
  const { aPage } = useParams();

  const [isFetching, setIsFetching] = useState(false); // Read about useTransition

  const [usersData, setUsersData] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(5);
  const [totalUsersCount, setTotalUsersCount] = useState(0);

  const [friendParam, setFriendParam] = useState("");
  const [termParam, setTermParam] = useState("");

  useEffect(() => {
    setIsFetching(true);
    API.getUsers(activePage, pageSize, friendParam, termParam).then((data) => {
      setTotalUsersCount(data.totalCount);
      setUsersData(data.items);
      setIsFetching(false);
    });
  }, [activePage, pageSize, friendParam, termParam]);

  useEffect(() => {
    setActivePage(aPage);
  }, [aPage]);

  return (
    <div className={c.users_page}>
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={c.users_list}>
          <Paginator
            activePage={activePage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
          />

          <UsersList usersData={usersData} setUsersData={setUsersData} />
        </div>
      )}
      <div className={c.filter_bar}>
        <FilterBar
          setFriendParam={setFriendParam}
          setTermParam={setTermParam}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}

export default Users;
