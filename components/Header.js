import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLogo from "../public/img/headerLogo.gif";
import Link from "next/link";
import UmrahPopUp from "./UmrahPopUp";
const Header = () => {
  // umrah pop states
  // const [umrahBtnPopup, setUmrahBtnPopup] = useState(false);
  // const [umrahPopupTimer, setUmrahPopupTimer] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setUmrahPopupTimer(true);
  //   }, 2000);
  // }, []);
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-2">
      <div className="container">
        <Link href="/" passHref>
          <Image
            src={HeaderLogo}
            alt="Trust Holidays"
            width={180}
            height={100}
            style={{ cursor: "pointer" }}
          />
        </Link>

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
              <Link className="nav-link" href="/packages">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* <button
            onClick={() => setUmrahBtnPopup(true)}
            className="btn custom-primary-btn my-2 my-sm-0 mx-2"
          >
            Umrah Special
          </button> */}
          <div className="">
            <button
              className="btn custom-primary-btn my-2 my-sm-0"
              type="submit"
            >
              Login / Signup
            </button>
            {/* <UmrahPopUp trigger={umrahBtnPopup} setTrigger={setUmrahBtnPopup}>
              <p className="text-white py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                delectus repellat officia similique sunt perspiciatis saepe
                accusantium dolorem placeat quae.
              </p>
            </UmrahPopUp>
            <UmrahPopUp
              trigger={umrahPopupTimer}
              setTrigger={setUmrahPopupTimer}
            >
              <p className="text-white py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                delectus repellat officia similique sunt perspiciatis saepe
                accusantium dolorem placeat quae.
              </p>
            </UmrahPopUp> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
