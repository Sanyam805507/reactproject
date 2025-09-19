import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/support"} className="nav-link">
                Support
              </Link>
            </li>
            <Link to={"/employee"} className="nav-link">
                Employee
              </Link>
              <Link to={"/cal"} className="nav-link">
                Cal
              </Link>
               <Link to={"/cal1"} className="nav-link">
                Cal1
              </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Headers;
