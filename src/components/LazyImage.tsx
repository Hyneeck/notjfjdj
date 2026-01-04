import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'className'> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  placeholder?: string;
  rootMargin?: string;
  srcSet?: string;
  sizes?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  placeholder = 'blur',
  rootMargin = '10px',
  srcSet,
  sizes,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (priority || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [priority, rootMargin]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden w-full h-full", containerClassName)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "w-full h-full transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            hasError && "hidden",
            className
          )}
          {...props}
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Obrázek se nepodařilo načíst</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;