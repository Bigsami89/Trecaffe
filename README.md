# TRECAFFÉ - Landing Page

Landing page oficial de TRECAFFÉ - Café italiano en Mérida, Yucatán.

## 🛠 Stack Tecnológico
- **Framework**: Next.js 16
- **UI**: React 19, Tailwind CSS, Shadcn/UI
- **Lenguaje**: TypeScript

## 📋 Requisitos
- Node.js 20+
- pnpm

## 🚀 Instalación

```bash
pnpm install
pnpm dev
```

## 📜 Scripts disponibles

- `dev`: Inicia el servidor de desarrollo
- `build`: Construye para producción
- `start`: Inicia el servidor de producción
- `lint`: Revisa el código

## 🖼️ Gestión de Assets Multimedia

Para mantener el rendimiento y la organización, utilizamos un sistema centralizado de assets:

### Dimensiones Recomendadas
*   **Hero/Banner**: 1920x1080 (WebP preferido)
*   **Productos**: 600x400 (Mantener aspect ratio 3:2)
*   **Galería**: 800x600

### Formatos
*   **JPG**: Para fotografías complejas.
*   **PNG**: Solo para logos o imágenes con transparencia.
*   **WebP**: Recomendado para todo lo demás.

> **Nota**: Temporalmente usa placeholders de Unsplash si no tienes los assets finales.

### Uso en código
Importa siempre desde `@/lib/images` para mantener las referencias actualizadas:

```tsx
import { IMAGES } from '@/lib/images';

// Uso
<Image src={IMAGES.menu.espresso} ... />
```

## 🔑 Variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_BUSINESS_EMAIL=info@trecaffe.com.mx
NEXT_PUBLIC_BUSINESS_PHONE=9991234567
```
