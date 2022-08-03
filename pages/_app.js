import '../styles/globals.css'
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from "next/head";
import Script from 'next/script'
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
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4XJ42L');`}}></script>
        </Head>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4XJ42L"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>

  );
}


export default MyApp
