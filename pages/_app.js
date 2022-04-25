import Layout from "../components/Layout";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Hero.css";
import "../styles/OurServices.css";
import "../styles/Contact.css";
import "../styles/RequirementDetails.css";
import "../styles/Packages.css";
import "../styles/Footer.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
