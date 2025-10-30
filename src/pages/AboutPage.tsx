import React from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="O naší farmě - MVFarma | Rodinné včelí farma"
        description="Seznamte se s MVFarma - rodinným včelařstvím z Nového Bydžova. Naše příběh, tradice a vášeň pro včelařství a výrobu kvalitního medu."
        keywords="MVFarma, včelařství, rodinná farma, Nový Bydžov, tradice, včelaři"
        url="https://mvfarma.cz/o-nas"
      />
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/ee1c2855-0e47-4b86-acc3-a1d23cc1f1e2.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Naše Farma
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Poznajte příběh naší rodinné farmy a našich včel
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="slide-in-left">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/54f5fbc3-f416-48e1-a918-3d7af5366e79.png"
                  alt="Včelnice v lese"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Náš příběh
                </h2>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Naše včelařská cesta začala před mnoha lety, když jsme ještě jako děti pomáhali příbuzným na venkově s péčí o včely. Tehdy se ještě včelařilo tradičními metodami, přiměřenými době. Zde jsme získali zkušenosti, lásku ke včelám a cit k jejím ošetřováním. Později jsme se rozhodli navázat na rodinnou tradici včelaření.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">Několik generací zkušeností</div>
    
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Our Beehives Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="slide-in-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Naše včelstva
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Používáme moderní metody, které aplikujeme s úctou k přírodě a s respektem k tradičním postupům. Dnes se staráme o desítky včelstev na dvou stanovištích na venkovské zahradě a v lese, kde včely nalézají pestrou paletu květů a rostlin pro tvorbu toho nejkvalitnějšího medu.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  V zootechnice je pro nás důležité přirozené prostředí pro včelstva s využití všech moderních poznatků. Používáme moderní nástavkový systém, který máme zateplený ovčí vlnou.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/95c59643-961e-4414-bbd5-a207ff310f53.png"
                  alt="Včelařka s plástí medu"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Our Values Section */}
          <ScrollAnimation animation="fade-in">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">
                Naše hodnoty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Příroda</h3>
                  <p className="text-muted-foreground">
                    Respektujeme přirozené cykly a pracujeme v souladu s přírodou
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Kvalita</h3>
                  <p className="text-muted-foreground">
                    Nikdy neděláme kompromisy v kvalitě našich produktů
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Tradice</h3>
                  <p className="text-muted-foreground">
                    Používáme osvědčené postupy předávané generacemi
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default AboutPage;