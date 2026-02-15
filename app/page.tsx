'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Coffee, MapPin, Clock, Instagram, Facebook, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="TRECAFFE" width={120} height={120} className="h-16 w-auto" priority />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#menu" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Menú
            </Link>
            <Link href="#nosotros" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Nosotros
            </Link>
            <Link href="#ubicacion" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Ubicación
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Reservar
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
              Donde Italia Encuentra a Yucatán
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 text-pretty font-serif italic">
              {'Café de especialidad tostado artesanalmente'}
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Tres generaciones de maestros cafeteros italianos, granos seleccionados de origen único, 
              y el calor de Mérida en cada taza. Esta es tu nueva casa del café.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Visítanos Hoy
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8">
                Ver Ubicación
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image 
                src="/barista-work.jpg" 
                alt="Barista preparando café artesanal" 
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {'¿Por Qué TRECAFFE?'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {'No somos una cafetería más. Somos una experiencia que no encontrarás en ningún otro lugar'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: 'Tostado en Casa',
                description: 'Tostamos nuestros granos de origen único cada semana. Café fresco de especialidad, trazable desde la finca hasta tu taza.',
              },
              {
                icon: MapPin,
                title: 'Baristas Certificados',
                description: 'Formados en métodos italianos tradicionales. Cada espresso es perfecto, cada latte art es una obra, cada bebida tiene alma.',
              },
              {
                icon: Clock,
                title: 'Espacio Diseñado para Ti',
                description: 'WiFi de alta velocidad, enchufes en cada mesa, luz natural y la mejor playlist. Trabaja, estudia o simplemente disfruta.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {'Nuestras Especialidades'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {'Del espresso perfecto a las creaciones más innovadoras'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Espresso Clásico', 
                price: '$45', 
                desc: 'Shot perfecto de espresso italiano. Crema dorada, cuerpo intenso, notas de chocolate amargo',
                image: '/coffee-espresso.jpg'
              },
              { 
                name: 'Cappuccino Italiano', 
                price: '$65', 
                desc: 'Espresso doble con espuma de leche sedosa. El equilibrio perfecto entre café y cremosidad',
                image: '/coffee-cappuccino.jpg'
              },
              { 
                name: 'Latte de Miel Yucateca', 
                price: '$75', 
                desc: 'Nuestra creación exclusiva. Espresso con miel de abeja melipona y leche vaporizada',
                image: '/coffee-latte.jpg'
              },
              { 
                name: 'Affogato', 
                price: '$85', 
                desc: 'Gelato artesanal de vainilla ahogado en espresso caliente. El postre perfecto',
                image: '/coffee-affogato.jpg'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-2xl font-bold text-accent">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="border-2 text-lg px-8">
              Ver Menú Completo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experience Gallery Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {'El Espacio'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {'Diseñado para que te sientas como en casa, pero mejor'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image 
                src="/cafe-interior.jpg" 
                alt="Interior de TRECAFFE"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-serif text-2xl">{'Luz natural todo el día'}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image 
                src="/barista-work.jpg" 
                alt="Barista trabajando"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-serif text-2xl">{'Artesanía en cada taza'}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Mesas amplias con enchufes, WiFi ultrarrápido, aire acondicionado perfecto, 
              plantas que purifican el aire, y una playlist curada que nunca molesta. 
              Este es el lugar donde querrás pasar tus mañanas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {'Más de 2,000 cafés servidos cada mes. 4.9 estrellas en Google'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Ana Martínez',
                role: 'Arquitecta',
                text: 'El mejor café de Mérida, sin duda. El latte de miel yucateca es mi nuevo favorito. Vengo todas las mañanas antes de ir al trabajo.',
                rating: 5
              },
              {
                name: 'Roberto García',
                role: 'Emprendedor',
                text: 'Trabajo desde aquí 3-4 días a la semana. El WiFi es excelente, el ambiente perfecto para concentrarse, y el café... simplemente espectacular.',
                rating: 5
              },
              {
                name: 'Sofia Herrera',
                role: 'Estudiante de Diseño',
                text: 'Me encanta todo: la decoración, la música, la atención. Los baristas saben mi orden de memoria. Es como mi segunda casa.',
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
                    <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
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
            <p className="text-3xl font-bold text-foreground mb-2">4.9/5.0</p>
            <p className="text-muted-foreground">Basado en más de 350 reseñas en Google</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="nosotros" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image 
                src="/cafe-interior.jpg" 
                alt="Historia de TRECAFFE"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
                {'Tres Generaciones, Una Pasión'}
              </h2>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                Mi nonno me enseñó que el café no es solo una bebida, es un ritual. 
                Crecí en una pequeña cafetería en Roma, viendo cómo cada espresso se preparaba con devoción. 
                Cuando llegué a Mérida, me enamoré de la ciudad y su gente.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                TRECAFFE nace de ese amor: tres generaciones de conocimiento italiano, 
                combinadas con el espíritu acogedor de Yucatán. Aquí no vendemos café, 
                compartimos historias, creamos momentos, construimos comunidad.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-8">
                Cada grano es seleccionado personalmente. Cada tostado es supervisado con cuidado. 
                Cada barista es entrenado en el arte tradicional. Porque aquí, el café es familia.
              </p>
              <p className="text-xl font-serif italic opacity-95">
                {'— Marco Rossini, Fundador'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
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
                    Calle 47 x 60, Centro Histórico<br />
                    Mérida, Yucatán, México
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
                    Lunes a Viernes: 7:00 AM - 10:00 PM<br />
                    Sábado y Domingo: 8:00 AM - 11:00 PM
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
                    Tel: (999) 123-4567<br />
                    info@trecaffe.com.mx
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

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
              {'Tu Próximo Café Favorito Te Espera'}
            </h2>
            <p className="text-xl mb-10 text-pretty leading-relaxed">
              {'Estamos a solo 5 minutos del centro. Abiertos todos los días. Tu mesa (y tu espresso perfecto) te están esperando.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-12">
                Ver Ubicación
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-12 border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Llamar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image src="/logo.png" alt="TRECAFFE" width={120} height={120} className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm opacity-80 leading-relaxed">
                {'Café italiano con alma yucateca'}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#menu" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    Menú
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#ubicacion" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    Ubicación
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm opacity-60">
              {'© 2024 TRECAFFE. Todos los derechos reservados.'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function MapPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
      <div className="text-center p-12">
        <MapPin className="w-24 h-24 text-primary mx-auto mb-4 opacity-20" />
        <p className="font-serif text-2xl text-foreground/40">{'Mérida, Yucatán'}</p>
        <p className="text-sm text-muted-foreground mt-2">{'Calle 47 x 60, Centro'}</p>
      </div>
    </div>
  )
}
