import React, { useState } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";
import visaCategoryList from "../public/data/visaCategoryList";
import * as Yup from "yup";
import { Slide } from "react-awesome-reveal";
const validationSchema = Yup.object().shape({
  visaCategory: Yup.object().shape({
    label: Yup.string().required("required"),
    value: Yup.string().required("required"),
  }),
});
const initialValues = {
  citizenOf: "",
  visaCategory: "",
};
const Hero = () => {
  const [visaCategory, setVisaCategory] = useState(visaCategoryList);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "yellow" : "#000",
    }),
  };
  return (
    <section id="showcase">
      <div className="primary-overlay text-white">
        <div className="mt-5">
          <div className="container mt-5">
            <div className="hero-requirement-form py-5">
              <h1 className="font-weight-bold text-center mb-5 text-spacing-two custom-primary-text">
                Trust Holidays - Your Trusted Travel Partner
              </h1>
              <h3 className="font-weight-bold text-center mb-4 text-spacing-one">
                NEED A VISA ?
              </h3>
              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setItemsTrue();
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
                      <div className="row">
                        <div className="col-md-4">
                          <label>I am a citizen of</label>
                          <Select
                            name="citizenOf"
                            styles={customStyles}
                            onChange={(valueOption) => {
                              setFieldValue("citizenOf", valueOption);
                            }}
                            options={[{ value: 1, label: "Bangladesh" }]}
                            value={values?.citizenOf}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Choose Destination</label>
                          <Select
                            name="visaCategory"
                            styles={customStyles}
                            onChange={(valueOption) => {
                              setFieldValue("visaCategory", valueOption);
                            }}
                            value={values?.visaCategory}
                            options={visaCategory}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Visa Category</label>
                          <Select
                            name="visaCategory"
                            onChange={(valueOption) => {
                              setFieldValue("visaCategory", valueOption);
                            }}
                            value={values?.visaCategory}
                            options={visaCategory}
                          />
                        </div>
                      </div>
                      <div className="mt-5 text-center">
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
            <div className="container pt-4 d-none d-lg-block d-xl-block">
              <h3 className="font-weight-bold text-center mt-5 text-spacing-two pt-5">
                3 EASY STEPS TO GET YOUR VISA DONE
              </h3>
              <div className="container">
                <div className="container">
                  <div className="container">
                    <div className="d-flex justify-content-around text-center py-4">
                      <Slide direction="right" duration={2000}>
                        <div className="hero-req-circle circle-one d-flex align-items-center text-dark px-2">
                          <p className="mt-3">
                            <i className="fa-solid fa-clipboard-list fa-3x"></i>
                            <br />
                            Complete Online Application Form
                          </p>
                        </div>
                      </Slide>
                      <div className="hero-req-circle circle-two d-flex align-items-center text-white px-2">
                        <p className="mt-3">
                          <i className="fa-solid fa-file-invoice fa-3x"></i>
                          <br />
                          Make payment & provide documents
                        </p>
                      </div>
                      <Slide direction="left" duration={2000}>
                        <div className="hero-req-circle circle-three d-flex align-items-center text-white px-2">
                          <p className="mt-3">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
