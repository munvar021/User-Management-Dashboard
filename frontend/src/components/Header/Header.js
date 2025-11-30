import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <FontAwesomeIcon icon={faUsers} className="header-icon" />
      <h1>User Management</h1>
    </header>
  );
};

export default Header;
