import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FooterLogo from "../public/img/footer/footer-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer-section py-5">
        <Fade duration={2000}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-0 text-uppercase text-white font-weight-bold border-right text-center">
                <div className="">
                  <a className="navbar-brand" href="#g">
                    <Image src={FooterLogo} alt="" />
                  </a>
                  <div>
                    <p className="text-spacing-three">banani old dohs</p>
                    <p className="text-spacing-three">r-03/ h-28/b</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://www.facebook.com/TrustHolidays/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i
                        className="fa-brands fa-facebook fa-2x text-primary pr-4"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </a>
                    <i className="fa-brands fa-youtube fa-2x text-danger pr-4"></i>
                    <i className="fa-brands fa-whatsapp fa-2x text-success"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-0 border-right text-uppercase d-none d-lg-block d-xl-block">
                <h6 className="custom-primary-text-two font-weight-bold text-spacing-three pb-3 border-bottom">
                  Service we provide
                </h6>
                <div className="row text-light">
                  <div className="col-md-4">
                    <p>USA</p>
                  </div>
                  <div className="col-md-4">
                    <p>CANADA</p>
                  </div>
                  <div className="col-md-4">
                    <p>ENGLAND</p>
                  </div>
                  <div className="col-md-4">
                    <p>DENKMARK</p>
                  </div>
                  <div className="col-md-4">
                    <p>DUBAI</p>
                  </div>
                  <div className="col-md-4">
                    <p>EGYPT</p>
                  </div>
                  <div className="col-md-4">
                    <p>TURKEY</p>
                  </div>
                  <div className="col-md-4">
                    <p>SINGAPORE</p>
                  </div>
                  <div className="col-md-4">
                    <p>FRANCE</p>
                  </div>
                  <div className="col-md-4">
                    <p>SWEDEN</p>
                  </div>
                  <div className="col-md-4">
                    <p>AUSTRALIA</p>
                  </div>
                  <div className="col-md-4">
                    <p>NEPAL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-0 border-right text-center py-5 text-uppercase text-white d-none d-lg-block d-xl-block">
                <div className="row">
                  <div className="col-md-12 py-2 ">
                    <Link href="/">terms & conditions</Link>
                  </div>
                  <div className="col-md-12 py-2">
                    <Link href="/">book online</Link>
                  </div>
                  <div className="col-md-12 py-2">
                    <Link href="/">bank details</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-0 d-none d-lg-block d-xl-block">
                <h6 className="custom-primary-text-two font-weight-bold text-spacing-three pb-3 border-bottom">
                  Contact us
                </h6>
                <div className="row text-white">
                  <div className="col-md-12">
                    <p>01315302350</p>
                  </div>
                  <div className="col-md-12">
                    <p>01707928979</p>
                  </div>
                  <div className="col-md-12">
                    <p>01407635183</p>
                  </div>
                  <div className="col-md-12">
                    <p>01407635184</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade duration={2000}>
        <div className="container-fluid bg-footer py-2 text-capitalize text-white text-spacing-three">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center space-texts-two">
              <h6 className="second-footer">powered by</h6>
              <h5 className="second-footer">trust info tech &copy;2023</h5>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Footer;
