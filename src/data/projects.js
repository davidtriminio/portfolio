import {IMAGES} from "../const/images";

export const projects = [
    {
        id: "online-learning-platform",
        title: {
            es: "Online Learning Platform",
            en: "Online Learning Platform",
        },
        description: {
            es: "Plataforma de aprendizaje online construida con Angular 22+, orientada a demostrar una arquitectura moderna, escalable y completamente reactiva. Consume una API REST para implementar autenticación, gestión de cursos, videos, inscripciones, progreso de aprendizaje y favoritos, resolviendo la integración entre múltiples recursos mediante stores, repositorios, DTOs y mappers. El proyecto prioriza rendimiento y mantenibilidad mediante Signals, SignalStore, arquitectura orientada al dominio, lazy loading, SSR, zoneless, @defer, hidratación, testing con Vitest y despliegue SSR en Vercel.",
            en: "Online learning platform built with Angular 22+, focused on demonstrating a modern, scalable, and fully reactive architecture. It consumes a REST API to implement authentication, course management, videos, enrollments, learning progress, and favorites, solving the integration between multiple resources through stores, repositories, DTOs, and mappers. The project prioritizes performance and maintainability using Signals, SignalStore, domain-oriented architecture, lazy loading, SSR, zoneless, @defer, hydration, Vitest testing, and SSR deployment on Vercel.",
        },
        image: IMAGES.olp_4,
        imageAlt: {
            es: "Vista principal de la plataforma de aprendizaje online",
            en: "Main view of the online learning platform",
        },
        gallery: [
            {
                src: IMAGES.olp,
                alt: {
                    es: "Vista de la plataforma de aprendizaje online",
                    en: "Online learning platform overview",
                },
            },
            {
                src: IMAGES.olp_2,
                alt: {
                    es: "Catálogo de cursos de la plataforma de aprendizaje",
                    en: "Course catalog of the learning platform",
                },
            },
            {
                src: IMAGES.olp_3,
                alt: {
                    es: "Detalle de curso con contenido y reproducción de videos",
                    en: "Course detail with content and video playback",
                },
            },
            {
                src: IMAGES.olp_4,
                alt: {
                    es: "Interfaz principal de la plataforma en tema oscuro",
                    en: "Main platform interface in dark theme",
                },
            },
            {
                src: IMAGES.olp_5,
                alt: {
                    es: "Gestión de cursos y progreso de aprendizaje",
                    en: "Course management and learning progress",
                },
            },
            {
                src: IMAGES.olp_6,
                alt: {
                    es: "Vista de la plataforma de aprendizaje online",
                    en: "Online learning platform view",
                },
            },
            {
                src: IMAGES.olp_dark,
                alt: {
                    es: "Plataforma de aprendizaje online en tema oscuro",
                    en: "Online learning platform in dark theme",
                },
            },
            {
                src: IMAGES.olp_dark_2,
                alt: {
                    es: "Catálogo de cursos en tema oscuro",
                    en: "Course catalog in dark theme",
                },
            },
            {
                src: IMAGES.olp_dark_3,
                alt: {
                    es: "Detalle y reproducción de contenido en tema oscuro",
                    en: "Course detail and content playback in dark theme",
                },
            },
            {
                src: IMAGES.olp_dark_4,
                alt: {
                    es: "Vista de la plataforma de aprendizaje en tema oscuro",
                    en: "Learning platform view in dark theme",
                },
            },
        ],
        previewUrl: "https://learning-platform.davidtriminio.dev",
        technologies: [
            {name: "Angular", lib: "lineicons", icon: "angular"},
            {name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss"},
            {name: "Vite", lib: "lineicons", icon: "vite"},
            {name: "Vercel", lib: "lineicons", icon: "vercel"},
            {name: "NgRx Signals", lib: "devicon-plain", icon: "ngrx"},
            {name: "Vitest", lib: "devicon-plain", icon: "vitest"},
            {name: "SSR", lib: "lineicons", icon: "angular"},
        ],
        demoAccess: {
            label: {
                es: "Probar demo",
                en: "Try demo",
            },
            url: "https://learning-platform.davidtriminio.dev/demo",
        },
    },
    {
        id: "vitrine",
        title: {
            es: "Vitrine",
            en: "Vitrine",
        },
        description: {
            es: "MVP de e-commerce y catálogo digital para una floristería local, actualmente en producción. La plataforma permite presentar el catálogo de productos, organizar flores y arreglos por categorías, destacar ofertas y gestionar el contenido desde un panel administrativo sencillo. El frontend está construido con Angular 22+ y consume una API REST desarrollada con .NET 10, manteniendo una separación clara entre presentación, estado y comunicación con el backend. El proyecto está diseñado como una base evolutiva: parte de una solución simple y enfocada en las necesidades actuales del negocio, pero preparada para incorporar progresivamente nuevas funcionalidades comerciales y operativas.",
            en: "Production-ready MVP for a local flower shop, combining a digital product catalog with a foundation for future e-commerce capabilities. The platform allows customers to browse flowers and arrangements, explore products by category, discover featured offers, and provides a simple admin panel for managing the catalog and promotional content. The frontend is built with Angular 22+ and consumes a REST API powered by .NET 10, maintaining a clear separation between presentation, state management, and backend communication. The project is intentionally focused on the business's current needs while providing an extensible foundation for progressively adding new commercial and operational features.",
        },
        image: IMAGES.vitrine_1,
        imageAlt: {
            es: "Vista principal de Vitrine, catálogo digital para floristería",
            en: "Main view of Vitrine, a digital catalog for a flower shop",
        },
        gallery: [
            {
                src: IMAGES.vitrine,
                alt: {
                    es: "Vista principal del catálogo de productos de Vitrine",
                    en: "Main product catalog view of Vitrine",
                },
            },
            {
                src: IMAGES.vitrine_1,
                alt: {
                    es: "Vista principal del catálogo de productos de Vitrine",
                    en: "Main product catalog view of Vitrine",
                },
            },
            {
                src: IMAGES.vitrine_2,
                alt: {
                    es: "Catálogo de flores y arreglos de la floristería",
                    en: "Flower and arrangement catalog",
                },
            },
            {
                src: IMAGES.vitrine_3,
                alt: {
                    es: "Productos organizados por categorías",
                    en: "Products organized by categories",
                },
            },
            {
                src: IMAGES.vitrine_4,
                alt: {
                    es: "Sección de ofertas y productos destacados",
                    en: "Offers and featured products section",
                },
            },
            {
                src: IMAGES.vitrine_5,
                alt: {
                    es: "Panel administrativo para gestionar el catálogo",
                    en: "Admin panel for catalog management",
                },
            },
            {
                src: IMAGES.vitrine_6,
                alt: {
                    es: "Panel administrativo para gestionar el catálogo",
                    en: "Admin panel for catalog management",
                },
            },
            {
                src: IMAGES.vitrine_7,
                alt: {
                    es: "Panel administrativo para gestionar el catálogo",
                    en: "Admin panel for catalog management",
                },
            },
            {
                src: IMAGES.vitrine_8,
                alt: {
                    es: "Panel administrativo para gestionar el catálogo",
                    en: "Admin panel for catalog management",
                },
            },
            {
                src: IMAGES.vitrine_10,
                alt: {
                    es: "Panel administrativo para gestionar el catálogo",
                    en: "Admin panel for catalog management",
                },
            },
        ],
        previewUrl: "https://vitrine-rho-navy.vercel.app/",
        technologies: [
            {name: "Angular", lib: "lineicons", icon: "angular"},
            {name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss"},
            {name: "Vite", lib: "lineicons", icon: "vite"},
            {name: ".NET 10", lib: "lineicons", icon: "code"},
            {name: "NgRx Signals", lib: "devicon-plain", icon: "ngrx"},
            {name: "Vitest", lib: "devicon-plain", icon: "vitest"},
            {name: "SSR", lib: "lineicons", icon: "angular"},
            {name: "Vercel", lib: "lineicons", icon: "vercel"},
        ],
    },
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
            {name: "MongoDB", lib: "devicon-plain", icon: "mongodb"},
            {name: "Express.js", lib: "lineicons", icon: "expressjs"},
            {name: "React", lib: "lineicons", icon: "react"},
            {name: "Node.js", lib: "lineicons", icon: "nodejs"},
            {name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss"},
            {name: "Vite", lib: "lineicons", icon: "vite"},
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
            {name: "React", lib: "lineicons", icon: "react"},
            {name: "Node.js", lib: "lineicons", icon: "nodejs"},
            {name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss"},
            {name: "Vite", lib: "lineicons", icon: "vite"},
        ],
    },
];
