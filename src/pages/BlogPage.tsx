import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MVFarmaHeader from "@/components/MVFarmaHeader";
import MVFarmaFooter from "@/components/MVFarmaFooter";

interface BlogPost {
  title: string;
  slug: string;
  coverUrl: string;
  excerpt: string;
  publishedAt: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://mvfarma.cz/api/blog.php");
        const data = await response.json();
        const sortedPosts = (data.posts || []).sort(
          (a: BlogPost, b: BlogPost) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const featuredPost = posts[0];
  const olderPosts = posts.slice(1, 5);

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Blog
          </h1>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-muted-foreground">Načítání článků...</div>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-muted-foreground">
                Zatím nejsou k dispozici žádné články.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Post - 2/3 width */}
              {featuredPost && (
                <div className="lg:col-span-2">
                  <Link to={`/blog/${featuredPost.slug}`} className="block group">
                    <div className="bg-card rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={featuredPost.coverUrl}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-muted-foreground mb-2">
                          {formatDate(featuredPost.publishedAt)}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-3 mb-4">
                          {featuredPost.excerpt}
                        </p>
                        <span className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          Číst více
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Starší články
                </h3>
                <div className="space-y-4">
                  {olderPosts.length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                      Žádné další články.
                    </p>
                  ) : (
                    olderPosts.map((post, index) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div
                          className={`flex gap-4 pb-4 ${
                            index < olderPosts.length - 1
                              ? "border-b border-border"
                              : ""
                          }`}
                        >
                          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                            <img
                              src={post.coverUrl}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {formatDate(post.publishedAt)}
                            </p>
                            <span className="text-sm text-primary font-medium mt-2 inline-block">
                              Více →
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPage;
