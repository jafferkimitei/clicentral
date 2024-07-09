// src/pages/about.js

import Head from 'next/head';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
        <Head>
        <title>About Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      <NavBar />
      <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">About Us</h1>
        <p className="text-lg mt-4">Learn about our mission and goals regarding climate change.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
