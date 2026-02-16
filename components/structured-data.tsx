export function StructuredData() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CafeOrCoffeeShop',
        name: 'TRECAFFÉ',
        url: 'https://trecaffe.com.mx',
        telephone: '+52-999-123-4567',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle 47 x 60',
            addressLocality: 'Mérida',
            addressRegion: 'Yucatán',
            addressCountry: 'MX',
        },
        servesCuisine: 'Italian',
        priceRange: '$$',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
