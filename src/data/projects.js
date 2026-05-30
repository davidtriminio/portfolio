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
        image: IMAGES.promptForge,
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
    {
        id: "postresizer",
        title: {
            es: "PostResizer",
            en: "PostResizer",
        },
        description: {
            es: "Herramienta web para consultar dimensiones y formatos de contenido por red social, con filtros por plataforma, tipo de formato y medio, vista previa de proporciones, multiplicadores de exportacion y acceso rapido a favoritos y formatos recientes.",
            en: "Web tool for checking social media post dimensions and format specs by network, with filters by platform, format type, and media, plus ratio previews, export multipliers, and quick access to favorites and recent formats.",
        },
        image: IMAGES.postresizer_dark_1,
        imageAlt: {
            es: "Vista previa principal del proyecto PostResizer",
            en: "Main preview of the PostResizer project",
        },
        gallery: [
            {
                src: IMAGES.postresizer_dark_1,
                alt: {
                    es: "Vista general del catalogo de formatos de PostResizer en tema oscuro",
                    en: "Overview of the PostResizer format catalog in dark theme",
                },
            },
            {
                src: IMAGES.postresizer_dark_2,
                alt: {
                    es: "Vista de formatos por plataforma con dimensiones base y escaladas en PostResizer en tema oscuro",
                    en: "Platform format cards with base and scaled dimensions in PostResizer dark theme",
                },
            },
            {
                src: IMAGES.postresizer_dark_3,
                alt: {
                    es: "Vista previa de formatos verticales y notas de publicacion en PostResizer en tema oscuro",
                    en: "Vertical format previews and publishing notes in PostResizer dark theme",
                },
            },
            {
                src: IMAGES.postresizer_light_1,
                alt: {
                    es: "Vista general del catalogo de formatos de PostResizer en tema claro",
                    en: "Overview of the PostResizer format catalog in light theme",
                },
            },
            {
                src: IMAGES.postresizer_light_2,
                alt: {
                    es: "Vista de formatos por red social y vista previa de proporciones en PostResizer en tema claro",
                    en: "Network-based format view and ratio previews in PostResizer light theme",
                },
            },
        ],
        previewUrl: "https://postresizer.lat/",
        technologies: [
            { name: "React", lib: "lineicons", icon: "react" },
            { name: "Node.js", lib: "lineicons", icon: "nodejs" },
            { name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss" },
            { name: "Vite", lib: "lineicons", icon: "vite" },
        ],
    },
];
