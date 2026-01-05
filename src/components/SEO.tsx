// Simple SEO component that updates document title
// No hooks - pure side effect on render

const updateDocumentTitle = (title: string): null => {
  if (typeof document !== 'undefined') {
    document.title = title;
    document.documentElement.lang = 'cs';
  }
  return null;
};

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

function SEO({ title }: SEOProps): null {
  return updateDocumentTitle(title);
}

export default SEO;
