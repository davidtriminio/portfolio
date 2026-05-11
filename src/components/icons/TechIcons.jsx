import React from 'react'
import {Icon} from "@iconify/react";

export const TechIcons = ({techs}) => {
    return (<div className={"social-buttons flex gap-4 my-6 justify-center flex-wrap"}>
        {techs.map((tech) => (
            <button
                key={`${tech.lib}-${tech.icon}`}
                type={"button"}
                className={"tech-icon"}>
                <Icon icon={`${tech.lib}:${tech.icon}`}
                  width={28}
                  height={28}
                  className="text-shadow-gray-950 hover:text-white transition-colors"/>
        </button>
        ))}
    </div>)
}
