import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar2 from "../components/Sidebar2";
import styles from "./dashboard.module.css";
import Title from "../components/Title";
import Report from "../components/Report";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the token
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, redirect to login page
      navigate("/login");
    }

    // Optionally: You can add further verification of the token here,
    // such as decoding it to check for expiration or user role.
  }, [navigate]);

  return (
    <div className={styles.dashboard_layout}>
      <Sidebar2 />
      <Title />
      <div className={styles.Main_component}>
        <Report />
      </div>
    </div>
  );
};

export default Dashboard;
