import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MVFarmaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Domů', path: '/' },
    { name: 'O nás', path: '/o-nas' },
    { name: 'Medy a včely', path: '/medy-a-vcely' },
    { name: 'Fotogalerie', path: '/fotogalerie' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header-fixed ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-amber-100'
            }`}>MVFarma</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.filter(item => item.path !== '/').map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActivePath(item.path) 
                    ? 'text-primary' 
                    : isScrolled 
                      ? 'text-foreground' 
                      : 'text-amber-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-foreground' : 'text-amber-100'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-foreground' : 'text-amber-100'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 font-medium transition-colors hover:text-primary hover:bg-accent/50 rounded ${
                    isActivePath(item.path) ? 'text-primary bg-accent/50' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MVFarmaHeader;