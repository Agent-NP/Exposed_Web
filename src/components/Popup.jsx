import { useState } from "react";
import logo from "../assets/logo.png";
import "../assets/style/popup.css";

export default function Popup({ title, message }) {
  const [show, setShow] = useState(true);
  return (
    <div
      className="position-absolute popup_parent justify-content-center align-items-center w-100 h-100 px-2 px-sm-5 px-lg-0"
      style={{ "display": show ? "flex" : "none" }}
    >
      <div className="d-flex flex-column bg-light p-3 rounded popup">
        <div className="d-flex align-items-center mb-3">
          <img src={logo} width={50} height={50} className="mx-1" />
          <span className="mx-1 px-2 text-center">
            {title}
          </span>
        </div>
        <p className="text-center">
          {message}
        </p>
        <button
          className="btn p-2 bg-danger text-light"
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
