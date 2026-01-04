import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import LazyImage from '../components/LazyImage';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaHero from '../components/MVFarmaHero';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="MVFarma - Kvalitní med z tradičního včelařství | Praha"
        description="MVFarma nabízí kvalitní med z čisté přírody Českomoravské vrchoviny pro Prahu a okolí. Květové a medovicové medy z 30 úlů. Rodinná tradice od roku 1956."
        keywords="med, včelařství, MVFarma, medovicový med, květový med, Praha, rodinná tradice, český med, med Praha"
        url="https://mvfarma.cz"
        type="website"
      />
      <StructuredData 
        type="LocalBusiness"
        data={{
          name: "MVFarma",
          description: "Rodinné včelařství s tradicí od roku 1956",
          url: "https://mvfarma.cz",
          telephone: "+420 730 540 072",
          email: "info@mvfarma.cz",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nový Bydžov",
            addressLocality: "Nový Bydžov",
            addressRegion: "Hradec Králové",
            postalCode: "504 01",
            addressCountry: "CZ"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 50.2406,
            longitude: 15.4853
          },
          openingHours: "Mo-Fr 08:00-17:00",
          priceRange: "200-300 CZK",
          image: "https://mvfarma.cz/lovable-uploads/hero-background-compressed.webp",
          sameAs: [
            "https://www.facebook.com/mvfarma",
            "https://www.instagram.com/mvfarma"
          ]
        }}
      />
      <MVFarmaHeader />
      <MVFarmaHero />
      
      {/* Product Preview Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-accent">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Naše medy</h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <ScrollAnimation animation="slide-in-left">
              <Link to="/medy-a-vcely" className="group block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center p-4">
                    <LazyImage 
                      src="/lovable-uploads/936cc78e-2a1f-49c7-ac34-a35ec7fe5d15.png"
                      alt="Jarní květový med z MVFarma - světlý med z jarních květů"
                      className="max-w-full max-h-full object-cover"
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Jarní květový med</h3>
                    <p className="text-muted-foreground mb-4">
                      Světlý med z jarních květů z luk a zahrad
                    </p>
                    <div className="text-2xl font-bold text-primary">200 Kč/950g</div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right" delay={100}>
              <Link to="/medy-a-vcely" className="group block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary flex items-center justify-center p-4">
                    <LazyImage 
                      src="/lovable-uploads/cba10f0a-8de3-4c22-898c-bcc76b96bc31.png"
                      alt="Letní květový med z MVFarma - tmavší med z letní sklizně"
                      className="max-w-full max-h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Letní květový med</h3>
                    <p className="text-muted-foreground mb-4">
                      Květový med z letní sklizně zejména z luk a lesů
                    </p>
                    <div className="text-2xl font-bold text-primary">220 Kč/950g</div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>

          {/* CTA Section */}
          <ScrollAnimation animation="fade-in">
            <div className="text-center bg-card/50 p-8 md:p-12 rounded-lg border border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Chcete se dozvědět více?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Navštivte naši farmu nebo si přečtěte více o našem včelařství
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/o-nas"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                >
                  O naší farmě
                </Link>
                <Link 
                  to="/blog"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                >
                  Náš blog
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default HomePage;