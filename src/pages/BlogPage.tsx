import { Link } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

// Blog posts data
const posts = [
  {
    id: 1,
    title: 'Získali jsme certifikát "Med jak má být" s pečetí VÚVč Dol',
    slug: 'med-jak-ma-byt-certifikat',
    coverUrl: '/lovable-uploads/med-jak-ma-byt-certificate.jpg',
    excerpt: 'S radostí oznamujeme, že náš květový med ze stanoviště Střihov získal prestižní certifikát "Med jak má být" s pečetí Výzkumného ústavu včelařského v Dole.',
    publishedAt: '2025-05-17',
    category: 'Certifikace'
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('cs-CZ', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

const BlogPage = () => {
  const featuredPost = posts[0];

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/dbc0e436-d319-4d9b-a7f8-78847ac61863.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Novinky ze světa včelařství a medových produktů
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="grid grid-cols-1 gap-8">
            
            {/* Featured Post */}
            <div>
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

          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPage;
