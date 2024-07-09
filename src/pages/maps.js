// src/pages/maps.js
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MapsPage = () => {
  return (
    <div>
        <NavBar />
        <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Maps</h1>
        <p className="text-lg mt-4">Explore interactive maps showing climate data and impacts.</p>
        {/* Add interactive map components or embed maps */}
      </main>
      <Footer />
    </div>
  );
};

export default MapsPage;
