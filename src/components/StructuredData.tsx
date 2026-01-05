// Structured data component for SEO - no hooks

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Product' | 'Article' | 'BlogPosting' | 'WebPage';
  data: Record<string, unknown>;
}

function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

export default StructuredData;
