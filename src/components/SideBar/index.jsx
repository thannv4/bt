import React from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const SideBar = () => {
  const location = useLocation();
  const routes = ROUTES || {};

  return (
    <div className="side-bar-container">
      <ul className="side-bar-container__list">
        <li
          className={`side-bar-container__list-item ${
            routes.ALL_TASK && routes.ALL_TASK.includes(location.pathname)
              ? "active"
              : ""
          }`}
        >
          <Link to={routes.ALL_TASK || "#"}>All Task</Link>
        </li>
        <li
          className={`side-bar-container__list-item ${
            routes.NEW_TASK && routes.NEW_TASK.includes(location.pathname)
              ? "active"
              : ""
          }`}
        >
          <Link to={routes.NEW_TASK || "#"}>New Task</Link>
        </li>
        <li
          className={`side-bar-container__list-item ${
            routes.DOING_TASK && routes.DOING_TASK.includes(location.pathname)
              ? "active"
              : ""
          }`}
        >
          <Link to={routes.DOING_TASK || "#"}>Doing Task</Link>
        </li>
        <li
          className={`side-bar-container__list-item ${
            routes.DONE_TASK && routes.DONE_TASK.includes(location.pathname)
              ? "active"
              : ""
          }`}
        >
          <Link to={routes.DONE_TASK || "#"}>Done Task</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
