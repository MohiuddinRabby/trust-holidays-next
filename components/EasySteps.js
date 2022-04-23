import React from "react";
import { Slide } from "react-awesome-reveal";

const EasySteps = () => {
  return (
    <div className="steps-section bg-custom-dark ">
      <div className="pt-2">
        <h1 className="text-center text-white pt-5">3 easy steps to complete your visa</h1>
      </div>
      <div className="containerd-none d-lg-block d-xl-block">
        <div className="container">
          <div className="container">
            <div className="container py-5">
              <div className="d-flex justify-content-around text-center py-4">
                <Slide direction="right" duration={2000}>
                  <div className="hero-req-circle circle-one d-flex align-items-center text-dark px-2">
                    <p className="my-4">
                      <i className="fa-solid fa-clipboard-list fa-3x"></i>
                      <br />
                      Complete Online Application Form
                    </p>
                  </div>
                </Slide>
                <div className="hero-req-circle circle-two d-flex align-items-center text-white px-2">
                  <p className="my-4">
                    <i className="fa-solid fa-file-invoice fa-3x"></i>
                    <br />
                    Make payment & provide documents
                  </p>
                </div>
                <Slide direction="left" duration={2000}>
                  <div className="hero-req-circle circle-three d-flex align-items-center text-white px-2">
                    <p className="my-4">
                      <i className="fa-solid fa-passport fa-3x"></i>
                      <br />
                      Receive your desired visa
                    </p>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
