import Layout from "../components/Layout";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Hero.css";
import "../styles/PopularPlaces.css";
import "../styles/EasySteps.css";
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
