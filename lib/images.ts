export const IMAGES = {
    // Usamos el mismo logo local por ahora, o podrías subirlo a un CDN
    logo: '/images/logo.png',
    hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop',
    interior: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=800&fit=crop',
    menu: {
        espresso: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
        cappuccino: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        latte: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop',
        affogato: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    },
    og: '/images/og-image.jpg',
} as const;

export type ImageKey = typeof IMAGES;
