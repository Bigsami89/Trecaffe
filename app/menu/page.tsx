'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Coffee, UtensilsCrossed, Cherry, Egg, Sandwich, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

// Menu Categories
const MENU_CATEGORIES = [
    {
        id: 'bebidas',
        title: 'Bebidas',
        icon: Coffee,
        items: [
            {
                subtitle: 'Café (Frío y Caliente)',
                dishes: [
                    { name: 'Espresso (solo caliente)', price: '$45' },
                    { name: 'Americano', price: '$45', desc: '(incluye 2 refills con plato fuerte)' },
                    { name: 'Latte', price: '$70' },
                    { name: 'Cappuccino', price: '$70' },
                    { name: 'Caramel Latte', price: '$75' },
                    { name: 'Chai', price: '$80' },
                    { name: 'Taro', price: '$80' },
                    { name: 'Mocha', price: '$70' },
                    { name: 'Matcha', price: '$75' },
                    { name: 'Chocolate', price: '$70' },
                    { name: 'Horchata Espresso', price: '$75' },
                ]
            },
            {
                subtitle: 'Smoothies',
                dishes: [
                    { name: 'Smoothie de Limonada de Fresa', price: '$75' },
                    { name: 'Smoothie de Limonada', price: '$70' },
                    { name: 'Smoothie de Frutos Rojos TRECAFFÉ', price: '$75' },
                    { name: 'Smoothie de Limonada de Frutos Rojos', price: '$75' },
                    { name: 'Smoothie de Horchata', price: '$70' },
                ]
            },
            {
                subtitle: 'Frappés con Espresso',
                dishes: [
                    { name: 'Frappé Latte', price: '$75' },
                    { name: 'Frappé Cappuccino', price: '$75' },
                    { name: 'Frappé Horchata Espresso', price: '$75' },
                    { name: 'Frappé Mocha', price: '$75' },
                ]
            },
            {
                subtitle: 'Frappés sin Espresso',
                dishes: [
                    { name: 'Frappé Nutella®', price: '$80' },
                    { name: 'Frappé Oreo®', price: '$80' },
                    { name: 'Frappé Cajeta', price: '$75' },
                    { name: 'Frappé Ferrero Rocher®', price: '$80' },
                    { name: 'Frappé Caramelo', price: '$75' },
                    { name: 'Frappé Chai', price: '$80' },
                    { name: 'Frappé Taro', price: '$80' },
                    { name: 'Frappé Horchata', price: '$75' },
                    { name: 'Frappé Matcha', price: '$75' },
                ]
            },
            {
                subtitle: 'Aguas Naturales',
                dishes: [
                    { name: 'Piña', price: '$55' },
                    { name: 'Limonada', price: '$55' },
                    { name: 'Limonada de Fresa', price: '$65' },
                    { name: 'Naranjada', price: '$55' },
                    { name: 'Horchata', price: '$55' },
                    { name: 'Limonada de Frutos Rojos', price: '$65' },
                    { name: 'Frutos Rojos TRECAFFÉ', price: '$65' },
                    { name: 'Con agua mineral', price: '+$10' },
                ]
            },
            {
                subtitle: 'Refrescos',
                dishes: [
                    { name: 'Coca Cola Regular', price: '$45' },
                    { name: 'Coca sin Azúcar', price: '$45' },
                    { name: 'Coca Light', price: '$45' },
                    { name: 'Mundet', price: '$45' },
                    { name: 'Sprite', price: '$45' },
                    { name: 'Agua Mineral', price: '$45' },
                    { name: 'Agua Natural', price: '$40' },
                    { name: 'Topo Chico', price: '$55' },
                ]
            },
            {
                subtitle: 'Malteadas',
                dishes: [
                    { name: 'Malteada de Fresa', price: '$85' },
                    { name: 'Malteada de Vainilla', price: '$85' },
                    { name: 'Malteada de Chocolate', price: '$85' },
                ]
            }
        ]
    },
    {
        id: 'desayunos',
        title: 'Desayunos (8 AM - 1:00 PM)',
        icon: Cherry,
        items: [
            {
                subtitle: 'Clásicos',
                dishes: [
                    { name: 'Pan del Día', price: 'Precio variable' },
                    { name: 'Parfait de Fresa', price: '$125' },
                    { name: 'Smoothie Bowl de Fresa y Plátano', price: '$145' },
                    { name: 'Plato de Frutas de Temporada', price: '$125' },
                    { name: 'Desayuno Americano', price: '$195', desc: '2 hot cakes, 2 tocinos, 2 huevos al gusto con 2 ingredientes, fruta. Incluye café americano con 3 refills' },
                ]
            },
            {
                subtitle: 'French Toast & Hot Cakes',
                dishes: [
                    { name: 'French Toast Clásico', price: '$170' },
                    { name: 'French Toast Fresa y Queso Philadelphia®', price: '$185' },
                    { name: 'French Toast Cajeta y Plátano', price: '$180' },
                    { name: 'French Toast Nutella® y Plátano', price: '$185' },
                    { name: 'Hot Cakes Clásicos', price: '$150' },
                    { name: 'Hot Cakes Con Fresa', price: '$165' },
                    { name: 'Hot Cakes TRECAFFÉ', price: '$165' },
                    { name: 'Hot Cakes Mermelada de la Casa y Tocino', price: '$170' },
                    { name: 'Hot Cakes Cajeta y Plátano', price: '$165' },
                ]
            },
            {
                subtitle: 'Crepas',
                dishes: [
                    { name: 'Crepa Dulce Caramelo y Plátano', price: '$155' },
                    { name: 'Crepa Dulce Fresa y Queso Philadelphia', price: '$155' },
                    { name: 'Pizza Crepa Pepperoni', price: '$155' },
                    { name: 'Pizza Crepa Jamón', price: '$155' },
                ]
            }
        ]
    },
    {
        id: 'huevos',
        title: 'Huevos & Antojitos',
        icon: Egg,
        items: [
            {
                subtitle: 'Huevos',
                dishes: [
                    { name: 'Huevos al Gusto', price: '$170' },
                    { name: 'Motuleños', price: '$180' },
                    { name: 'Divorciados con Chilaquiles', price: '$170' },
                    { name: 'Omelette Fit', price: '$155' },
                    { name: 'Cazuela a la Diabla', price: '$185' },
                    { name: 'Cazuela Libanesa', price: '$185' },
                ]
            },
            {
                subtitle: 'Toast',
                dishes: [
                    { name: 'Guacamole Toast', price: '$180' },
                    { name: 'Toast Español', price: '$195' },
                    { name: 'Toast Benedictino', price: '$180' },
                ]
            },
            {
                subtitle: 'Antojitos Mexicanos',
                dishes: [
                    { name: 'Molletes Clásicos', price: '$140' },
                    { name: 'Chilaquiles con Huevo', price: '$165' },
                    { name: 'Chilaquiles con Pollo', price: '$180' },
                    { name: 'Chilaquiles Poblanos', price: '$180' },
                    { name: 'Chilaquiles a la Diabla', price: '$220' },
                    { name: 'Enchiladas Poblanas', price: '$180' },
                    { name: 'Enchiladas Clásicas', price: '$170' },
                    { name: 'Enmoladas', price: '$170' },
                ]
            }
        ]
    },
    {
        id: 'comidas',
        title: 'Comidas',
        icon: UtensilsCrossed,
        items: [
            {
                subtitle: 'Entradas',
                dishes: [
                    { name: 'Boneless', price: '$185' },
                    { name: 'Papas a la Francesa', price: '$135' },
                    { name: 'Tenders de Pollo con Papas', price: '$185' },
                    { name: 'Dedos de Queso', price: '$170' },
                    { name: 'Tablita TRECAFFÉ', price: '$210' },
                ]
            },
            {
                subtitle: 'Platos Fuertes',
                dishes: [
                    { name: 'Burrito de Arrachera', price: '$195' },
                    { name: 'Fajitas de Pollo', price: '$185' },
                    { name: 'Fajitas de Arrachera', price: '$195' },
                ]
            },
            {
                subtitle: 'Hamburguesas',
                dishes: [
                    { name: 'Hamburguesa Clásica', price: '$170' },
                    { name: 'Hamburguesa Guacamole', price: '$190' },
                    { name: 'Hamburguesa TRECAFFÉ', price: '$190' },
                    { name: 'Western BBQ Burger', price: '$190' },
                ]
            },
            {
                subtitle: 'Ensaladas & Pasta',
                dishes: [
                    { name: 'Ensalada César', price: '$165' },
                    { name: 'Ensalada Popeye', price: '$165' },
                    { name: 'Ensalada BBQ TRECAFFÉ', price: '$165' },
                    { name: 'Fetuccini Alfredo', price: '$145' },
                    { name: 'Fetuccini Chipotle', price: '$145' },
                    { name: 'Mac and Cheese', price: '$140' },
                ]
            },
            {
                subtitle: 'Sandwiches',
                dishes: [
                    { name: 'Grilled Cheese Sandwich', price: '$175' },
                    { name: 'Florencia', price: '$185' },
                    { name: 'Croque Madame', price: '$195' },
                    { name: 'Sandwich TRECAFFÉ', price: '$190' },
                    { name: 'Artesanal Arrachera', price: '$195' },
                    { name: 'Nápoles', price: '$185' },
                ]
            }
        ]
    },
    {
        id: 'kids',
        title: 'Menú Infantil',
        icon: Sandwich,
        items: [
            {
                subtitle: 'Just for Kids (Incluyen juguito de manzana)',
                dishes: [
                    { name: 'Kid\'s Combo', price: '$100' },
                    { name: 'Bambino', price: '$100' },
                    { name: 'Dino Nuggets', price: '$100' },
                ]
            }
        ]
    },
    {
        id: 'postres',
        title: 'Postres & Combos',
        icon: Cherry,
        items: [
            {
                subtitle: 'Postres',
                dishes: [
                    { name: 'Helado de Vainilla (1 bola)', price: '$45' },
                    { name: 'Helado de Vainilla (2 bolas)', price: '$75' },
                    { name: 'Affogato', price: '$80' },
                    { name: 'Brownie con Helado', price: '$95' },
                ]
            },
            {
                subtitle: 'Combos Lunch (2 PM - 6 PM)',
                dishes: [
                    { name: 'Hamburguesa Clásica + Limonada Natural', price: '$185' },
                    { name: 'Pasta Alfredo + Limonada Natural', price: '$185' },
                    { name: 'Ensalada César + Limonada Natural', price: '$185' },
                ]
            }
        ]
    }
];

