import React from "react";
import Image from "next/image";
import Logistics from "../public/img/our-services/technical-support.png";
import VisaConsultancy from "../public/img/our-services/consultation.png";
import DocumentLegal from "../public/img/our-services/official-documents.png";
import EPassport from "../public/img/our-services/passport.png";
import Ticketing from "../public/img/our-services/ticketing.png";
import VisaProcess from "../public/img/our-services/visa-process.png";
import { Fade, Slide } from "react-awesome-reveal";
const OurServices = () => {
  return (
    <div className="our-services bg-custom-dark py-5">
      <div className="text-center">
        <Fade duration={2000}>
          <h1 className="text-white py-5 styled-header">Our Services</h1>
        </Fade>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-3">
            <Slide triggerOnce direction="right" duration={3000}>
              <div className="d-flex">
                <div className="px-5">
                  <Image src={Logistics} width={70} height={70} alt="" />
                </div>
                <div>
                  <h4>Visa Processing & Logistics Support</h4>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-lg-6 pb-3">
            <Slide triggerOnce direction="left" duration={3000}>
              <div className="d-flex">
                <div className="px-5">
                  <Image src={VisaConsultancy} width={70} height={70} alt="" />
                </div>
                <div>
                  <h4>Visa Consultancy</h4>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-lg-6 pb-3">
            <Slide triggerOnce direction="right" duration={3000}>
              <div className="d-flex">
                <div className="px-5">
                  <Image src={DocumentLegal} width={70} height={70} alt="" />
                </div>
                <div>
                  <h4>Document Legalization</h4>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-lg-6 pb-3">
            <Slide triggerOnce direction="left" duration={3000}>
              <div className="d-flex">
                <div className="px-5">
                  <Image src={EPassport} width={70} height={70} alt="" />
                </div>
                <div>
                  <h4>Electronic Visa(E-Visa)</h4>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-lg-6 pb-3">
            <Slide triggerOnce direction="right" duration={3000}>
              <div className="d-flex">
                <div className="px-5">
                  <Image src={VisaProcess} width={70} height={70} alt="" />
                </div>
                <div>
                  <h4>Ground Support</h4>
                </div>
              </div>
            </Slide>
          </div>
          <div className="col-lg-6 pb-3">
            <Slide triggerOnce direction="left" duration={3000}>
              <div className="d-flex">
                <div className="px-5">
                  <Image src={Ticketing} width={70} height={70} alt="" />
                </div>
                <div>
                  <h4>Air Ticket & Hotel Booking</h4>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
