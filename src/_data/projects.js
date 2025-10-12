/*
    para destacar un proyecto en la página principal, agregar la etiqueta "showcase" en el array de tags
*/
export default {
    name: "proyectos",
    list: [
        {
            name: "Nombre del Proyecto",
            description: "Descripción del proyecto.",
            images: [
                { small: "ruta/a/imagen_pequena.webp", big: "ruta/a/imagen_grande.webp" }
            ],
            url: "/proyectos/nombre-del-proyecto/",
            publishedDate: "YYYY-MM-DD",
            repoUrl: "https://github.com/usuario/repositorio",
            liveUrl: "https://ejemplo.com",
            tags: ["etiqueta1", "etiqueta2", "etiqueta3"]
        },
         {
            name: "Proyecto UNO",
            description: "Descripción del proyecto UNO.",
            images: [
                { small: "project_1/default_project.png", big: "project_1/default_project.png" },
                { small: "project_1/default_project_02.png", big: "project_1/default_project_02.png" }
            ],
            url: "/proyectos/proyecto-1/",
            publishedDate: "YYYY-MM-DD",
            repoUrl: "https://github.com/usuario/repositorio",
            liveUrl: "https://ejemplo.com",
            tags: ["showcase", "etiqueta1", "etiqueta2", "etiqueta3"]
        }
    ],
}
