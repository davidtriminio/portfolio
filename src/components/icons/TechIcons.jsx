import React from "react";
import { Icon } from "@iconify/react";
import "../skills/skills.css";

export const TechIcons = ({ techs }) => {
    return (
        <ul className="tech-icons" aria-label="Lista de tecnologías">
            {techs.map((tech) => (
                <li
                    key={`${tech.lib}-${tech.icon}`}
                    className="tech-icon"
                    title={tech.name}
                    aria-label={tech.name}
                >
                    <Icon
                        icon={`${tech.lib}:${tech.icon}`}
                        width={28}
                        height={28}
                        aria-hidden="true"
                        focusable="false"
                    />
                </li>
            ))}
        </ul>
    );
};