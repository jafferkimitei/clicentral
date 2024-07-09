// src/pages/index.js
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Welcome to the Clicentral</h1>
        <p className="text-lg mt-4">This website is dedicated to raising awareness about climate change.</p>
      </main>
      <Footer />
    </div>
  );
}
