import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import newsArticles from '../../data/articles';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const NewsArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = newsArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Loading...</p>;
  }

  const relatedArticles = newsArticles
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{article.title} | Clicentral</title>
        <meta name="description" content={article.description} />
      </Head>

      <main className="container mx-auto w-11/12 md:w-10/12 py-10">
        <article className="bg-white rounded-lg shadow-md p-6 mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={800} // Adjust to match the actual image dimensions
            height={450} // Adjust to match the actual image dimensions
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{article.title}</h1>
          <div className="text-gray-500 text-sm mb-4">
            {article.date} | {article.category}
          </div>
          <p className="text-gray-700 mb-6">{article.description}</p>
          <div className="flex justify-between items-center">
            <div className="text-gray-600">By {article.author}</div>
            <div className="flex space-x-4">
              <FaFacebook className="text-blue-600 cursor-pointer" />
              <FaTwitter className="text-blue-400 cursor-pointer" />
              <FaLinkedin className="text-blue-700 cursor-pointer" />
            </div>
          </div>
        </article>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <div key={related.id} className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={related.image}
                  alt={related.title}
                  width={400} // Adjust to fit your design
                  height={225} // Adjust to fit your design
                  className="w-full h-full object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-bold text-gray-800">{related.title}</h3>
                <p className="text-gray-600 text-sm">{related.date} | {related.category}</p>
                <a href={`/news/${related.id}`} className="text-blue-500 hover:underline mt-2 block">Read More</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsArticlePage;
