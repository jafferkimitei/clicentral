

const BlogIndexPage = () => {
  // Replace with actual data fetching or dummy content
  const posts = [
    { id: 1, slug: 'understanding-climate-change', title: 'Understanding Climate Change', content: '...' },
    { id: 2, slug: 'impact-on-wildlife', title: 'Impact of Climate Change on Wildlife', content: '...' },
    // Add more posts as needed
  ];

  return (
    <div>
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="mt-2">{post.content}</p>
              <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogIndexPage;
