/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hola.",
  title2: "Matias",
  logo_name: "matias.p()",
  nickname: "matias1999 / picleric",
  full_name: "Matias Copparoni",
  subTitle:
    "Full Stack Jr. Developer | JavaScript | React | Node | Estudiante de Desarrollo de Software | Maipú, Mendoza, Argentina.",
  resumeLink:
    "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  mail: "mailto:",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/MatiasCopparoni",
  linkedin: "https://www.linkedin.com/in/matias-copparoni-907804264/",
  gmail: "copparonimatias22@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/matias_55",
  instagram: "https://www.instagram.com/coppa.22/",
};

const skills = {
  data: [
    {
      title: "Desarrollo Full Stack",
      fileName: "FullStackImg",
      skills: [
        "- Desarrollo de aplicaciones web dinámicas con React y Redux",
        "- Construcción de APIs y servicios con Node.js",
        "- Uso de JavaScript moderno y control de versiones con Git",
        "- Trabajo en equipo y colaboración presencial/remota",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#E94E32" },
        },
      ],
    },
  ],
};
const degrees = {
  degrees: [
    {
      title: "Instituto de educación superior 9-023",
      subtitle: "Tecnicatura en Desarrollo de Software",
      logo_path: "dal.png",
      alt_name: "IES 9-023",
      duration: "feb 2021 - Actualidad",
      descriptions: [
        "- Formación en desarrollo de software",
        "- Trabajo en equipo, GitHub y 9 aptitudes más",
      ],
      website_link: "",
    },
    {
      title: "Henry",
      subtitle: "Bootcamp Full Stack",
      logo_path: "100.png",
      alt_name: "Henry",
      duration: "mar 2022 - oct 2023",
      descriptions: [
        "- Trabajo en equipo, GitHub y 9 aptitudes más",
        "- HTML y otras habilidades técnicas",
      ],
      website_link: "https://www.soyhenry.com/",
    },
  ],
};
const experience = {
  title: "Experiencia",
  subtitle: "Trabajo",
  description:
    "Listo para aportar como Full Stack: combino base sólida en desarrollo de software con experiencia real optimizando operaciones y atención al cliente.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabajo",
      experiences: [
        {
          title: "Gestión Operativa y Atención al Cliente",
          company: "Del Sur y Media Agua",
          company_url: "",
          logo_path: "del-sur-media-agua.jpg",
          duration: "ene 2023 - Presente",
          location: "Maipú, Mendoza (Presencial)",
          description:
            "- Gestión integral de envíos y recepción de encomiendas\n" +
            "- Coordinación operativa y control administrativo de la documentación\n" +
            "- Manejo responsable de efectivo y conciliación diaria de caja\n" +
            "- Provisión de bocinas en tiempo y forma para resolver tránsito\n" +
            "- Trabajo bajo lineamientos y políticas establecidas\n" +
            "- Organización y optimización de procesos internos para mejorar tiempos de atención\n" +
            "- Organización de equipos y liderazgo (4 aptitudes más)",
          color: "#f10000",
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "Mis proyectos usan una gran variedad de herramientas tecnológicas actuales. Disfruto especialmente crear proyectos de Ciencia de Datos. A continuación algunos de ellos; no todos están publicados en GitHub todavía.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contáctame",
    profile_image_path: "matias2.png",
    description:
      "Abierto a nuevos desafíos: aporto enfoque full stack, mentalidad de servicio y vocación por mejorar procesos. Creemos algo juntos",
  },
};

const projects = {
  data: [
    {
      name: "Apifi",
      url: "http://apifi.io/",
      description:
        "Un marketplace de APIs. Lideré un equipo de 4 desarrolladores e implementé herramientas de generación de SDK y servicios núcleo como rate-limiter y consola.",
      languages: [
        {
          name: "AWS",
          iconifyClass: "devicon-aws",
        },
        {
          name: "Golang",
          iconifyClass: "devicon-go",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "DynamoDB",
          iconifyClass: "devicon-dynamodb",
        },
        {
          name: "Redis",
          iconifyClass: "devicon-redis",
        },
      ],
    },
    {
      name: "CineScope",
      url: "https://github.com/Matias1999/CineScope",
      description: "Una aplicación similar a IMDB.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Journalify",
      url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
      description:
        "Tu compañero de journaling, metas y retos diarios. Más de 5k descargas en Play Store.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "RecipesAPI",
      url: "https://rapidapi.com/Matias1999/api/recipesapi2",
      description: "Obtén recetas para cientos y miles de platos",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "https://github.com/Matias1999/opPortfolio",
      description:
        "(Este) Una plantilla de portafolio limpia y totalmente personalizable.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Cab Security System",
      url: " ",
      description:
        "Detección de somnolencia del conductor, lenguaje inapropiado, violencia, alertas SMS y trazado del chofer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Lensinator",
      url: " ",
      description:
        "Publicada en Play Store en 2017, superó 55K descargas. Incluye detección de objetos, captioning de imágenes, OCR manuscrito, escaneo de códigos de barras y QR con información de productos.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Doorbell.io",
      url: "https://github.com/Matias1999/Doorbell.io",
      description:
        "Webapp clasificador de sonidos hecha con ReactJS + TensorflowJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TensorflowJS",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Video Summarization",
      url: "https://github.com/Matias1999/Video-Summarization",
      description:
        "Webapp de resumido de video. Backend en Flask que sirve el modelo de Tensorflow y frontend en ReactJS.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      name: "Dashboard Activity",
      url: "https://github.com/Matias1999/Dashboard.activity",
      description:
        "Proyecto de Google Summer of Code. Actividad de Dashboard para Sugar OS que rastrea la actividad del usuario para saber dónde emplea más tiempo y dónde crea más archivos.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Pickle",
      url: " ",
      description:
        "App similar a Uber Eats pero enfocada en Gruhudhyogs (encurtidos y productos caseros). Gestión de pedidos, seguimiento en vivo, sistema de ratings y reseñas, etc.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Project Health Card",
      url: "",
      description:
        "Una tarjeta tipo Aadhaar que guarda tus registros de salud: medicamentos, análisis, enfermedades recientes, alergias, etc.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Food Classifier",
      url: " ",
      description:
        "App clasificadora de comida usando tflite que identifica más de 50 platos indios.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Image Clustering",
      url: " ",
      description:
        "Uso sencillo de K-Means para ordenar imágenes prediciendo automáticamente el número de clases. Útil para depurar un dataset de imágenes.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Antivirus",
      url: " ",
      description:
        "Proyecto de 2012. Antivirus con escaneo en tiempo real basado en comparación de hashes MD5.",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
      ],
    },
    {
      name: "Sugar on Windows",
      url: " ",
      description:
        "Ejecutar y configurar Sugar OS para que funcione en Windows usando WSL",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Object + Face Detection",
      url: " ",
      description:
        "Proyecto 2017. Detección de objetos y detección precisa de rostros.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      name: "Image Captioning with Visual Attention",
      url: " ",
      description:
        "En curso. Uso de MSCOCO 2014/2017 para generación de captions de imágenes.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "DalSocial",
      url: " ",
      description:
        "App Android para conocer gente en la universidad, organizar y unirse a eventos. ",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
          color: "#F18E33",
        },
        {
          name: "Android",
          iconifyClass: "simple-icons:android",
          color: "#3DDC84",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "HalifaxFoodie",
      url: " ",
      description:
        "Proyecto CSCI5410. App de recetas multi-cliente para Halifax Foodies.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "Google Cloud",
          iconifyClass: "logos-google-cloud",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
