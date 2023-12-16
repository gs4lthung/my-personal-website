import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.scss";
import facebookIcon from "../../assets/images/facebook.png";
import githubIcon from "../../assets/images/github.png";
import instagramIcon from "../../assets/images/instagram.png";
import twitterIcon from "../../assets/images/twitter.jpeg";
import linkedinIcon from "../../assets/images/linkedin.png";
import stackoverflowIcon from "../../assets/images/stackoverflow.png";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto flex-row justify-content-center">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item dropdown product">
              <a
                className="nav-link dropdown-toggle"
                href="sd"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"product/web"} className="dropdown-item">
                    Web
                  </Link>
                </li>
                <li>
                  <Link to={"product/app"} className="dropdown-item">
                    App
                  </Link>
                </li>
                <li>
                  <Link to={"product/game"} className="dropdown-item">
                    Game
                  </Link>
                </li>
                <li>
                  <Link
                    to={"product/management-system"}
                    className="dropdown-item"
                  >
                    Management System
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown socialmedia">
              <a
                className="nav-link dropdown-toggle"
                href="sd"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://www.facebook.com/hung.041203"
                    target="_blank"
                  >
                    <img
                      src={facebookIcon}
                      alt="Facebook"
                      width="30"
                      height="30"
                    />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://www.instagram.com/ges_0412.4/"
                    target="_blank"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      width="30"
                      height="30"
                    />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://twitter.com/LamTienHung0412"
                    target="_blank"
                  >
                    <img
                      src={twitterIcon}
                      alt="Twitter"
                      width="30"
                      height="30"
                    />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://www.linkedin.com/in/lam-hung-a61599256/"
                    target="_blank"
                  >
                    <img
                      src={linkedinIcon}
                      alt="Linkedin"
                      width="30"
                      height="30"
                    />
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://github.com/LTHung0412"
                    target="_blank"
                  >
                    <img src={githubIcon} alt="Github" width="30" height="30" />
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="https://stackoverflow.com/users/17829107/tien-hung"
                    target="_blank"
                  >
                    <img
                      src={stackoverflowIcon}
                      alt="StackOverFlow"
                      width="30"
                      height="30"
                    />
                    StackOverFlow
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
