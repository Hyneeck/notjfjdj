import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { title: "Ranní kontrola úlů", description: "Pravidelná péče o naše včelstva" },
    { title: "Kvetoucí louky", description: "Pastva pro naše včely v okolí farmy" },
    { title: "Stáčení medu", description: "Tradiční postupy za studena" },
    { title: "Včelí plásty", description: "Dokonalá práce našich včel" },
    { title: "Čerstvý med", description: "Tekuté zlato přímo z úlu" },
    { title: "Rodinná tradice", description: "Předávání znalostí mezi generacemi" },
    { title: "Zimní přípravy", description: "Péče o včely během zimy" },
    { title: "Květy lípy", description: "Zdroj našeho vzácného lipového medu" },
    { title: "Královna včel", description: "Srdce každého včelstva" }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="fotogalerie" className="py-[clamp(2rem,6vw,6rem)] bg-secondary">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Fotogalerie</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nahlédněte do života na naší farmě. Od ranních kontrol úlů až po stáčení medu, 
              každý okamžik je pro nás důležitý.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 50}>
              <div
                className="aspect-square bg-gradient-to-br from-primary to-accent rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors duration-300"></div>
                  <div className="text-center text-primary-foreground z-10 p-6">
                    <h3 className="text-xl font-bold mb-3">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-4xl max-h-[90vh] w-full">
            <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <div className="text-center text-foreground p-8">
                <h3 className="text-2xl font-bold mb-4">{images[selectedImage].title}</h3>
                <p className="text-lg opacity-90">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MVFarmaGallery;