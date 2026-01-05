import { generateKeywords } from '../utils/seoKeywords';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = '/lovable-uploads/hero-background-compressed.webp',
  url = 'https://mvfarma.cz',
  type = 'website',
  author = 'MVFarma',
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const enhancedKeywords = keywords ? keywords : generateKeywords();
  const fullImageUrl = `${url}${image}`;

  // Set document title and lang synchronously (no hooks)
  if (typeof document !== 'undefined') {
    document.title = title;
    document.documentElement.lang = 'cs';
  }

  // Return null - meta tags are handled in index.html
  // This component only updates the document title
  return null;
};

export default SEO;
