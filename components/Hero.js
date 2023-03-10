import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import MaldivesImg from "../public/img/popular-places/popular-destination-1.png";
import DubaiImg from "../public/img/popular-places/popular-destination-2.png";
import SajekImg from "../public/img/popular-places/popular-destination-3.png";
import CurrencyLogo from "../public/img/popular-places/tk-logo.png";
import Image from "next/image";
import OnlineApplication from "../public/img/steps-for-visa/online-application.png";
import Payment from "../public/img/steps-for-visa/payment.png";
import VisaImg from "../public/img/steps-for-visa/visa.png";
import { useRouter } from "next/router";
import {
  getCitizen,
  getCountries,
  getVisaCategories,
} from "../pages/api/trustApis";
const validationSchema = Yup.object().shape({
  visaCategory: Yup.object().shape({
    value: Yup.string().required("please select value"),
    label: Yup.string().required("please select value"),
  }),
});
const initialValues = {
  citizenOf: "",
  countryName: "",
  visaCategory: "",
};
const Hero = () => {
  // citizen api state
  const [citizen, setCitizen] = useState();
  // country api state
  const [countryList, setCountry] = useState();
  // visa category api state
  const [visaCategories, setVisaCategories] = useState();
  // custom style for react-select values color
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "yellow" : "#000",
    }),
  };
  // router
  const router = useRouter();

  useEffect(() => {
    getCitizen(setCitizen);
    getCountries(setCountry);
    getVisaCategories(setVisaCategories);
  }, []);
  return (
    <>
      <section id="showcase">
        <div className="primary-overlay">
          <div className="container-fluid">
            <div className="row py-5">
              <div className="col-lg-4 d-none d-lg-block text-white">
                <Bounce duration={2000}>
                  <h2 className="text-capitalize text-center pb-4 styled-header text-white">
                    <strong>3</strong> easy steps for
                    <strong className="text-uppercase text-spacing-three">
                      &nbsp;visa
                    </strong>
                  </h2>
                </Bounce>
                <Zoom duration={2000}>
                  <div className="text-center pb-3">
                    {/* <i className="fa-solid fa-file-circle-check fa-3x"></i> */}
                    <Image
                      src={OnlineApplication}
                      alt="online application"
                      width={70}
                      height={70}
                    />
                    <h4 className="">Complete online application form</h4>
                  </div>
                </Zoom>
                <Zoom duration={2000}>
                  <div className="text-center pb-3">
                    {/* <i className="fa-solid fa-file-invoice fa-3x"></i> */}
                    <Image
                      src={Payment}
                      alt="online application"
                      width={70}
                      height={70}
                    />
                    <h4 className="">Make payment & provide documents</h4>
                  </div>
                </Zoom>
                <Zoom duration={2000}>
                  <div className="text-center">
                    {/* <i className="fa-solid fa-passport fa-3x"></i> */}
                    <Image
                      src={VisaImg}
                      alt="online application"
                      width={70}
                      height={70}
                    />
                    <h4 className="">Receive your desired visa</h4>
                  </div>
                </Zoom>
              </div>
              <div className="col-lg-8 py-2">
                <div className="hero-requirement-form text-white">
                  <div className="text-center">
                    <h2 className="custom-primary-text font-weight-bold text-spacing-two">
                      Trust Holidays - Your Trusted Travel Partner
                    </h2>
                    <h3 className="text-spacing-three">Need A Visa ?</h3>
                    <p className="text-spacing-three">
                      Please Check Requirements Here
                    </p>
                  </div>
                  <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      router.push({
                        pathname: "/requirementDetails",
                        query: {
                          countryID: values?.countryName?.value,
                          countryName: values?.countryName?.label,
                          visaCategoryID: values?.visaCategory?.value,
                          visaCategoryName: values?.visaCategory?.label,
                        },
                      });
                      resetForm();
                    }}
                  >
                    {({
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      setFieldValue,
                      isValid,
                    }) => (
                      <>
                        <Form>
                          <Fade duration={3000}>
                            <div className="row">
                              <div className="col-lg-4">
                                <label>I am a citizen of</label>
                                <Select
                                  name="citizenOf"
                                  styles={customStyles}
                                  onChange={(valueOption) => {
                                    setFieldValue("citizenOf", valueOption);
                                  }}
                                  value={values?.citizenOf}
                                  options={citizen}
                                  errors={errors}
                                  placeholder="Citizen"
                                />
                              </div>
                              <div className="col-lg-4">
                                <label>Choose Destination</label>
                                <Select
                                  name="countryName"
                                  styles={customStyles}
                                  onChange={(valueOption) => {
                                    setFieldValue("countryName", valueOption);
                                  }}
                                  value={values?.countryName}
                                  options={countryList}
                                  errors={errors}
                                  placeholder="Select Country"
                                />
                              </div>
                              <div className="col-lg-4">
                                <label>Visa Category</label>
                                <Select
                                  name="visaCategory"
                                  styles={customStyles}
                                  onChange={(valueOption) => {
                                    setFieldValue("visaCategory", valueOption);
                                  }}
                                  value={values?.visaCategory}
                                  options={visaCategories}
                                  placeholder="Select Visa Category"
                                />
                              </div>
                            </div>
                          </Fade>
                          <div className="text-center py-4">
                            <button
                              type="submit"
                              className="btn btn-light btn-sm btn-custom-block"
                            >
                              Check Requirement
                            </button>
                          </div>
                        </Form>
                      </>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-places container-fluid bg-custom-dark text-uppercase text-center space-texts-two">
        <h1 className="bold-header text-white text-spacing-two pp-header py-5 styled-header">
          BEST TOUR PACKAGE OFFERS FOR 2022
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
                    <h4>49,000 /-</h4>
                  </div>
                </div>
                <div className="py-3">
                  <button className="btn custom-primary-btn text-spacing-three font-weight-bold">
                    Book Now
                  </button>
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
                  dubai city
                  <span className="text-yellow">/ 5 days</span>
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
                    <h4>59,500 /-</h4>
                  </div>
                </div>
                <div className="py-3">
                  <button className="btn custom-primary-btn text-spacing-three font-weight-bold">
                    Book Now
                  </button>
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
                <h5 className="mt-3 font-weight-bold">Turkey</h5>
                <p className="lead">
                  Istanbul, Bursa
                  <span className="text-yellow">/ 5 days</span>
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
                    <h4>95,900 /-</h4>
                  </div>
                </div>
                <div className="py-3">
                  <button className="btn custom-primary-btn text-spacing-three font-weight-bold">
                    Book Now
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
