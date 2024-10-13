import { NavLink } from "react-router-dom";

import "./topNav.css";

const TopNav = () => {
  return (
    <div>
      <nav id="nav">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 d-flex justify-content-between topnavres">
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default TopNav;
