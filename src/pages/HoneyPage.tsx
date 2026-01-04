import React from "react";
import MVFarmaHeader from "../components/MVFarmaHeader";
import MVFarmaFooter from "../components/MVFarmaFooter";
import ScrollAnimation from "../components/ScrollAnimation";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import LazyImage from "../components/LazyImage";
import { Flower2, TreePine, Heart, Leaf, Award, Droplets, Flame } from "lucide-react";

const HoneyPage = () => {
  const honeyTypes = [
    {
      title: "Květový med",
      description: "Květový med z jarních luk a zahrad, má světlou barvu a jemnější chuť. Obsahuje pyl.",
      icon: Flower2,
      features: ["Jemná sladká chuť", "Světlá barva", "Přirozená krystalizace"],
      image: "/lovable-uploads/07c40aab-8545-48c0-ae1d-5c7f97377747.png",
      alt: "Jarní květový med z MVFarma - světlý med z jarních květů",
    },
    {
      title: "Medovicový med",
      description: "Medovicový med má lehce tmavší barvu než jarní. Obsahuje více minerálů.",
      icon: TreePine,
      features: ["Pikantnější chuť", "Tmavší barva", "Dlouhá trvanlivost"],
      image: "/lovable-uploads/c3bb5d04-af5a-43ee-bda0-4b67e3f28984.png",
      alt: "Letní květový med z MVFarma - tmavší med z letní sklizně",
    },
    {
      title: "Propolis",
      description:
        "Přírodní včelí propolis je antibakteriální látka, kterou včely používají k ochraně úlu. Známý pro své léčivé účinky.",
      icon: Droplets,
      features: ["Antibakteriální účinky", "Posiluje imunitu", "100% přírodní"],
      image: "/lovable-uploads/propolis.jpeg",
      alt: "Propolis z MVFarma - přírodní včelí produkt",
    },
    {
      title: "Včelí vosk",
      description: "Čistý včelí vosk z našich úlů. Ideální pro výrobu svíček, kosmetiky nebo k použití v domácnosti.",
      icon: Flame,
      features: ["Přírodní materiál", "Pro výrobu svíček", "Kosmetické využití"],
      image: "/lovable-uploads/vosk.jpeg",
      alt: "Včelí vosk z MVFarma - přírodní včelí vosk",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Medy a včely - MVFarma | Květový a medovicový med z tradičního včelařství"
        description="Objevte kvalitní med z MVFarma - jarní a letní květový med z 30 úlů v Českomoravské vrchovině. Tradiční výroba, šetrné stáčení."
        keywords="jarní květový med, letní květový med, medovicový med, včelařství, MVFarma, med z lesa, med z luk, český med, tradiční výroba"
        url="https://mvfarma.cz/medy-a-vcely"
        type="product"
      />
      <StructuredData
        type="Product"
        data={{
          name: "Květový med MVFarma",
          description: "Kvalitní květový med z tradičního včelařství",
          brand: {
            "@type": "Brand",
            name: "MVFarma",
          },
          offers: [
            {
              "@type": "Offer",
              price: "200",
              priceCurrency: "CZK",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
          ],
          image: "https://mvfarma.cz/lovable-uploads/honey-jar-optimized.webp",
        }}
      />
      <MVFarmaHeader />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/dbc0e436-d319-4d9b-a7f8-78847ac61863.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Medy a včely</h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Objevte svět našich včel a kvalitních medů z čisté přírody
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Honey Types Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 max-w-[1100px]">
          <div className="flex flex-col gap-20">
            {honeyTypes.map((honey, index) => {
              const isReversed = index % 2 === 1;
              return (
                <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                  <div
                    className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-secondary/10">
                        <LazyImage
                          src={honey.image}
                          alt={honey.alt}
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    
                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{honey.title}</h2>
                      <p className="text-lg text-foreground mb-6 leading-relaxed">{honey.description}</p>
                      <ul className="space-y-3">
                        {honey.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beekeeper Services Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-secondary/20">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <ScrollAnimation animation="fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center p-8">
                <LazyImage
                  src="/lovable-uploads/95c59643-961e-4414-bbd5-a207ff310f53.png"
                  alt="Včelařka s plástí medu - MVFarma"
                  className="max-w-full max-h-full object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Pro včelaře</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Po domluvě pro včelaře dodáváme oddělky případně vyzimované oddělky
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Fascinating Life of Bees Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-accent">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Fascinující život včel</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Včely jsou úžasní tvorové s komplexní společenskou strukturou. Jeden úl může obsahovat až 80 000 včel
                pracujících jako jeden organismus.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Matka", description: "Každý úl má jednu matka, která může žít až 5 let" },
              { icon: Leaf, title: "Dělnice", description: "Dělnice sbírají nektar, stavějí plásty a pečují o mladé" },
              { icon: Award, title: "Trubci", description: "Samci včel, jejichž úkolem je oplodnění nových královen" },
            ].map((bee, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <bee.icon className="text-primary w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{bee.title}</h3>
                  <p className="text-muted-foreground">{bee.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default HoneyPage;
