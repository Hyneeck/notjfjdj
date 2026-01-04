import React from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/dbc0e436-d319-4d9b-a7f8-78847ac61863.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Novinky ze světa včelařství
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Content Placeholder */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Blog bude brzy k dispozici.
            </p>
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPage;
