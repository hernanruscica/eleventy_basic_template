export default {
    baseURL: "https://ejemplo.com",
    name: "Mi Sitio Web",
    description: "Descripción del sitio web.",
    keywords: "Palabra Clave 1, Palabra Clave 2, Portfolio",
    url: "https://ejemplo.com",
    twitterHandle: "@usuario",
    sections: [{name: "Inicio", url: "/"}, {name: "Proyectos", url: "/proyectos"}, 
        {name: "Curriculum Vitae", url: "/cv"}],
    socials: [   
        {   
            name: "email",         
            text: "Correo electronico",
            url: "usuario@ejemplo.com",
            icon: "envelope.svg"
        },       
        {   
            name: "linkedin",         
            text: "Perfil de LinkedIn",
            url: "https://www.linkedin.com/in/usuario/",
            icon: "linkedin.svg"
        },  
        {   
            name: "github",         
            text: "Perfil en GitHub",
            url: "https://github.com/usuario",
            icon: "github.svg"
        },  
        {   
            name: "website",         
            text: "Sitio web",
            url: "https://ejemplo.com",
            icon: "globe.svg"
        },  
    ],
    author: {
        name: "Nombre Apellido",
        title: "Título Profesional",
        photo: "profile.webp",
        bio: "Una breve biografía sobre ti.",
        url: "https://ejemplo.com",
        telephone: "+1234567890",
        whatsappPhone: "1234567890",
        email: "usuario@ejemplo.com",
        address: "Ciudad, País",
    },
    
    tecnologies: [
        { name: "Bootstrap", filename: "bootstrap.png" },
        { name: "CSS3", filename: "css-3-svgrepo-com.svg" },
        { name: "Express", filename: "express.png" },
        { name: "Figma", filename: "Figma-logo.svg" },
        { name: "Git", filename: "git-icon-svgrepo-com.svg" },
        { name: "HTML5", filename: "html-5-svgrepo-com.svg" },
        { name: "HTTP", filename: "http.png" },
        { name: "JavaScript", filename: "javascript-svgrepo-com.svg" },
        { name: "MySQL", filename: "mysql-svgrepo-com.svg" },
        { name: "Node.js", filename: "Node.js_logo.svg" },
        { name: "NPM", filename: "npm.png" },
        { name: "PHP", filename: "php.png" },
        { name: "Python", filename: "python.png" },
        { name: "React", filename: "React-icon.svg" },
        { name: "Tailwind CSS", filename: "tailwind_css.png" }
    ]
}
