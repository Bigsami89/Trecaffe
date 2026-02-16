export const IMAGES = {
    logo: {
        main: '/images/logo/logo.svg',
        white: '/images/logo/logo-white.svg',
        favicon: '/images/logo/favicon.ico',
        appleTouch: '/images/logo/apple-touch-icon.png',
    },
    menu: {
        espresso: {
            classic: '/images/menu/espresso/classic.jpg',
            macchiato: '/images/menu/espresso/macchiato.jpg',
            doppio: '/images/menu/espresso/doppio.jpg',
        },
        cappuccino: {
            classic: '/images/menu/cappuccino/classic.jpg',
            flavored: '/images/menu/cappuccino/flavored.jpg',
        },
        latte: {
            classic: '/images/menu/latte/classic.jpg',
            iced: '/images/menu/latte/iced.jpg',
        },
        postres: {
            tiramisu: '/images/menu/postres/tiramisu.jpg',
            cannoli: '/images/menu/postres/cannoli.jpg',
        },
    },
    gallery: {
        interior: [
            '/images/gallery/interior-1.jpg',
            '/images/gallery/interior-2.jpg',
        ],
        barista: '/images/gallery/barista-work.jpg',
    },
    og: {
        main: '/images/og/og-image.jpg',
        square: '/images/og/og-image-square.jpg',
    },
} as const;

export const IMAGE_SIZES = {
    thumbnail: { width: 300, height: 300 },
    card: { width: 600, height: 400 },
    hero: { width: 1920, height: 1080 },
    avatar: { width: 40, height: 40 },
    gallery: { width: 800, height: 600 },
} as const;

export type ImageCategory = keyof typeof IMAGES;
export type ImageSize = keyof typeof IMAGE_SIZES;
