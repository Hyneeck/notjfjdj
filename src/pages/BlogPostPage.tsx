import { Link, useParams, Navigate } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';

// Same temporary posts data as BlogPage
const posts = [
  {
    id: 1,
    title: 'Jarní probuzení včelstev: Jak správně začít sezónu',
    slug: 'jarni-probuzeni-vcelstev',
    coverUrl: '/lovable-uploads/dbc0e436-d319-4d9b-a7f8-78847ac61863.png',
    excerpt: 'S příchodem jara se včelstva probouzejí k životu. Přinášíme vám tipy, jak správně připravit úly a zajistit zdravý start do nové sezóny.',
    publishedAt: '2026-01-03',
    category: 'Včelařství',
    content: `
      <p>S příchodem prvních teplých dnů se včelstva pomalu probouzejí ze zimního klidu. Pro včelaře nastává jedno z nejdůležitějších období roku – jarní revize a příprava na novou sezónu.</p>
      
      <h2>Kdy začít s jarní revizí?</h2>
      <p>Ideální doba pro první jarní kontrolu je, když venkovní teplota dosáhne alespoň 12-14 °C. Včely by měly již aktivně létat a přinášet první pyl z jívy a lísky.</p>
      
      <h2>Na co se zaměřit při první kontrole?</h2>
      <ul>
        <li><strong>Síla včelstva</strong> – Kolik rámků včely obsedají?</li>
        <li><strong>Zásoby medu</strong> – Mají včely dostatek potravy?</li>
        <li><strong>Přítomnost matky</strong> – Hledáme vajíčka a mladé larvičky</li>
        <li><strong>Zdravotní stav</strong> – Kontrola na známky nemocí</li>
      </ul>
      
      <h2>Přikrmování na jaře</h2>
      <p>Pokud má včelstvo nedostatek zásob, je třeba přikrmit cukrovým sirupem nebo medocukrovým těstem. Nikdy nenechávejte včelstva hladovět – na jaře potřebují hodně energie pro rozvoj.</p>
      
      <h2>Rozšíření prostoru</h2>
      <p>S rostoucím počtem včel a přínosem nektaru je třeba postupně přidávat nové rámky. Včas rozšiřujte prostor, aby včelstvo nemělo tendenci k rojení.</p>
      
      <p>Pečlivá jarní příprava je základem úspěšné včelařské sezóny. Věnujte svým včelám dostatek pozornosti a oni vám to vrátí bohatou úrodou medu.</p>
    `
  },
  {
    id: 2,
    title: 'Tajemství kvalitního medu: Od úlu až na váš stůl',
    slug: 'tajemstvi-kvalitniho-medu',
    coverUrl: '/lovable-uploads/spring-honey-real.webp',
    excerpt: 'Kvalitní med je výsledkem pečlivé práce včelaře. Zjistěte, jak poznáte opravdu kvalitní produkt.',
    publishedAt: '2025-12-28',
    category: 'Med',
    content: `
      <p>Med je jedním z nejstarších sladidel, které lidstvo zná. Ale ne každý med je stejný. Kvalita závisí na mnoha faktorech, od zdraví včelstev až po způsob zpracování.</p>
      
      <h2>Jak poznáte kvalitní med?</h2>
      <p>Kvalitní med by měl být čistý, bez příměsí a měl by mít charakteristickou vůni odpovídající jeho původu. Krystalizace je přirozený proces a svědčí o pravosti medu.</p>
      
      <h2>Proč kupovat od místních včelařů?</h2>
      <p>Místní med obsahuje pyl z vašeho okolí, což může pomoci při alergiích. Navíc podporujete lokální včelaře a máte jistotu čerstvosti a kvality.</p>
    `
  },
  {
    id: 3,
    title: 'Propolis: Přírodní antibiotikum z úlu',
    slug: 'propolis-prirodni-antibiotikum',
    coverUrl: '/lovable-uploads/propolis.webp',
    excerpt: 'Propolis má úžasné léčivé vlastnosti. Přečtěte si, jak ho můžete využít ve svém životě.',
    publishedAt: '2025-12-15',
    category: 'Zdraví',
    content: `
      <p>Propolis, známý také jako včelí tmel, je pryskyřičná látka, kterou včely sbírají z pupenů stromů a zpracovávají pro ochranu úlu.</p>
      
      <h2>Léčivé účinky propolisu</h2>
      <p>Propolis má silné antibakteriální, antivirové a protizánětlivé účinky. Používá se při nachlazení, bolestech v krku a k posílení imunity.</p>
      
      <h2>Jak propolis používat?</h2>
      <p>Propolis je k dispozici ve formě tinktury, kapek, mastí nebo jako součást různých doplňků stravy. Při prvním použití vyzkoušejte malé množství kvůli možným alergiím.</p>
    `
  },
  {
    id: 4,
    title: 'Zimování včelstev: Příprava na chladné měsíce',
    slug: 'zimovani-vcelstev',
    coverUrl: '/lovable-uploads/summer-honey-real.webp',
    excerpt: 'Správná příprava na zimu je klíčová pro přežití včelstev. Sdílíme naše osvědčené postupy.',
    publishedAt: '2025-11-20',
    category: 'Včelařství',
    content: `
      <p>Zimování včelstev je kritické období, které rozhoduje o úspěchu celého příštího roku. Dobře připravené včelstvo přečká i tuhé mrazy.</p>
      
      <h2>Kdy začít s přípravou?</h2>
      <p>S přípravou na zimu začínáme již v srpnu po posledním medobraní. Včelstva potřebují dostatek času na vytvoření zimních zásob.</p>
      
      <h2>Klíčové kroky pro úspěšné zimování</h2>
      <ul>
        <li>Léčba proti varroáze</li>
        <li>Doplnění zimních zásob</li>
        <li>Zúžení česna</li>
        <li>Zateplení úlu</li>
      </ul>
    `
  },
  {
    id: 5,
    title: 'Včelí vosk a jeho využití v domácnosti',
    slug: 'vceli-vosk-vyuziti',
    coverUrl: '/lovable-uploads/vosk.webp',
    excerpt: 'Včelí vosk není jen na svíčky. Objevte jeho mnohostranné využití v péči o domácnost.',
    publishedAt: '2025-11-05',
    category: 'Tipy',
    content: `
      <p>Včelí vosk je úžasný přírodní materiál s mnoha využitími. Od svíček přes kosmetiku až po péči o nábytek.</p>
      
      <h2>Využití včelího vosku</h2>
      <ul>
        <li><strong>Svíčky</strong> – Voňavé a čistě hořící</li>
        <li><strong>Kosmetika</strong> – Balzámy na rty, krémy</li>
        <li><strong>Voskované ubrousky</strong> – Ekologická náhrada fólie</li>
        <li><strong>Péče o dřevo</strong> – Leští a chrání nábytek</li>
      </ul>
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
