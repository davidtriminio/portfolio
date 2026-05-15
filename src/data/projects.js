import { IMAGES } from "../const/images";

export const projects = [
    {
        id: "portfolio",
        title: "Portafolio personal",
        description: "Sitio web desarrollado para presentar proyectos, habilidades y perfil profesional en una experiencia visual coherente, responsive y enfocada en comunicar valor de forma clara.",
        image: IMAGES.project1,
        imageAlt: "Vista previa del portafolio personal",
        previewUrl: "https://tu-preview.vercel.app",
        githubUrl: "https://github.com/tuusuario/portfolio",
        technologies: [
            { name: "React", lib: "lineicons", icon: "react" },
            { name: "Vite", lib: "lineicons", icon: "vite" },
            { name: "CSS3", lib: "devicon-plain", icon: "css3" },
        ],
    },
    {
        id: "landing-page",
        title: "Pagina de aterrizaje",
        description: "Landing page disenada para comunicar una propuesta de valor de manera directa, con enfoque en rendimiento, adaptacion movil y una estructura visual orientada a conversion.",
        image: IMAGES.project2,
        imageAlt: "Vista previa de pagina de aterrizaje",
        previewUrl: "https://landing-demo.vercel.app",
        githubUrl: "",
        technologies: [
            { name: "HTML5", lib: "devicon-plain", icon: "html5" },
            { name: "CSS3", lib: "devicon-plain", icon: "css3" },
            { name: "JavaScript", lib: "lineicons", icon: "javascript" },
        ],
    },
];
