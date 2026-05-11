import React from "react";
import "./skills.css";
import {Icon} from "@iconify/react";
import {TechIcons} from "../icons/TechIcons.jsx";

export default function Skills() {
    const frontend = [
        {lib: "lineicons", icon: "react"},
        {lib: "lineicons", icon: "javascript"},
        {lib: "devicon-plain", icon: "html5"},
        {lib: "devicon-plain", icon: "css3"},
        {lib: "lineicons", icon: "tailwindcss"},
        {lib: "devicon-plain", icon: "bootstrap"},
        {lib: "lineicons", icon: "vite"},
    ]

    const backend = [
        {lib: "lineicons", icon: "nodejs"},
        {lib: "lineicons", icon: "expressjs"},
        {lib: "devicon-plain", icon: "mongodb"},
        {lib: "devicon", icon: "mongoose-wordmark"},
        {lib: "lineicons", icon: "postgresql"},
        {lib: "lineicons", icon: "mysql"},
        {lib: "lineicons", icon: "laravel"},
    ]

    const learning = [
        {lib: "lineicons", icon: "nextjs"},
        {lib: "lineicons", icon: "docker"},
        {lib: "devicon-plain", icon: "linux"},
        {lib: "devicon-plain", icon: "java"},
        {lib: "devicon-plain", icon: "kotlin"},
    ]

    const tools = [
        {lib: "lineicons", icon: "git"},
        {lib: "lineicons", icon: "github"},
        {lib: "devicon-plain", icon: "vscode"},
        {lib: "devicon-plain", icon: "webstorm"},
        {lib: "devicon-plain", icon: "postman"},
        {lib: "lineicons", icon: "figma"},
        {lib: "devicon-plain", icon: "photoshop"},
        {lib: "devicon-plain", icon: "illustrator"},
        {lib: "devicon-plain", icon: "npm"},
    ]

    return (
        <section className="px-32 py-8" id="#skills">
            <div className="text-3xl font-bold text-center">
                <p>Habilidades</p>
            </div>
            {/* Main Container */}
            <div className="p-4">
                <div className="flex flex-row justify-around py-4">
                    <div className="container-lang w-1/2">
                        <p className="text-center font-bold">Frontend</p>
                        <TechIcons techs={frontend}/>
                    </div>
                    <div className="container-lang w-1/2">
                        <p className="text-center font-bold">Backend</p>
                            <TechIcons techs={backend}/>
                    </div>
                </div>
                <div className="flex flex-row justify-around py-4">
                    <div className="container-lang w-1/2">
                        <p className="text-center font-bold">Aprendiendo</p>
                            <TechIcons techs={learning}/>
                    </div>
                    <div className="container-lang w-1/2">
                        <p className="text-center font-bold">Herramientas</p>
                        <TechIcons techs={tools}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
