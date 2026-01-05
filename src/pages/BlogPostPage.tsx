import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MVFarmaHeader from "@/components/MVFarmaHeader";
import MVFarmaFooter from "@/components/MVFarmaFooter";

interface BlogPost {
  title: string;
  slug: string;
  coverUrl: string;
  excerpt: string;
  publishedAt: string;
  content?: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://mvfarma.cz/api/blog.php");
        const data = await response.json();
        const posts: BlogPost[] = data.posts || [];
        const foundPost = posts.find((p) => p.slug === slug);

        if (foundPost) {
          setPost(foundPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("cs-CZ", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MVFarmaHeader />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            ← Zpět na blog
          </Link>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-muted-foreground">Načítání článku...</div>
            </div>
          ) : notFound || !post ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-muted-foreground mb-4">
                Článek nebyl nalezen.
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              >
                Zpět na blog
              </Link>
            </div>
          ) : (
            <article>
              <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img
                  src={post.coverUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm text-muted-foreground mb-4">
                {formatDate(post.publishedAt)}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none text-foreground">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <p className="text-muted-foreground">{post.excerpt}</p>
                )}
              </div>
            </article>
          )}
        </div>
      </main>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPostPage;
