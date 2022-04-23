import Layout from "../components/Layout";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Hero.css";
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
