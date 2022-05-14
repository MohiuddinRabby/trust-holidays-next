import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MessengerCustomerChat
        pageId="102656942454838"
        appId="186297763311492"
        // htmlRef="<REF_STRING>"
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
