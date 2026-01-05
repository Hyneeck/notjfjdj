interface StructuredDataProps {
  type: 'LocalBusiness' | 'Product' | 'Article' | 'BlogPosting' | 'WebPage';
  data: Record<string, unknown>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  // Render inline script tag - no hooks needed
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
