// src/pages/donate.js
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DonatePage = () => {
  return (
    <div>
        <NavBar />
        <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Donate</h1>
        <p className="text-lg mt-4">Support our cause by making a donation.</p>
        {/* Add donation options, payment forms, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default DonatePage;
