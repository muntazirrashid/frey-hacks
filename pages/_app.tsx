import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import FixedBottomNavigation from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <FixedBottomNavigation />
    </>
  );
}

export default MyApp
