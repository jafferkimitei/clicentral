import Head from 'next/head';
import Link from 'next/link';
import NewsArticle from '../../components/NewsArticle';
import Sidebar from '../../components/Sidebar';

const newsArticles = [
  {
    id: 1,
    title: 'Major Climate Change Conference Announced',
    description: 'World leaders will gather to discuss climate action strategies...',
    image: '/images/news1.jpg',
    category: 'Events',
    date: '2024-07-15',
  },
  {
    id: 2,
    title: 'New Research on Rising Sea Levels',
    description: 'A recent study shows alarming rates of sea level rise...',
    image: '/images/news2.jpg',
    category: 'Research',
    date: '2024-07-14',
  },
  {
    id: 3,
    title: 'Join our community in X(twitter)',
    description: 'World leaders will gather to discuss climate action strategies...',
    image: '/images/news1.jpg',
    category: 'Events',
    date: '2024-07-15',
  },
  {
    id: 4,
    title: 'Volunteer opportunities and ways to get involved',
    description: 'A recent study shows alarming rates of sea level rise...',
    image: '/images/news2.jpg',
    category: 'Research',
    date: '2024-07-14',
  },
];

const NewsPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>News | Clicentral</title>
        <meta name="description" content="Latest news on climate change and environmental actions." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/community-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Latest News</h1>
          <p className="mt-4 text-lg">Stay updated with the latest news on climate change and environmental actions</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto w-11/12 md:w-10/12 py-10">
        <div className="flex flex-wrap -mx-4">
          {/* News Articles */}
          <div className="w-full lg:w-8/12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles.map((article) => (
                <NewsArticle key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-4/12 px-4">
            <Sidebar newsArticles={newsArticles} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
