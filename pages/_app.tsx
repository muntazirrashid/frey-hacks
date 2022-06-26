import '../styles/globals.css'
import Script from 'next/script';
import type { AppProps } from 'next/app'
// import FixedBottomNavigation from '../components/Footer.js';
import Footer from '../components/Footer';
import Header from '../components/header';
import Home from '../components/home';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header pathname="/" />
      <Script src="/modernizr.js" type="text/javascript" strategy="beforeInteractive" />
      <Home />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
