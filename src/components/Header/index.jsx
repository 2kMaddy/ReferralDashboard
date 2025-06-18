import { ImSearch } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa";

import "./index.css";

const Header = () => {
  return (
    <div className="tob-bar-container">
      <div className="nav-bar-container">
        <div>
          <img src="logo.png" alt="websiteLogo" className="website-logo" />
        </div>
        <nav className="nav-item-container">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Project</a>
          <a href="#">Contact</a>
        </nav>
        <button type="button" className="button-1">
          Try for free
        </button>
      </div>
      <div className="nav-bar-container padding-margin">
        <h1>Referral Dashboard</h1>
        <div className="search-bar-wrapper">
          <div className="search-bar-container">
            <ImSearch />
            <input
              type="search"
              placeholder="Search here..."
              className="search-input"
            />
          </div>
          <button type="button" className="button-1">
            Search
          </button>
        </div>
        <div className="profile-wrapper">
          <img
            src="notification.png"
            alt="notificatoinIcon"
            className="notification-icon"
          />

          <div className="user-profile-container">
            <p>
              <span className="user-name">
                Name
                <FaAngleDown />
              </span>
              Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
