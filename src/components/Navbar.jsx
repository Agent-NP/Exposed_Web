import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { getNotificationStatus } from "../utils/Notification";
import { useEffect, useContext, useState } from "react";
import { Context } from "../utils/Context";

export default function Navbar() {
  const { currentPage } = useContext(Context);
  const focusbackgroundColor = " #8E969D";

  useEffect(() => {
    getNotificationStatus();
  }, []);
  // useEffect(() => {

  // }, [currentPage]);
  return (
    <nav className="navbar navbar-expand-lg bg-danger py-3">
      <div className="container">
        <Link className="navbar-brand text-light" to="#">
          <img src={logo} className="mx-2" />
          Exposed
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "transparent" }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse py-2 py-lg-0"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav d-lg-flex justify-content-lg-between align-items-lg-center w-100">
            <li className="nav-item ms-lg-auto">
              <Link
                className="nav-link rounded px-2 active text-white"
                aria-current="page"
                to="/"
                style={{
                  backgroundColor:
                    currentPage === "" ||
                    currentPage == "/" ||
                    currentPage === "/home"
                      ? focusbackgroundColor
                      : "transparent"
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-lg-5">
              <Link
                className="nav-link rounded px-2 text-white"
                to="/live"
                style={{
                  backgroundColor:
                    currentPage === "/live" 
                      ? focusbackgroundColor
                      : "transparent"
                }}
              >
                Live
              </Link>
            </li>
            <li className="nav-item me-lg-5">
              <Link
                className="nav-link rounded px-2 text-white"
                to="/today"
                style={{
                  backgroundColor:
                    currentPage === "/today"
                      ? focusbackgroundColor
                      : "transparent"
                }}
              >
                Today
              </Link>
            </li>
            <li className="nav-item me-lg-5">
              <Link
                className="nav-link rounded px-2 text-white"
                to="/yesterday"
                style={{
                  backgroundColor:
                    currentPage === "/yesterday"
                      ? focusbackgroundColor
                      : "transparent"
                }}
              >
                Yesterday
              </Link>
            </li>
            <li className="nav-item me-lg-auto">
              <Link
                className="nav-link rounded px-2 text-white"
                to="/ended"
                style={{
                  backgroundColor:
                    currentPage === "/ended"
                      ? focusbackgroundColor
                      : "transparent"
                }}
              >
                Ended
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
