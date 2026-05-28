import React from "react";
import "./skills.css";
import { TechIcons } from "../icons/TechIcons.jsx";
import { useLanguage } from "../../context/language-context.jsx";

export default function Skills() {
    const { t } = useLanguage();

    const frontend = [
        { name: "React", lib: "lineicons", icon: "react" },
        { name: "JavaScript", lib: "lineicons", icon: "javascript" },
        { name: "TypeScript", lib: "lineicons", icon: "typescript" },
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
            title: t.skills.sections.frontend.title,
            description: t.skills.sections.frontend.description,
            techs: frontend,
        },
        {
            id: "backend",
            title: t.skills.sections.backend.title,
            description: t.skills.sections.backend.description,
            techs: backend,
        },
        {
            id: "databases",
            title: t.skills.sections.databases.title,
            description: t.skills.sections.databases.description,
            techs: databases,
        },
        {
            id: "deployment",
            title: t.skills.sections.deployment.title,
            description: t.skills.sections.deployment.description,
            techs: deployment,
        },
        {
            id: "tools",
            title: t.skills.sections.tools.title,
            description: t.skills.sections.tools.description,
            techs: tools,
        },
        {
            id: "design",
            title: t.skills.sections.design.title,
            description: t.skills.sections.design.description,
            techs: design,
        },
        {
            id: "exploring",
            title: t.skills.sections.exploring.title,
            description: t.skills.sections.exploring.description,
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
                    {t.skills.subtitle}
                </p>

                <h2 className="skills-title" id="skills-title">
                    {t.skills.title}
                </h2>

                <p className="skills-description">
                    {t.skills.description}
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
