// src/pages/community.js
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CommunityPage = () => {
  return (
    <div>
        <NavBar />
        <Header />
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Community</h1>
        <p className="text-lg mt-4">Join our community efforts to combat climate change!</p>
        {/* Add community engagement sections, forums, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
