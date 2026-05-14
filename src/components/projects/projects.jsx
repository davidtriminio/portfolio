import React from "react";
import { Icon } from "@iconify/react";
import { projects } from "../../data/projects";
import "./projects.css";

export default function Projects() {
  return (
      <section
          className="projects-section"
          id="projects"
          aria-labelledby="projects-title"
      >
        <div className="projects-container">
          <div className="projects-header">
            <p className="projects-subtitle">
              Portafolio
            </p>

            <h2 className="projects-title" id="projects-title">
              Mis <span>Proyectos</span>
            </h2>
          </div>

          <div className="project-cards">
            {projects.map((project, index) => {
              const isReversed = index % 2 !== 0;

              return (
                  <article
                      className={`project-card ${isReversed ? "is-reversed" : ""}`}
                      key={project.id}
                      aria-labelledby={`project-${project.id}-title`}
                  >
                    <div className="project-image-wrapper">
                      <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="project-image"
                          loading="lazy"
                      />
                    </div>

                    <div className="project-info">
                      <p className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3
                          className="project-name"
                          id={`project-${project.id}-title`}
                      >
                        {project.title}
                      </h3>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <a
                          href={project.url}
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver proyecto ${project.title}`}
                      >
                        <Icon
                            icon="lineicons:link-2-angular-right"
                            width={28}
                            height={28}
                            aria-hidden="true"
                            focusable="false"
                            className="icon-svg"
                        />
                      </a>
                    </div>
                  </article>
              );
            })}
          </div>
        </div>
      </section>
  );
}