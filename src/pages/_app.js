
import '../../styles/globals.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/NavBar'; 
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router'; 

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('Pageview:', url);
      // Add your analytics tracking here
    };

    
    router.events.on('routeChangeComplete', handleRouteChange);

  
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};


export default MyApp;
