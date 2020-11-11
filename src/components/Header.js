import React from "react";
import { Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-light border-bottom  bg-info">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fa fa-bars" />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/Admin" className="nav-link">
            Home
          </Link>
          {/* <a href="/admin" className="nav-link">
              Home
            </a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa fa-user-circle" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            dd
          </a>
        </li>
      </ul>
    </nav>
  );
}
