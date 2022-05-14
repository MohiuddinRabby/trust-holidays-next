import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Layout = ({ children }) => {
  // 285211272432211 - page code - trust holidays
  //developer code - 5157237834392316 - from reza sir's fb account
  // testing purposes site - https://melodious-monstera-afe190.netlify.app/
  /**
   * pageId="102656942454838"
     appId="186297763311492"
     for testing purpose page

   */
  return (
    <>
      <Header />
      <MessengerCustomerChat
        pageId="285211272432211"
        appId="5157237834392316"
        // htmlRef="<REF_STRING>"
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
