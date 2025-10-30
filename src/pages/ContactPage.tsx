import React, { lazy, Suspense, memo } from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { MapPin, Phone, Mail, HelpCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import HeroSection from '../components/HeroSection';

const ScrollAnimation = lazy(() => import('../components/ScrollAnimation'));
const ContactForm = lazy(() => import('../components/ContactForm'));

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (formData: { name: string; email: string; message: string }) => {
    toast({
      title: "Zpráva odeslána!",
      description: "Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.",
    });
  };

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      <HeroSection
        title="Kontaktujte nás"
        subtitle="Rádi odpovíme na vaše dotazy a těšíme se na setkání s vámi"
        imageSrc="/lovable-uploads/ee1c2855-0e47-4b86-acc3-a1d23cc1f1e2.png"
        imageAlt="Včelí úl MVFarma, kontaktní informace"
      />

      {/* Contact Information & Form */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <Suspense fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse"></div>}>
              <ScrollAnimation animation="slide-in-left">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                    Kde nás najdete
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Jméno</h3>
                        <p className="text-muted-foreground">
                          MVFarma<br />
                          Miroslav Tuka a Vlaďka Hartlová <br />
                          Registrační číslo včelaře <br />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Telefon</h3>
                        <p className="text-muted-foreground">+420 730 540 072</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                        <p className="text-muted-foreground">info@mvfarma.cz</p>
                      </div>
                    </div>

                    
                    <div className="flex items-center gap-2 mt-6">
                      <HelpCircle className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Pokud vás cokoliv zajímá nebo si chcete popovídat o medu a výchově včel, neváhejte se zeptat a napsat nám email.</span>
                    </div>
                  </div>

                </div>
              </ScrollAnimation>
            </Suspense>

            {/* Contact Form */}
            <Suspense fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse"></div>}>
              <ScrollAnimation animation="slide-in-right">
                <ContactForm onSubmit={handleSubmit} />
              </ScrollAnimation>
            </Suspense>
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default ContactPage;