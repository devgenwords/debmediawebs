import '../styles/globals.css'
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function MyApp({ Component, pageProps }) {
  return (
    <>
     <Layout>
      <Head>
        <title>Debmedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
    </>
   
  );
}


export default MyApp
