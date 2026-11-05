# Food Safety Academy — Primera versión de la página web

¡Bienvenida! Esta es una **página informativa de demostración** para tu futura academia de capacitación en inocuidad alimentaria. No necesitas instalar programas ni saber programar para publicar esta versión.

## 1. Qué incluye

- `index.html` — página principal: presentación, catálogo, metodología, modalidades, quiénes somos, preguntas frecuentes y contacto.
- `styles.css` — diseño visual y colores.
- `app.js` — filtros de cursos, menú móvil, temarios emergentes y preparación de una consulta.
- `assets/` — logotipo, favicon e ilustraciones SVG. Estas imágenes se ven nítidas en cualquier pantalla.
- `README.md` — estas instrucciones.

**Colores elegidos**: verde bosque `#0E5F55` (confianza, higiene), verde oscuro `#123C40` (seriedad técnica), verde menta `#E6F4EB` (frescura), blanco cálido `#FBFCF8` (limpieza) y dorado tenue `#D5B578` (calidad).

## 2. Cómo verla en tu computadora

Abre `index.html` con doble clic (Chrome, Firefox o Edge). No necesitas servidor para esta demostración. Los botones de filtros y temarios funcionan localmente. Algunas funciones del portapapeles requieren una página servida por HTTPS.

## 3. Cómo subirla a tu repositorio GitHub

Tu repositorio: `https://github.com/LybiaOT/Food-Safety-Academy`

1. Abre el ZIP y elige **Extraer todo**.
2. En GitHub entra en el repositorio.
3. Selecciona **uploading an existing file** si está vacío, o **Add file → Upload files** si ya contiene archivos.
4. Abre la carpeta `Food-Safety-Academy` en tu computadora.
5. Arrastra **los archivos `index.html`, `styles.css`, `app.js`, `README.md` y la carpeta `assets`**. No arrastres solamente el ZIP ni la carpeta contenedora.
6. Confirma que el repositorio tenga `index.html` directamente en el nivel principal, con `styles.css`, `app.js` y `assets/` al lado.
7. En el campo de cambios escribe `Primera versión de Food Safety Academy` y pulsa **Commit changes**.

> **Importante:** el nombre de la carpeta local puede ser distinto; lo importante es la posición de `index.html` en GitHub.

## 4. Cómo publicarla en internet gratis

**Opción recomendada: Cloudflare Pages**, conectado a GitHub.

1. Abre `https://dash.cloudflare.com/` y crea tu cuenta gratuita.
2. Entra en **Workers & Pages** y crea una aplicación de **Pages** importando el repositorio GitHub `LybiaOT/Food-Safety-Academy`. La navegación exacta puede variar con las actualizaciones del panel.
3. Selecciona la rama `main`.
4. Para esta página estática, deja la compilación vacía cuando el formulario lo permita; si requiere una orden, utiliza `exit 0`. Usa como carpeta de salida `.` (raíz del repositorio).
5. Publica. Cloudflare te asignará una dirección `*.pages.dev`.
6. Cada vez que subas cambios a `main`, Cloudflare podrá volver a publicar la página automáticamente.

No necesitas comprar un dominio para probar la web. Si más adelante quieres usar `foodsafetyacademy.com` o similar, tendrás que confirmar disponibilidad y pagar el dominio.

## 5. Cómo cambiar los textos y los cursos

- **Título y presentación:** edita `index.html`; busca el texto `La calidad empieza con el`.
- **Catálogo:** edita las cuatro tarjetas dentro de `id="courseGrid"` en `index.html`.
- **Temarios desplegables:** edita el objeto `courses` al principio de `app.js`. Los identificadores `bpm`, `haccp`, `auditorias` y `cip` deben coincidir con los botones `data-course` del HTML.
- **Colores:** modifica las variables al principio de `styles.css`.
- **Imágenes y logotipo:** sustituye los SVG en `assets` manteniendo sus nombres (o cambia las rutas en el HTML).
- **Nombre de marca:** busca `Food Safety Academy` en `index.html`.

Para editar en GitHub sin programas: abre un archivo y pulsa el icono de lápiz **Edit this file**, luego guarda mediante **Commit changes**.

## 6. Qué falta para convertirla en una academia operativa

Esta primera versión **NO** tiene:

- Cobros, carrito, facturas o inscripciones pagadas.
- Usuarios y contraseñas individuales.
- Aula privada ni videos de pago.
- Evaluaciones, seguimiento o expedición de certificados.
- Envío de mensajes desde la web ni captación automática de contactos.

El formulario de contacto **solo prepara y copia una consulta**; no transmite los datos a nadie. Antes de lanzar el negocio debemos conectar un servicio de formularios, correo y/o WhatsApp; un procesador de pago; y una plataforma LMS para alumnos. Podría ser una integración con un LMS sin código o una solución a medida. Nunca almacenes contraseñas, datos de alumnos ni claves de proveedores de pago en GitHub público.

Los temarios, modalidades, precios y certificados anunciados en el sitio son **ideas preliminares**, no cursos ya disponibles. Los certificados de finalización **no son automáticamente** documentos DC-3, acreditaciones oficiales ni equivalentes a cumplimiento de requisitos STPS.

## 7. Checklist para la próxima versión

- [ ] Confirmar nombre comercial y dominio.
- [ ] Sustituir descripciones de cursos por temarios definitivos.
- [ ] Definir duración, modalidad, fechas, precios y requisitos.
- [ ] Agregar correo de contacto empresarial real.
- [ ] Preparar aviso de privacidad y términos del servicio antes de recopilar datos o vender.
- [ ] Elegir plataforma LMS y método de cobro en México.
- [ ] Configurar certificados y sus condiciones de expedición.
- [ ] Probar en celular, computadora y proceso de inscripción.

**Nota:** puedes presentar una web de capacitación profesional antes de tener aula virtual; solo no anuncies funciones aún no habilitadas como si estuvieran operativas.
