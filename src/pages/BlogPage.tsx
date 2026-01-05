import { Link } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

// TODO: Replace with actual data source (API, CMS, database, etc.)
const posts: BlogPost[] = [];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('cs-CZ', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

const BlogPage = () => {
  // Sort by newest first
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  const featuredPost = sortedPosts[0];
  const sidebarPosts = sortedPosts.slice(1, 5);

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-5 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Články a novinky
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 max-w-6xl">
          
          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">
                Zatím zde nejsou žádné články.
              </p>
              <p className="text-muted-foreground">
                Připravujeme pro vás zajímavý obsah.
              </p>
            </div>
          )}

          {/* Posts Grid */}
          {posts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Featured Post - Left Side (2/3) */}
              {featuredPost && (
                <div className="lg:col-span-2">
                  <article className="group">
                    <Link to={`/blog/${featuredPost.slug}`} className="block">
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-6 bg-muted">
                        <img 
                          src={featuredPost.coverUrl} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="eager"
                        />
                      </div>
                    </Link>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={featuredPost.publishedAt}>
                          {formatDate(featuredPost.publishedAt)}
                        </time>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    <Button asChild>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Číst více
                      </Link>
                    </Button>
                  </article>
                </div>
              )}

              {/* Sidebar - Right Side (1/3) */}
              {sidebarPosts.length > 0 && (
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                    Starší články
                  </h3>
                  
                  <div className="space-y-0 divide-y divide-border">
                    {sidebarPosts.map((post) => (
                      <article key={post.id} className="py-4 first:pt-0 group">
                        <div className="flex gap-4">
                          <Link to={`/blog/${post.slug}`} className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted">
                              <img 
                                src={post.coverUrl} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                            </div>
                          </Link>
                          
                          <div className="flex-1 min-w-0">
                            <Link to={`/blog/${post.slug}`}>
                              <h4 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors text-sm">
                                {post.title}
                              </h4>
                            </Link>
                            
                            <div className="flex items-center justify-between">
                              <time 
                                dateTime={post.publishedAt} 
                                className="text-xs text-muted-foreground"
                              >
                                {formatDate(post.publishedAt)}
                              </time>
                              
                              <Link 
                                to={`/blog/${post.slug}`}
                                className="text-xs font-medium text-primary hover:underline"
                              >
                                Více →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPage;