export default function MenuPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
            >
                <div className="container mx-auto px-4 py-4 flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 group text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Volver</span>
                    </Link>
                    <div className="h-6 w-px bg-border/50" />
                    <span className="font-serif text-2xl font-bold text-primary">TRECAFFÉ</span>
                </div>
            </motion.nav>

            {/* Hero Header */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src={IMAGES.hero}
                    alt="Menú TRECAFFÉ"
                    fill
                    className="object-cover brightness-[0.6]"
                    priority
                />
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl md:text-7xl font-bold text-white mb-4"
                    >
                        Nuestro Menú
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-xl font-light"
                    >
                        Sabores auténticos, preparados al momento
                    </motion.p>
                </div>
            </section>

            {/* Menu Content */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid gap-20">
                    {MENU_CATEGORIES.map((category, index) => (
                        <motion.section
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            id={category.id}
                            className="scroll-mt-32"
                        >
                            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-border">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <category.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="font-serif text-4xl font-bold text-foreground">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                                {category.items.map((subCategory, subIndex) => (
                                    <div key={subIndex} className="break-inside-avoid">
                                        <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                                            {subCategory.subtitle}
                                        </h3>
                                        <ul className="space-y-6">
                                            {subCategory.dishes.map((dish, dishIndex) => (
                                                <li key={dishIndex} className="group">
                                                    <div className="flex justify-between items-baseline mb-1">
                                                        <span className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                                                            {dish.name}
                                                        </span>
                                                        <div className="flex-grow mx-4 border-b border-dotted border-muted-foreground/30" />
                                                        <span className="font-bold text-lg text-accent">{dish.price}</span>
                                                    </div>
                                                    {dish.desc && (
                                                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                                                            {dish.desc}
                                                        </p>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Extras Section */}
                <section className="mt-24 bg-secondary/30 rounded-3xl p-8 md:p-12">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
                        Extras & Adicionales
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-4">Bebidas</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex justify-between">
                                    <span>Shot Espresso Extra</span>
                                    <span className="font-semibold text-accent">$15</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Cambio de Leche de Almendra</span>
                                    <span className="font-semibold text-accent">$15</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-4">Ingredientes</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex justify-between">
                                    <span>Huevo Extra (1pz / 2pz)</span>
                                    <span className="font-semibold text-accent">$15 / $25</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Proteína (Pollo/Carne)</span>
                                    <span className="font-semibold text-accent">$40 / $45</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Aguacate</span>
                                    <span className="font-semibold text-accent">$25</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Nutella/Cajeta</span>
                                    <span className="font-semibold text-accent">$20 - $25</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-8 italic">
                        * Todos los alimentos son preparados al momento. Precios sujetos a cambio sin previo aviso.
                    </p>
                </section>
            </div>

            <footer className="bg-primary text-primary-foreground py-8 text-center">
                <p className="opacity-80">TRECAFFÉ &copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}
