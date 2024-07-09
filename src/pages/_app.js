// pages/_app.js

// Import necessary modules
import '../../styles/globals.css'; // Global styles
import Header from '../components/Header'; // Header component
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Next.js router

function MyApp({ Component, pageProps }) {
  // Example: Track page view with router events
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('Pageview:', url);
      // Add your analytics tracking here
    };

    // When the component mounts, subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      {/* Header component */}
      <Header />
      {/* Render the component based on the route */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
