import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { getNotificationStatus } from "../utils/Notification";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    getNotificationStatus();
  }, []);
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
          style={{color: "white"}}
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
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-lg-5">
              <Link className="nav-link text-light" to="/live">
                Live
              </Link>
            </li>
            <li className="nav-item me-lg-5">
              <Link className="nav-link text-light" to="/today">
                Today
              </Link>
            </li>
            <li className="nav-item me-lg-5">
              <Link className="nav-link text-light" to="/yesterday">
                Yesterday
              </Link>
            </li>
            <li className="nav-item me-lg-auto">
              <Link className="nav-link text-light" to="/ended">
                Ended
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
