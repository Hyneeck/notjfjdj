import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaHero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <ScrollAnimation animation="fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title">
              Vítejte na MVFarma
            </h1>
            <p className="hero-subtitle">
              Poctivý med tradiční včelařské farmy, s úctou k přírodě a včelám
            </p>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/o-nas"
              className="bg-amber-100 text-black px-8 py-3 rounded-lg hover:bg-amber-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
            >
              O naší farmě
            </Link>
            <Link 
              to="/medy-a-vcely"
              className="border-2 border-amber-100 text-amber-100 px-8 py-3 rounded-lg hover:bg-amber-100 hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
            >
              Naše produkty
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaHero;