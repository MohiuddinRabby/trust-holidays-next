import React, { useState } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";
import visaCategoryList from "../public/data/visaCategoryList";
import * as Yup from "yup";
import { Fade, Slide } from "react-awesome-reveal";
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
      <div className="primary-overlay text-white py-4">
        <div className="">
          <div className="container mt-5">
            <div className="hero-requirement-form py-5">
              <Slide direction="up" duration={3000}>
                <h1 className="font-weight-bold text-center text-spacing-two custom-primary-text">
                  Trust Holidays - Your Trusted Travel Partner
                </h1>
              </Slide>
              <Slide direction="down" duration={3000}>
                <h3 className="font-weight-bold text-center text-spacing-one">
                  NEED A VISA ?
                </h3>
              </Slide>
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
                      <Fade duration={3000}>
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
    </section>
  );
};

export default Hero;
