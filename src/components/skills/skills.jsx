import React from "react";
import "./skills.css";
import { TechIcons } from "../icons/TechIcons.jsx";

export default function Skills() {
    const frontend = [
        { name: "React", lib: "lineicons", icon: "react" },
        { name: "JavaScript", lib: "lineicons", icon: "javascript" },
        { name: "HTML5", lib: "devicon-plain", icon: "html5" },
        { name: "CSS3", lib: "devicon-plain", icon: "css3" },
        { name: "Tailwind CSS", lib: "lineicons", icon: "tailwindcss" },
        { name: "Bootstrap", lib: "devicon-plain", icon: "bootstrap" },
        { name: "Vite", lib: "lineicons", icon: "vite" },
    ]

    const backend = [
        { name: "Node.js", lib: "lineicons", icon: "nodejs" },
        { name: "Express.js", lib: "lineicons", icon: "expressjs" },
        { name: "Laravel", lib: "lineicons", icon: "laravel" },
    ]

    const databases = [
        { name: "MongoDB", lib: "devicon-plain", icon: "mongodb" },
        {
            name: "Mongoose",
            type: "image",
            src: "/icons/mongoose.svg",
        },
        { name: "PostgreSQL", lib: "lineicons", icon: "postgresql" },
        { name: "MySQL", lib: "lineicons", icon: "mysql" },
    ]

    const deployment = [
        { name: "Vercel", lib: "lineicons", icon: "vercel" },
        {
            name: "Render",
            type: "image",
            src: "/icons/render.svg",
        },
    ]

    const tools = [
        { name: "Git", lib: "lineicons", icon: "git" },
        { name: "GitHub", lib: "lineicons", icon: "github" },
        { name: "Visual Studio Code", lib: "devicon-plain", icon: "vscode" },
        { name: "WebStorm", lib: "devicon-plain", icon: "webstorm" },
        { name: "Postman", lib: "devicon-plain", icon: "postman" },
        { name: "npm", lib: "devicon-plain", icon: "npm" },
        { name: "pnpm", lib: "devicon-plain", icon: "pnpm" },
    ]

    const design = [
        { name: "Figma", lib: "lineicons", icon: "figma" },
        { name: "Photoshop", lib: "devicon-plain", icon: "photoshop" },
        { name: "Illustrator", lib: "devicon-plain", icon: "illustrator" },
    ]

    const exploring = [
        { name: "Next.js", lib: "lineicons", icon: "nextjs" },
        { name: "Docker", lib: "lineicons", icon: "docker" },
        { name: "Linux", lib: "devicon-plain", icon: "linux" },
        { name: "Java", lib: "devicon-plain", icon: "java" },
        { name: "Kotlin", lib: "devicon-plain", icon: "kotlin" },
        { name: ".NET", lib: "devicon-plain", icon: "dotnetcore" },
    ]

    const skills = [
        {
            id: "frontend",
            title: "Frontend",
            description: "Interfaces modernas, responsivas y enfocadas en experiencia de usuario.",
            techs: frontend,
        },
        {
            id: "backend",
            title: "Backend",
            description: "APIs, lógica de servidor y desarrollo de aplicaciones web.",
            techs: backend,
        },
        {
            id: "databases",
            title: "Bases de datos",
            description: "Modelado, consultas, relaciones y manejo de entornos SQL y NoSQL.",
            techs: databases,
        },
        {
            id: "deployment",
            title: "Despliegue y hosting",
            description: "Publicacion y mantenimiento de aplicaciones web en entornos de produccion.",
            techs: deployment,
        },
        {
            id: "tools",
            title: "Herramientas",
            description: "Flujo de desarrollo, control de versiones, pruebas de APIs y gestión de paquetes.",
            techs: tools,
        },
        {
            id: "design",
            title: "Diseno de interfaces",
            description: "Criterio visual para crear interfaces limpias, consistentes y funcionales.",
            techs: design,
        },
        {
            id: "exploring",
            title: "Explorando",
            description: "Tecnologias que estoy fortaleciendo para ampliar mi perfil como desarrollador Full Stack.",
            techs: exploring,
        },
    ]

    return (
        <section
            className="skills-section"
            id="skills"
            aria-labelledby="skills-title"
        >
            <div className="skills-header">
                <p className="skills-subtitle">
                    Perfil tecnico
                </p>

                <h2 className="skills-title" id="skills-title">
                    Habilidades
                </h2>

                <p className="skills-description">
                    Tecnologias y herramientas con las que desarrollo soluciones
                    web completas, aportando tanto en interfaz como en logica de
                    negocio, bases de datos y despliegue en produccion.
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <article
                        className="container-lang"
                        key={skill.id}
                        aria-labelledby={`${skill.id}-title`}
                    >
                        <header className="skill-card-header">
                            <h3 id={`${skill.id}-title`}>
                                {skill.title}
                            </h3>

                            <p>
                                {skill.description}
                            </p>
                        </header>

                        <TechIcons techs={skill.techs} />
                    </article>
                ))}
            </div>
        </section>
    )
}
