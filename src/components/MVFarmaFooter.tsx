
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const MVFarmaFooter = () => {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="container mx-auto px-5 max-w-[1200px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">MV</span>
              </div>
              <span className="text-xl font-bold text-background">MVFarma</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Rodinné včelařství z Nového Bydžova. Kvalitní med s láskou k přírodě a včelám.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-background mb-4">Navigace</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/80 hover:text-accent transition-colors text-sm">Domů</Link></li>
              <li><Link to="/o-nas" className="text-background/80 hover:text-accent transition-colors text-sm">O nás</Link></li>
              <li><Link to="/medy-a-vcely" className="text-background/80 hover:text-accent transition-colors text-sm">Medy a včely</Link></li>
              <li><Link to="/fotogalerie" className="text-background/80 hover:text-accent transition-colors text-sm">Fotogalerie</Link></li>
              <li><Link to="/blog" className="text-background/80 hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link to="/kontakt" className="text-background/80 hover:text-accent transition-colors text-sm">Kontakt</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-background mb-4">Naše produkty</h4>
            <ul className="space-y-2">
              <li><Link to="/medy-a-vcely" className="text-background/80 hover:text-accent transition-colors text-sm">Květový med</Link></li>
              <li><Link to="/medy-a-vcely" className="text-background/80 hover:text-accent transition-colors text-sm">Medovicový med</Link></li>
              <li><Link to="/medy-a-vcely" className="text-background/80 hover:text-accent transition-colors text-sm">Včelí vosk</Link></li>
              <li><Link to="/medy-a-vcely" className="text-background/80 hover:text-accent transition-colors text-sm">Propolis</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Nový Bydžov
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">+420 730 540 072</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span className="text-background/80 text-sm">info@mvfarma.cz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-6">
          <p className="text-background/60 text-sm text-center">
            © 2024 MVFarma. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MVFarmaFooter;