import { useRouter } from 'next/router';
import Head from 'next/head';

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

const NewsArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = newsArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100">
      <Head>
        <title>{article.title} | Clicentral</title>
        <meta name="description" content={article.description} />
      </Head>

      <main className="container mx-auto w-11/12 md:w-10/12 py-10">
        <article className="bg-primary rounded-lg shadow-md p-4">
          <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{article.title}</h1>
          <div className="text-gray-500 text-sm mb-4">{article.date} | {article.category}</div>
          <p className="text-gray-700">{article.description}</p>
        </article>
      </main>
    </div>
  );
};

export default NewsArticlePage;
