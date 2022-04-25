import React from "react";
import Image from "next/image";
import ContactImgOne from "../public/img/contact-us/contact-img-1.png";
import ContactImgTwo from "../public/img/contact-us/contact-img-2.png";
import { Fade } from "react-awesome-reveal";
const contact = () => {
  return (
    <div className="contact-section bg-custom-dark">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.68662110873!2d90.37988003955078!3d23.7933096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59df44dd753%3A0x6d2f265d05d211c4!2sTrust%20Holidays!5e0!3m2!1sen!2sbd!4v1647145940485!5m2!1sen!2sbd"
        style={{ width: "100%", minHeight: "400px", border: "0" }}
        allowFullScreen="true"
        loading="lazy"
      ></iframe>
      <div className="container">
        <Fade duration={2000}>
          <h1 className="styled-header text-center text-white pt-5 ">
            Contact Us
          </h1>
          <h4 className="text-center py-2">
            Trust Holiday is one of the leading tour and travel agencies in
            Bangladesh, with over 100+ packages. Book travel packages and enjoy
            your holidays with a distinctive experience.
          </h4>
        </Fade>
        <div className="row py-5">
          <div className="col-lg-4">
            <h5 className="font-weight-bold text-white">
              Corporate Office Address
            </h5>
            <Fade duration={2000}>
              <h6>Old DOHS ( Banani )</h6>
              <h6>Dhaka, 1213</h6>
              <h6>Bangladesh</h6>
            </Fade>
          </div>
          <div className="col-lg-4">
            <h5 className="font-weight-bold text-white">Contact</h5>
            <h5>For visa information/processing</h5>
            <Fade duration={2000}>
              <h6>01315 302350</h6>
              <h6>01707 928979</h6>
              <h6>01407 635184</h6>
              <h5>For tour/package</h5>
              <h6>01315 302350</h6>
              <h6>01707 928979</h6>
              <h6>01407 635183</h6>
              <h6>01407 635184</h6>
              <h6>01320 381166</h6>
              <h6>01315 302351</h6>
            </Fade>
          </div>
          <div className="col-lg-4">
            <h5 className="font-weight-bold text-white">Follow us</h5>
            <Fade duration={2000}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTrustHolidays&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="300"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
