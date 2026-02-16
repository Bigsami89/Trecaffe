'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

// Contact info constant
export const CONTACT = {
    phone: '+52-999-123-4567',
    email: 'info@trecaffe.com.mx',
    address: 'Calle 47 x 60, Centro Histórico',
    city: 'Mérida, Yucatán',
    hours: {
        weekday: '7:00 AM - 10:00 PM',
        weekend: '8:00 AM - 11:00 PM',
    },
};

function MapPlaceholder() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
            <div className="text-center p-12">
                <MapPin className="w-24 h-24 text-primary mx-auto mb-4 opacity-20" />
                <p className="font-serif text-2xl text-foreground/40">{CONTACT.city}</p>
                <p className="text-sm text-muted-foreground mt-2">{CONTACT.address}</p>
            </div>
        </div>
    )
}

export function LocationSection() {
    return (
        <section id="ubicacion" className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        {'Visítanos'}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {'Te esperamos en el corazón de Mérida'}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                    Dirección
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {CONTACT.address}<br />
                                    {CONTACT.city}, México
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                    Horario
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Lunes a Viernes: {CONTACT.hours.weekday}<br />
                                    Sábado y Domingo: {CONTACT.hours.weekend}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                    Contacto
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Tel: {CONTACT.phone}<br />
                                    {CONTACT.email}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden bg-muted"
                    >
                        <MapPlaceholder />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
