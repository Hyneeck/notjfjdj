import { Link, useParams, Navigate } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';

// Blog posts data
const posts = [
  {
    id: 1,
    title: 'Získali jsme certifikát "Med jak má být" s pečetí VÚVč Dol',
    slug: 'med-jak-ma-byt-certifikat',
    coverUrl: '/lovable-uploads/med-jak-ma-byt-certificate.jpg',
    excerpt: 'S radostí oznamujeme, že náš květový med ze stanoviště Střihov získal prestižní certifikát "Med jak má být" s pečetí Výzkumného ústavu včelařského v Dole.',
    publishedAt: '2025-05-17',
    category: 'Certifikace',
    content: `
      <p>S hrdostí vám oznamujeme, že náš květový med ze stanoviště Střihov získal prestižní certifikát <strong>"Med jak má být"</strong> s pečetí Výzkumného ústavu včelařského v Dole (VÚVč Dol).</p>
      
      <h2>Co certifikát znamená?</h2>
      <p>Certifikát "Med jak má být" je zárukou nejvyšší kvality českého medu. Získání tohoto oprávnění znamená, že náš med splňuje přísné kvalitativní normy stanovené VÚVč Dol.</p>
      
      <h2>Detaily certifikace</h2>
      <ul>
        <li><strong>Druh medu:</strong> Květový med</li>
        <li><strong>Stanoviště:</strong> Střihov</li>
        <li><strong>Certifikované množství:</strong> 500 kg</li>
        <li><strong>Datum vytáčení:</strong> 17. května 2025</li>
        <li><strong>Protokol VÚVč:</strong> 2531/2025</li>
      </ul>
      
      <h2>Proč je to důležité?</h2>
      <p>Certifikace VÚVč Dol je jedním z nejprestižnějších ocenění pro české včelaře. Garantuje, že med je pravý, nefalšovaný a vyrobený podle tradičních postupů s důrazem na kvalitu a přírodní složení.</p>
      
      <p>Děkujeme všem našim zákazníkům za důvěru a těšíme se, že vám můžeme nabídnout med té nejvyšší kvality!</p>
    `
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

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={post.coverUrl} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-5 max-w-3xl">
          
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Zpět na blog
          </Link>
          
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zpět na blog
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPostPage;
