# Guía de Contribución para TRECAFFÉ

¡Gracias por tu interés en contribuir al proyecto TRECAFFÉ! Esta guía establece los estándares y procesos para asegurar un desarrollo fluido y de alta calidad.

## 🎨 Identidad Visual y Diseño

Para mantener la consistencia de la marca, por favor utiliza las siguientes variables de diseño:

### Paleta de Colores
| Nombre | Hex | Uso Principal |
|--------|-----|---------------|
| **Verde Primario** | `#2F5244` | Elementos principales, botones, enlaces |
| **Dorado** | `#D4AF71` | Acentos, bordes, elementos premium |
| **Marrón Café** | `#8B4513` | Texto secundario o fondos de contraste |

---

## 👩‍💻 Flujo de Trabajo (Workflow)

Utilizamos una versión simplificada de **Git Flow**:

1.  **`main`**: Rama de producción. Código estable y desplegado.
2.  **`develop`**: Rama de integración. Aquí se fusionan las nuevas features.
3.  **Feature Branches**: Ramas temporales para cada nueva característica o corrección.
    -   Nomenclatura: `feature/nombre-de-la-tarea`, `fix/descripcion-bug`, `docs/actualizacion`.

### Proceso de Pull Request (PR)
1.  Crea una rama desde `develop`.
2.  Realiza tus cambios siguiendo la guía de estilo.
3.  Asegúrate de que los tests pasen (`pnpm test`).
4.  Abre un PR hacia `develop`.
5.  Solicita revisión de un compañero.
6.  Una vez aprobado, haz Squash & Merge.

---

## 🎨 Guía de Estilo de Código

-   **TypeScript**: Usamos `Strict Mode`. No usar `any` a menos que sea absolutamente inevitable.
-   **Formato**: Prettier se encarga del formato. Configura tu editor para formatear al guardar.
-   **Linter**: ESLint debe pasar sin errores antes de hacer commit.
-   **Componentes**:
    -   Usar Functional Components.
    -   Nombrar archivos en `kebab-case` (ej: `product-card.tsx`).
    -   Exports nombrados (evitar `export default` en componentes reutilizables).

---

## 📝 Convenciones de Commits

Seguimos la especificación **Conventional Commits**:

-   `feat`: Una nueva funcionalidad.
-   `fix`: Una corrección de errores.
-   `docs`: Cambios en la documentación.
-   `style`: Cambios de formato (espacios, puntos y comas) que no afectan la lógica.
-   `refactor`: Cambio de código que no arregla un bug ni añade una funcionalidad.
-   `perf`: Cambio que mejora el rendimiento.
-   `test`: Añadir o corregir tests.
-   `chore`: Actualización de tareas de construcción, configuración de paquetes, etc.

**Ejemplo:**
```
feat(auth): implementar login con google
fix(cart): corregir cálculo de total con descuento
style: formatear archivos con prettier
```

---

## ✅ Checklist de Pull Requests

Antes de solicitar revisión, verifica:

- [ ] Linter y Tests pasan localmente.
- [ ] No hay errores de TypeScript.
- [ ] El código está limpio (sin console.logs, código comentado).
- [ ] Has añadido tests para la nueva funcionalidad (si aplica).
- [ ] La documentación se ha actualizado (si aplica).
- [ ] Responsividad verificada en móvil y escritorio.

## 🐛 Reporte de Bugs

Al reportar un bug, por favor incluye:
1.  Pasos para reproducir.
2.  Comportamiento esperado vs real.
3.  Capturas de pantalla o video.
4.  Entorno (Navegador, SO).
