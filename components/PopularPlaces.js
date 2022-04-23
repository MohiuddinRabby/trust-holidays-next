import React from "react";
import MaldivesImg from "../public/img/popular-places/popular-destination-1.png";
import DubaiImg from "../public/img/popular-places/popular-destination-2.png";
import SajekImg from "../public/img/popular-places/popular-destination-3.png";
import CurrencyLogo from "../public/img/popular-places/tk-logo.png";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
const PopularPlaces = () => {
  return (
    <section className="py-5 popular-places container-fluid bg-custom-dark text-uppercase text-center space-texts-two">
      <h1 className="bold-header text-white text-spacing-two pp-header">
        Popular Places
      </h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 py-4">
            <Fade>
              <Image
                className="card-img-top img-fluid"
                src={MaldivesImg}
                alt="destination"
              />
              <h5 className="mt-3 font-weight-bold">Maldives</h5>
              <p className="lead">
                paradise island
                <span className="text-yellow">/ 5 days - 4 nights</span>
              </p>
              <div className="d-flex justify-content-center">
                <div className="align-self-start px-2">
                  <Image
                    src={CurrencyLogo}
                    style={{ width: "15px" }}
                    alt="pricelogo"
                  />
                </div>
                <div className="mt-1 align-self-end text-yellow font-weight-bold">
                  49,000 /-
                </div>
              </div>
              <div className="py-2">
                <button className="btn custom-primary-btn">Book Now</button>
              </div>
            </Fade>
          </div>
          <div className="col-md-4 py-4">
            <Fade>
              <Image
                className="card-img-top img-fluid"
                src={DubaiImg}
                alt="destination"
              />
              <h5 className="mt-3 font-weight-bold">dubai</h5>
              <p className="lead">
                paradise island
                <span className="text-yellow">/ 5 days - 4 nights</span>
              </p>
              <div className="d-flex justify-content-center">
                <div className="align-self-start px-2">
                  <Image
                    src={CurrencyLogo}
                    style={{ width: "15px" }}
                    alt="pricelogo"
                  />
                </div>
                <div className="mt-1 align-self-end text-yellow font-weight-bold">
                  59,500 /-
                </div>
              </div>
              <div className="py-2">
                <button className="btn custom-primary-btn">Book Now</button>
              </div>
            </Fade>
          </div>
          <div className="col-md-4 py-4">
            <Fade>
              <Image
                className="card-img-top img-fluid"
                src={SajekImg}
                alt="destination maldives"
              />
              <h5 className="mt-3 font-weight-bold">sajek</h5>
              <p className="lead">
                paradise island
                <span className="text-yellow">/ 5 days - 4 nights</span>
              </p>
              <div className="d-flex justify-content-center">
                <div className="align-self-start px-2">
                  <Image
                    src={CurrencyLogo}
                    style={{ width: "15px" }}
                    alt="pricelogo"
                  />
                </div>
                <div className="mt-1 align-self-end text-yellow font-weight-bold">
                  6,500 /-
                </div>
              </div>
              <div className="py-2">
                <button className="btn custom-primary-btn">Book Now</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
