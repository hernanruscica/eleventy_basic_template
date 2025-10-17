# ¡Bienvenido al Portfolio de [Tu Nombre]! 👋

Este es un sitio web de portfolio personal construido con [Eleventy](https://www.11ty.dev/). Es una forma sencilla y eficaz de mostrar tus proyectos, habilidades y experiencia profesional. ¡Ideal para desarrolladores, diseñadores y cualquier profesional que quiera tener una presencia online destacada! 🚀

## ¿Qué encontrarás aquí?

*   **Página de Inicio:** Una introducción a [Tu Nombre] y un resumen de lo que haces.
*   **Sección de Proyectos:** Una galería de tus trabajos más destacados, con descripciones detalladas y enlaces a repositorios o demos en vivo. 🌟
*   **Curriculum Vitae:** Tu CV online, fácil de ver y descargar.
*   **Información de Contacto:** Diferentes formas de ponerse en contacto contigo. 📧

## Tecnologías Utilizadas 🛠️

Este proyecto está construido con:

*   **Eleventy (11ty):** Un generador de sitios estáticos que te permite crear sitios web rápidos y flexibles.
*   **HTML5, CSS3 y JavaScript:** Los pilares de la web para la estructura, el estilo y la interactividad.
*   **Nunjucks:** Un potente motor de plantillas para Eleventy, que facilita la reutilización de código.

## ¡Manos a la Obra! Cómo Replicar este Proyecto en Local 💻

Sigue estos sencillos pasos para tener tu propio portfolio funcionando en tu máquina:

### 1. Clona el Repositorio 📥

Primero, necesitas obtener una copia de este proyecto. Abre tu terminal y ejecuta:

```bash
git clone https://github.com/hernanruscica/eleventy_basic_template.git
cd ruscica.com.ar # O el nombre de la carpeta que se haya creado
```

### 2. Instala las Dependencias 📦

Este proyecto utiliza `npm` para gestionar sus dependencias. Asegúrate de tener [Node.js](https://nodejs.org/es/) y `npm` instalados. Luego, desde la raíz del proyecto, ejecuta:

```bash
npm install
```

### 3. Inicia el Servidor de Desarrollo 🚀

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo. Esto compilará el sitio y lo servirá en tu navegador, actualizándose automáticamente con cada cambio que hagas.

```bash
npm start
```

Por defecto, el sitio estará disponible en `http://localhost:7777`.

### 4. Construye el Sitio para Producción 🏗️

Cuando estés listo para desplegar tu portfolio, puedes generar los archivos estáticos optimizados para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en la carpeta `public/`.

### 5. Personaliza tu Portfolio ✨

Para hacer este portfolio tuyo, necesitarás editar los archivos de datos y las plantillas:

*   **`src/_data/site.js`**: Aquí puedes configurar la información general de tu sitio, como tu nombre, descripción, enlaces a redes sociales y la lista de tecnologías que manejas. ¡Es el corazón de tu información personal!
*   **`src/_data/projects.js`**: Agrega tus proyectos a este archivo. Cada objeto de proyecto debe incluir un nombre, descripción, imágenes, URL, fecha de publicación, enlace al repositorio y a la demo en vivo, y etiquetas. Si quieres que un proyecto aparezca destacado en la página principal, añade la etiqueta `"showcase"` a su array de `tags`.
*   **`src/_data/cv.js`**: Edita este archivo para incluir toda tu información de curriculum vitae: perfil, experiencia, educación y habilidades.

¡Y listo! Con estos pasos, tendrás un portfolio increíble y personalizado. Si tienes alguna pregunta, no dudes en abrir un *issue* en el repositorio o contactar al autor. ¡Mucha suerte! 🍀
