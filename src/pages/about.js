
import Head from 'next/head';

const AboutPage = () => {
  return (
    <div>
        <Head>
        <title>About Clicentral</title>
        <meta name="description" content="A website focused on climate change awareness and action." />
      </Head>
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">About Us</h1>
        <p className="text-lg mt-4">Learn about our mission and goals regarding climate change.</p>
      </main>
    </div>
  );
};

export default AboutPage;
