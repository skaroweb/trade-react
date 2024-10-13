import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  // State to manage whether the device is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [navbarClass, setNavbarClass] = useState("navbar");

  // Toggle function for the navbar class
  const toggleNavbar = () => {
    setNavbarClass((prevClass) =>
      prevClass === "navbar" ? "navbar-mobile" : "navbar"
    );
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
      if (window.innerWidth >= 768) {
        setNavbarClass("navbar"); // Reset navbar class on desktop
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id="header" className="header">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="/quantumai.png" alt="logo" />
        </Link>

        <nav id="navbar" className={navbarClass}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "inactive"}`
                }
                onClick={isMobile ? toggleNavbar : undefined} // Only attach onClick for mobile
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/safety"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "inactive"}`
                }
                onClick={isMobile ? toggleNavbar : undefined} // Only attach onClick for mobile
              >
                Safety
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/guides"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "inactive"}`
                }
                onClick={isMobile ? toggleNavbar : undefined} // Only attach onClick for mobile
              >
                Guides
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "inactive"}`
                }
                onClick={isMobile ? toggleNavbar : undefined} // Only attach onClick for mobile
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <i
            className={navbarClass === "navbar" ? "fa fa-bars" : "fa fa-close"}
            aria-hidden="true"
            onClick={isMobile ? toggleNavbar : undefined} // Only attach onClick for mobile
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
