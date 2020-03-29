import React from "react";
import logo from "../../assets/Annotation 2020-03-26 194542.png";

export default function navbar() {
  return (
    <header className="main-header">
      <a href="/" className="logo">
        <img src={logo} alt="website logo " />
      </a>
      <div className="toggles">
        <a href="/rate" className="button">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Rate Them </span>
          </button>
        </a>
      </div>
    </header>
  );
}
