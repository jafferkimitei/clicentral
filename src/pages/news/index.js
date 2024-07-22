import Head from 'next/head';
import NewsArticle from '../../components/NewsArticle';
import Sidebar from '../../components/Sidebar';
import newsArticles from '../../data/articles';

const NewsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
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
