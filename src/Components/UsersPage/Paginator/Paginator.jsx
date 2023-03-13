import React from "react";
import { useNavigate } from "react-router-dom";
import c from "./Paginator.module.scss";

const getPagination = (activePage, totalUsersCount, pageSize) => {
  activePage = +activePage;
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

function Paginator({ activePage, totalUsersCount, pageSize }) {
  let navigate = useNavigate();

  let paginationList = getPagination(activePage, totalUsersCount, pageSize);

  return (
    <div className={c.paginator}>
      {paginationList.map((page, index) => {
        if (typeof page === "number") {
          return (
            <span
              key={index}
              onClick={() => {
                navigate(`/users/${page}`);
              }}
              className={
                +activePage === page ? `${c.item} ${c.selected}` : c.item
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
  );
}

export default Paginator;
