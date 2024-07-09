// src/pages/blog/[slug].js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Simulated data for demonstration
const posts = [
  { slug: 'understanding-climate-change', title: 'Understanding Climate Change', content: 'Detailed information about climate change.' },
  { slug: 'impact-on-wildlife', title: 'Impact of Climate Change on Wildlife', content: 'Effects of climate change on wildlife populations.' },
  // Add more posts as needed
];

const BlogPostPage = ({ post }) => {
  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <article className="mt-8">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="mt-4">{post.content}</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null;

  return {
    props: { post },
  };
}

export default BlogPostPage;
