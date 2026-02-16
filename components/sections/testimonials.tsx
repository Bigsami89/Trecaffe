'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        {'Lo Que Dicen Nuestros Clientes'}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {'La opinión de nuestros visitantes. 4.5 estrellas en Google Maps'}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            name: 'Zayre Pl',
                            role: 'Cliente verificado',
                            text: 'Mis platillos favoritos son estos hotcakes con chocolate y plátano 1000/10, la ensalada popeye, los sandwiches y la pasta mac n cheese, muchas gracias por la buena atención y calidad de los alimentos!!',
                            rating: 5
                        },
                        {
                            name: 'Emilo Alim',
                            role: 'Cliente verificado',
                            text: 'El sitio cuenta con un menú amplio, los ingredientes son de gran calidad, los sabores de los platos son excelentes, la atención es insuperable, incluso el propietario está al pendiente de los comensales lo que hace a la experiencia inmejorable.',
                            rating: 5
                        },
                        {
                            name: 'Maria Alejandra',
                            role: 'Cliente verificado',
                            text: 'Siento que es la opción ideal para darte un gustito por la tarde... esta cafetería tiene muchas opciones excelentes para comer y beber. Es un espacio climatizado... y es fácil de llegar por medio de todas las rutas de va y ven.',
                            rating: 5
                        },
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-border"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed italic">
                                {`"${testimonial.text}"`}
                            </p>
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 rounded-2xl p-8 text-center"
                >
                    <p className="text-3xl font-bold text-foreground mb-2">4.5/5.0</p>
                    <p className="text-muted-foreground">Calificación promedio en Google Maps</p>
                </motion.div>
            </div>
        </section>
    )
}
