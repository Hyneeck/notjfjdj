import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  rootMargin?: string;
  srcSet?: string;
  sizes?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  priority = false,
  srcSet,
  sizes,
  ...props
}: LazyImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(className)}
      {...props}
    />
  );
};

export default LazyImage;
