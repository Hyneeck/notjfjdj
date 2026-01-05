import { Link } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

// Temporary hardcoded posts data
const posts = [
  {
    id: 1,
    title: 'Jarní probuzení včelstev: Jak správně začít sezónu',
    slug: 'jarni-probuzeni-vcelstev',
    coverUrl: '/lovable-uploads/dbc0e436-d319-4d9b-a7f8-78847ac61863.png',
    excerpt: 'S příchodem jara se včelstva probouzejí k životu. Přinášíme vám tipy, jak správně připravit úly a zajistit zdravý start do nové sezóny.',
    publishedAt: '2026-01-03',
    category: 'Včelařství'
  },
  {
    id: 2,
    title: 'Tajemství kvalitního medu: Od úlu až na váš stůl',
    slug: 'tajemstvi-kvalitniho-medu',
    coverUrl: '/lovable-uploads/spring-honey-real.webp',
    excerpt: 'Kvalitní med je výsledkem pečlivé práce včelaře. Zjistěte, jak poznáte opravdu kvalitní produkt.',
    publishedAt: '2025-12-28',
    category: 'Med'
  },
  {
    id: 3,
    title: 'Propolis: Přírodní antibiotikum z úlu',
    slug: 'propolis-prirodni-antibiotikum',
    coverUrl: '/lovable-uploads/propolis.webp',
    excerpt: 'Propolis má úžasné léčivé vlastnosti. Přečtěte si, jak ho můžete využít ve svém životě.',
    publishedAt: '2025-12-15',
    category: 'Zdraví'
  },
  {
    id: 4,
    title: 'Zimování včelstev: Příprava na chladné měsíce',
    slug: 'zimovani-vcelstev',
    coverUrl: '/lovable-uploads/summer-honey-real.webp',
    excerpt: 'Správná příprava na zimu je klíčová pro přežití včelstev. Sdílíme naše osvědčené postupy.',
    publishedAt: '2025-11-20',
    category: 'Včelařství'
  },
  {
    id: 5,
    title: 'Včelí vosk a jeho využití v domácnosti',
    slug: 'vceli-vosk-vyuziti',
    coverUrl: '/lovable-uploads/vosk.webp',
    excerpt: 'Včelí vosk není jen na svíčky. Objevte jeho mnohostranné využití v péči o domácnost.',
    publishedAt: '2025-11-05',
    category: 'Tipy'
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
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Featured Post - Left Side (2/3) */}
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

            {/* Sidebar - Right Side (1/3) */}
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
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPage;
