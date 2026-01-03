import React, { useState } from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/54f5fbc3-f416-48e1-a918-3d7af5366e79.png",
      alt: "Včelnice v lese",
      title: "Včelnice v lese",
      description: "Úly rozmístěné v krásném lesním prostředí"
    },
    {
      src: "/lovable-uploads/becb71bc-a935-453e-99e1-ed42b99576c1.png",
      alt: "Květy pro včely",
      title: "Květy pro včely",
      description: "Jablečné květy poskytují včelám výživu"
    },
    {
      src: "/lovable-uploads/c2c6f111-8b0d-40b0-94ac-b52e9992d935.png",
      alt: "Podzimní včelnice",
      title: "Podzimní včelnice",
      description: "Úly v podzimní krajině"
    },
    {
      src: "/lovable-uploads/0b66bf50-89ff-4f01-bb65-989583bc0630.png",
      alt: "Včelaři při práci",
      title: "Včelaři při práci",
      description: "Péče o včelstva v ochranných oblecích"
    },
    {
      src: "/lovable-uploads/609225f1-19d0-437a-95d9-f4149a34fef7.png",
      alt: "Med v přírodním prostředí",
      title: "Med v přírodním prostředí",
      description: "Naše kvalitní medy mezi krásnou květinovou výzdobou"
    },
    {
      src: "/lovable-uploads/97d77a5f-2635-4ebe-84d3-6931c7d78f17.png",
      alt: "Práce s úly",
      title: "Práce s úly",
      description: "Kontrola a údržba včelích úlů v přírodě"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/dbc0e436-d319-4d9b-a7f8-78847ac61863.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Naše fotogalerie
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Prohlédněte si život našich včel a krásu naší farmy
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div 
                  className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary relative overflow-hidden">
                    <LazyImage 
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              loading="eager"
              decoding="async"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <MVFarmaFooter />
    </div>
  );
};

export default GalleryPage;