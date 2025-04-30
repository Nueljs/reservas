import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const isAuth = true;
  const nav = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="d-flex justify-content-center justify-content-md-between p-3 flex-md-row flex-column gap-5">
      <div className="d-flex flex-md-row flex-column align-items-center gap-4">
        <img className="logo-header" src={logo} alt="Logo de la empresa" />
        <nav className ="d-none d-md-flex flex-grow-1 justify-content-center justify-content-md-start">
          <ul className="d-flex gap-4 m-0 p-0 list-unstyled align-items-center justify-content-start">
            <li>
              <a
                onClick={() => {
                  nav("/");
                }}
                className="nav-header"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  nav("/events");
                }}
                className="nav-header"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  nav("/aboutus");
                }}
                className="nav-header p-0 text-nowrap"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="navbar-toggler d-md-none"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <GiHamburgerMenu />
        </button>

        <nav className={`nav-container ${isMenuOpen ? "active" : ""}`}>
          <ul className="d-flex flex-column flex-md-row gap-4 mb-0 list-unstyled">
            <li>
              <a
                onClick={() => {
                  nav("/");
                }}
                className="nav-header"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  nav("/events");
                }}
                className="nav-header"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  nav("/aboutus");
                }}
                className="nav-header"
              >
                About us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center gap-4 mt-3 mt-md-0">
        <div className="search-box flex-grow-1">
          <input
            className="search-box-input"
            type="text"
            placeholder="Search..."
          />
          <button className="search-box-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="d-flex ">
          <a href="carrito.php" className="icons">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <a
            className="icons"
            onClick={() => {
              nav("/login");
            }}
          >
            <i className="fa-solid fa-user"></i>
          </a>
          {isAuth && (
            <a href="" className="icons">
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
