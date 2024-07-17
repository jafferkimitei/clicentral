import Link from 'next/link';

const NewsArticle = ({ article }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md overflow-hidden mb-4">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-gray-500 text-sm mb-2">{article.date} | {article.category}</div>
        <h2 className="text-xl font-bold mb-2">
          <Link legacyBehavior href={`/news/${article.id}`}>
            <a className="hover:underline text-gray-800">{article.title}</a>
          </Link>
        </h2>
        <p className="text-gray-700">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
