import React, { memo } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
}

const HeroSection = memo<HeroSectionProps>(({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt,
  priority = false 
}) => {
  return (
    <section 
      className="relative min-h-[50vh] flex items-center justify-center"
      role="banner"
    >
      {/* Optimized background image with loading state */}
      <picture className="absolute inset-0">
        <source 
          srcSet={imageSrc.replace('.png', '.webp')} 
          type="image/webp" 
        />
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      {/* Content */}
      <div className="container mx-auto px-5 relative z-10 text-center">
        <ScrollAnimation animation="fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
