import React from "react";

import styles from "./styles.module.css";
import "./index.css";
import { NavLink } from "react-router-dom";

const Sidebar2 = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    //window.location.reload();
    document.location.replace("/login");
  };
  return (
    <div className={styles.sidebar}>
      <div className="flex-column pt-3 pt-md-0 nav">
        <img
          src="/quantumai.png"
          alt="logo"
          className="img-fluid w-75 d-block mx-auto mb-3"
        />

        <nav className={styles.navbar}>
          <ul className={styles.header_nav}>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "NavActive" : "inactive"
                }
              >
                <i className="fa fa-pie-chart" aria-hidden="true"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <button onClick={handleLogout}>
                <i className="fa fa-power-off" aria-hidden="true"></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar2;
