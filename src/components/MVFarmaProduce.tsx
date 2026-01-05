import React from 'react';
import { Flower2, TreePine } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import LazyImage from './LazyImage';

const MVFarmaProduce = () => {
  const honeyTypes = [
    {
      title: "Letní květový med",
      description: "Květový med z letní sklizně zejména z luk a lesů, má lehce tmavší barvu než jarní. obsahuje podíl medovice, pikantnější",
      icon: TreePine,
      price: "Od 180 Kč"
    },
    {
      title: "Jarní květový med",
      description: "Světlý med z jarních květů z luk a zahrad - jemná sladká chuť",
      icon: Flower2,
      price: "200 Kč za sklenici 950g"
    }
  ];

  return (
    <section id="medy-a-vcely" className="py-[clamp(2rem,6vw,6rem)] bg-background">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Naše medy 2015</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Objevte naši nabídku kvalitních medů z čisté přírody Českomoravské vrchoviny
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {honeyTypes.map((honey, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[3/2] relative overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center p-8">
                     <LazyImage 
                       src={index === 0 ? "/lovable-uploads/summer-honey-real.webp" : "/lovable-uploads/spring-honey-optimized.webp"}
                       alt={index === 0 ? "Letní květový med z MVFarma - tmavší med z letní sklizně" : "Jarní květový med z MVFarma - světlý med z jarních květů"}
                       className="max-w-full max-h-full object-cover"
                    />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{honey.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{honey.description}</p>
                  <div className="text-2xl font-bold text-primary">{honey.price}</div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="bg-gradient-to-r from-accent to-secondary p-8 md:p-12 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Jak vzniká náš med?
            </h3>
            <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto">
              Od květu k medu - sledujte cestu našeho zlata v 30 úlech rozmístěných 
              po krásné krajině Nového Bydžova.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Sběr nektaru</h4>
                <p className="text-muted-foreground">Včely sbírají nektar z okolních luk a lesů</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Zrání v úle</h4>
                <p className="text-muted-foreground">Med zraje v plástech až 3 týdny</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Šetrné stáčení</h4>
                <p className="text-muted-foreground">Stáčíme za studena pro zachování kvality</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaProduce;