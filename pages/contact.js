import React from "react";
import Image from "next/image";
import ContactImgOne from '../public/img/contact-us/contact-img-1.png'
import ContactImgTwo from '../public/img/contact-us/contact-img-2.png'
const contact = () => {
  return (
    <div className="contact-section  py-5 bg-custom-dark">
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <Image src={ContactImgOne} alt="contact trust holidays"/>
              </div>
              <div className="col-md-6">
              <Image src={ContactImgTwo} alt="contact trust holidays"/>
              </div>
          </div>
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.68662110873!2d90.37988003955078!3d23.7933096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59df44dd753%3A0x6d2f265d05d211c4!2sTrust%20Holidays!5e0!3m2!1sen!2sbd!4v1647145940485!5m2!1sen!2sbd"
              style={{ width: "100%", minHeight: "450px", border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default contact;
