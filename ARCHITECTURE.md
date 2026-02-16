# Arquitectura del Proyecto TRECAFFÉ

Este documento describe la arquitectura técnica, las decisiones de diseño y el flujo de datos de la plataforma web de TRECAFFÉ.

## 🏗️ Diagrama de Arquitectura General

```mermaid
graph TD
    User[Usuario / Cliente] -->|HTTPS| CDN[Edge Network / Vercel]
    CDN -->|Cache Hit| Static[Contenido Estático (SSG)]
    CDN -->|Cache Miss| Server[Next.js Server (SSR/API)]
    
    subgraph Frontend [Aplicación Web (Next.js)]
        UI[Componentes React]
        Store[Zustand Store]
        Hooks[Custom Hooks]
    end
    
    subgraph Backend [API Layer]
        API[API Routes / Server Actions]
        Auth[NextAuth.js]
        Services[Domain Services]
    end
    
    subgraph Data [Capa de Datos]
        Prisma[Prisma ORM]
        DB[(PostgreSQL)]
        Redis[(Redis - Opcional)]
    end
    
    subgraph External [Servicios Externos]
        Stripe[Pasarela de Pagos]
        Email[Email Service]
        Maps[Google Maps/Places]
    end

    Server --> UI
    UI --> Store
    UI -->|Fetch| API
    API --> Auth
    API --> Services
    Services --> Prisma
    Prisma --> DB
    Services --> Stripe
    Services --> Email
```

## 📐 Patrón de Diseño: JAMstack + SSR Híbrido

El proyecto sigue una arquitectura **híbrida** aprovechando las capacidades de Next.js 16:

1.  **Static Generation (SSG)**: Para páginas públicas de alto tráfico y bajo cambio (Home, Nosotros, Contacto, Landing de Menú). Esto garantiza tiempos de carga instantáneos y optimización SEO.
2.  **Server-Side Rendering (SSR)**: Para páginas dinámicas que requieren SEO y datos frescos (Detalle de Producto, Categorías).
3.  **Client-Side Rendering (CSR)**: Para componentes interactivos privados (Carrito de compras, Dashboard de Usuario, Panel de Admin).

### Principios Clave
-   **Separación de Responsabilidades**: Frontend (UI) desacoplado de la lógica de negocio compleja (Services).
-   **Atomic Design (Modificado)**: Componentes construidos desde lo básico (UI primitives) hasta organismos complejos (Features).
-   **Type Safety**: TypeScript estricto en todo el stack, compartiendo tipos entre frontend y backend (gracias a que ambos están en el mismo repo).

## 🔄 Flujo de Datos

1.  **Estado del Servidor**: Gestionado vía Server Components y `fetch` con caché y revalidación.
2.  **Estado del Cliente (Global)**: `Zustand` maneja el estado de la sesión, carrito de compras y preferencias de UI (tema).
3.  **Estado del Formulario**: `React Hook Form` + `Zod` para manejo eficiente y validado de entradas de usuario.

## 🔌 Estructura de API Routes

La API se organiza siguiendo un enfoque RESTful dentro de Next.js App Router:

```
/api
  /v1
    /auth           # Autenticación y Sesión
    /menu           # Gestión de productos y categorías
    /orders         # Creación y seguimiento de pedidos
    /reservations   # Gestión de reservaciones
    /users          # Gestión de perfiles
    /webhooks       # Stripe y otros eventos externos
```

## 🛡️ Decisiones Arquitectónicas

### Frontend
-   **Tailwind CSS + Shadcn/UI**: Elegido para desarrollo rápido, consistencia visual y accesibilidad pre-construida. Evita el "bloat" de librerías de componentes tradicionales.
-   **Next.js App Router**: Para aprovechar Server Components, reduciendo el JS enviado al cliente y mejorando el First Contentful Paint (FCP).

### Backend
-   **Prisma ORM**: Provee seguridad de tipos en la base de datos y migraciones sencillas.
-   **PostgreSQL**: Base de datos relacional robusta, ideal para datos estructurados como pedidos, usuarios e inventario.
-   **NextAuth.js (v5)**: Solución estándar para autenticación en Next.js, manejando sesiones y seguridad de manera transparente.

### Infraestructura
-   **Vercel (Recomendado)**: Para despliegue zero-config, Edge Functions y optimización de imágenes automática.
