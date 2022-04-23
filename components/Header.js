import React from "react";
import Image from "next/image";
import HeaderLogo from "../public/img/headerLogo.gif";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-4">
      <div className="container">
        <Image
          src={HeaderLogo}
          // src="/../public/img/headerLogo.gif"
          alt="Picture of the author"
          width={200}
          height={80}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars fa-2x"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Visa Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="">
            <button
              className="btn custom-primary-btn my-2 my-sm-0"
              type="submit"
            >
              Login / Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
