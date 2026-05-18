import { IMAGES } from "../const/images";

export const projects = [
    {
        id: "promptforge",
        title: "PromptForge",
        description: "Sitio web desarrollado para crear, organizar y gestionar prompts de forma eficiente, ofreciendo una experiencia clara, intuitiva y orientada a optimizar el flujo de trabajo con herramientas de inteligencia artificial.",
        image: IMAGES.project_1_image_1,
        imageAlt: "Vista previa principal del proyecto PromptForge",
        gallery: [
            {
                src: IMAGES.project_1_image_1,
                alt: "Vista general del dashboard de PromptForge",
            },
            {
                src: IMAGES.project_1_image_2,
                alt: "Vista de la seccion de organizacion de prompts en PromptForge",
            },
            {
                src: IMAGES.project_1_image_3,
                alt: "Vista de lista de prompts de PromptForge",
            },
            {
                src: IMAGES.project_1_image_5,
                alt: "Vista general del dashboard de PromptForge en tema claro",
            },
            {
                src: IMAGES.project_1_image_6,
                alt: "Vista de la seccion de organizacion de prompts en PromptForge en tema claro",
            },
            {
                src: IMAGES.project_1_image_7,
                alt: "Vista de lista de prompts de PromptForge en tema claro",
            },
        ],
        previewUrl: "https://promptforge.davidtriminio.dev",
        githubUrl: "https://github.com/davidtriminio/promptforge",
        demoCredentials: {
            title: "Credenciales de prueba",
            note: "Usa una cuenta demo limitada y sin informacion sensible.",
            items: [
                "Correo: demo@promptforge.app",
                "Clave: Demo1234*",
            ],
        },
        technologies: [
            { name: "MongoDB", lib: "devicon-plain", icon: "mongodb" },
            { name: "Express.js", lib: "lineicons", icon: "expressjs" },
            { name: "React", lib: "lineicons", icon: "react" },
            { name: "Node.js", lib: "lineicons", icon: "nodejs" },
            { name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss" },
            { name: "Vite", lib: "lineicons", icon: "vite" },
        ],
    },
    // {
    //     id: "landing-page",
    //     title: "Pagina de aterrizaje",
    //     description: "Landing page disenada para comunicar una propuesta de valor de manera directa, con enfoque en rendimiento, adaptacion movil y una estructura visual orientada a conversion.",
    //     image: IMAGES.project2,
    //     imageAlt: "Vista previa principal de pagina de aterrizaje",
    //     gallery: [
    //         {
    //             src: IMAGES.project2,
    //             alt: "Vista principal de la pagina de aterrizaje",
    //         },
    //         {
    //             src: IMAGES.project3,
    //             alt: "Vista alternativa de la pagina de aterrizaje en otra seccion",
    //         },
    //     ],
    //     previewUrl: "https://landing-demo.vercel.app",
    //     githubUrl: "",
    //     technologies: [
    //         { name: "HTML5", lib: "devicon-plain", icon: "html5" },
    //         { name: "CSS3", lib: "devicon-plain", icon: "css3" },
    //         { name: "JavaScript", lib: "lineicons", icon: "javascript" },
    //     ],
    // },
];
