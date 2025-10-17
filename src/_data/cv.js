export default {
  title: "Curriculum Vitae",
  profile: {
    name: "Tu Nombre",
    title: "Tu Título Profesional",
    image: "/assets/images/default_user.png",
    contact: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/tu-usuario/",
        text: "tu-usuario-linkedin"
      },
      {
        type: "phone",
        url: "tel:+1234567890",
        text: "+12 3456 7890"
      },
      {
        type: "mail",
        url: "mailto:tuemail@ejemplo.com",
        text: "tuemail@ejemplo.com"
      },
      {
        type: "globe",
        url: "https://tu-sitio-web.com",
        text: "tu-sitio-web.com"
      }
    ],
    download_button: "Descargar CV",
    print_message: "[CTRL+P] para imprimir o descargar."
  },
  summary: {
    title: "Perfil Profesional",
    content: "Aquí va un resumen conciso de tu perfil profesional. Destaca tus años de experiencia, áreas de especialización y las tecnologías clave que manejas. Menciona tus objetivos y lo que buscas en tu próximo rol."
  },
  experience: {
    title: "Experiencia Profesional",
    jobs: [
      {
        title: "Cargo Desempeñado",
        company: "Nombre de la Empresa",
        location: "Ciudad, País",
        date: "Mes Año – Actualidad",
        duties: [
          "Describe aquí una de tus responsabilidades principales. Usa verbos de acción y cuantifica tus logros siempre que sea posible.",
          "Otra responsabilidad importante. Enfócate en el impacto que tuviste en el equipo o en el proyecto.",
          "Menciona una tecnología o metodología específica que utilizaste para lograr un objetivo concreto."
        ]
      },
      {
        title: "Cargo Anterior",
        company: "Otra Empresa",
        location: "Ciudad, País",
        date: "Mes Año – Mes Año",
        duties: [
          "Describe una tarea clave que realizabas en este puesto.",
          "Menciona algún proyecto destacado en el que participaste y cuál fue tu rol.",
          "Logro medible: por ejemplo, 'Optimicé el tiempo de carga de la página principal en un 30%'.",
          "Otra descripción de tus funciones diarias."
        ]
      }
    ]
  },
  education: {
    title: "Educación",
    courses: [
      {
        title: "Nombre de la Carrera o Título",
        institution: "Nombre de la Universidad o Institución",
        location: "Ciudad, País",
        date: "Año de Inicio - Año de Finalización",
        description: "Breve descripción de la carrera o curso. Puedes mencionar áreas de enfoque o proyectos finales.",
        details: "Aquí puedes añadir más detalles, como materias destacadas o tecnologías aprendidas.",
        links: [
          {
            url: "#",
            text: "Ver Certificado",
            download: true
          }
        ]
      },
      {
        title: "Curso o Certificación Relevante",
        institution: "Plataforma o Entidad Educativa",
        location: "Online",
        date: "Año",
        description: "Descripción del curso, enfocado en las habilidades adquiridas.",
        links: [
          {
            url: "#",
            text: "Ver Repositorio del Proyecto"
          },
          {
            url: "#",
            text: "Certificado de Finalización",
            download: true
          }
        ]
      }
    ]
  },
  skills: {
    title: "Habilidades Adicionales",
    content: [
      "- <strong>Habilidades Técnicas:</strong> Lenguajes (ej. JavaScript, Python), Frameworks (ej. React, Node.js), Bases de Datos (ej. MySQL, MongoDB).",
      "- <strong>Metodologías:</strong> Scrum, Kanban, Agile.",
      "- <strong>Herramientas:</strong> Git, GitHub, Docker, Figma.",
      "- <strong>Idiomas:</strong> Español (Nativo), Inglés (Nivel).",
      "- <strong>Habilidades Blandas:</strong> Comunicación asertiva, trabajo en equipo, resolución de problemas."
    ]
  }
};
