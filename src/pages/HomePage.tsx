import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import LazyImage from '../components/LazyImage';

// Lazy load non-critical components to reduce initial bundle
const MVFarmaHeader = lazy(() => import('../components/MVFarmaHeader'));
const MVFarmaHero = lazy(() => import('../components/MVFarmaHero'));
const MVFarmaFooter = lazy(() => import('../components/MVFarmaFooter'));
const ScrollAnimation = lazy(() => import('../components/ScrollAnimation'));

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
          sameAs: []
        }}
      />
      <Suspense fallback={<div className="h-20 bg-background"></div>}>
        <MVFarmaHeader />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
        <MVFarmaHero />
      </Suspense>
      

      <Suspense fallback={<div className="bg-muted h-96"></div>}>
        <MVFarmaFooter />
      </Suspense>
    </div>
  );
};

export default HomePage;