import { IMAGES } from "../const/images";

export const projects = [
    {
        id: "promptforge",
        title: {
            es: "PromptForge",
            en: "PromptForge",
        },
        description: {
            es: "Aplicacion web desarrollada para crear, organizar y gestionar prompts de forma eficiente, ofreciendo una experiencia clara, intuitiva y orientada a optimizar el flujo de trabajo con herramientas de inteligencia artificial.",
            en: "Web application built to create, organize, and manage prompts efficiently, offering a clear, intuitive experience focused on improving workflows with artificial intelligence tools.",
        },
        image: IMAGES.project_1_image_1,
        imageAlt: {
            es: "Vista previa principal del proyecto PromptForge",
            en: "Main preview of the PromptForge project",
        },
        gallery: [
            {
                src: IMAGES.project_1_image_1,
                alt: {
                    es: "Vista general del dashboard de PromptForge",
                    en: "Overview of the PromptForge dashboard",
                },
            },
            {
                src: IMAGES.project_1_image_2,
                alt: {
                    es: "Vista de la seccion de organizacion de prompts en PromptForge",
                    en: "Prompt organization section in PromptForge",
                },
            },
            {
                src: IMAGES.project_1_image_3,
                alt: {
                    es: "Vista de lista de prompts de PromptForge",
                    en: "Prompt list view in PromptForge",
                },
            },
            {
                src: IMAGES.project_1_image_5,
                alt: {
                    es: "Vista general del dashboard de PromptForge en tema claro",
                    en: "PromptForge dashboard in light theme",
                },
            },
            {
                src: IMAGES.project_1_image_6,
                alt: {
                    es: "Vista de la seccion de organizacion de prompts en PromptForge en tema claro",
                    en: "Prompt organization section in light theme",
                },
            },
            {
                src: IMAGES.project_1_image_7,
                alt: {
                    es: "Vista de lista de prompts de PromptForge en tema claro",
                    en: "Prompt list view in light theme",
                },
            },
        ],
        previewUrl: "https://promptforge.davidtriminio.dev",
        githubUrl: "https://github.com/davidtriminio/promptforge",
        demoAccess: {
            label: {
                es: "Probar demo",
                en: "Try demo",
            },
            url: "https://promptforge.davidtriminio.dev/demo",
        },
        demoCredentials: {
            visible: false,
            title: {
                es: "Credenciales de prueba",
                en: "Demo credentials",
            },
            note: {
                es: "Usa una cuenta demo limitada y sin informacion sensible.",
                en: "Use a limited demo account with no sensitive information.",
            },
            items: {
                es: [
                    "Correo: demo@promptforge.app",
                    "Clave: Demo1234*",
                ],
                en: [
                    "Email: demo@promptforge.app",
                    "Password: Demo1234*",
                ],
            },
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
