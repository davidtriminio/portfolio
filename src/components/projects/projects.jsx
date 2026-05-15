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
              Experiencia practica
            </p>

            <h2 className="projects-title" id="projects-title">
              Proyectos y <span>soluciones</span>
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

                      {project.technologies?.length ? (
                          <div className="project-tech-stack" aria-label={`Tecnologías usadas en ${project.title}`}>
                            {project.technologies.map((tech) => (
                                <span
                                    key={`${project.id}-${tech.name}`}
                                    className="project-tech-pill"
                                    title={tech.name}
                                >
                                  <Icon
                                      icon={`${tech.lib}:${tech.icon}`}
                                      width={18}
                                      height={18}
                                      aria-hidden="true"
                                      focusable="false"
                                      className="project-tech-icon"
                                  />
                                  <span>{tech.name}</span>
                                </span>
                            ))}
                          </div>
                      ) : null}

                      <div className="project-links" aria-label={`Enlaces del proyecto ${project.title}`}>
                        {project.previewUrl && (
                            <a
                                href={project.previewUrl}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver proyecto ${project.title}`}
                            >
                              <Icon
                                  icon="lineicons:link-2-angular-right"
                                  width={24}
                                  height={24}
                                  aria-hidden="true"
                                  focusable="false"
                                  className="project-link-icon"
                              />

                              <span>Ver proyecto</span>
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver codigo fuente de ${project.title} en GitHub`}
                            >
                              <Icon
                                  icon="lineicons:github"
                                  width={24}
                                  height={24}
                                  aria-hidden="true"
                                  focusable="false"
                                  className="project-link-icon"
                              />

                              <span>Codigo fuente</span>
                            </a>
                        )}
                      </div>
                    </div>
                  </article>
              );
            })}
          </div>
        </div>
      </section>
  );
}
