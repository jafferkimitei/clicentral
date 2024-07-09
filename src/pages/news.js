

const NewsPage = () => {
  // Replace with actual data fetching or dummy content
  const newsArticles = [
    { id: 1, title: 'Global Climate Summit 2024', content: '...' },
    { id: 2, title: 'New Study on Renewable Energy', content: '...' },
    { id: 3, title: 'Government Policies on Emission Reduction', content: '...' },
  ];

  return (
    <div>
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">News</h1>
        <div className="mt-4">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p className="mt-2">{article.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
