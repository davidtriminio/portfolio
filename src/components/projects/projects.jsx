import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { projects } from "../../data/projects";
import "./projects.css";

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);

  useEffect(() => {
    if (!activeGallery) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveGallery((currentGallery) => {
          if (!currentGallery) {
            return currentGallery;
          }

          return {
            ...currentGallery,
            currentIndex: (currentGallery.currentIndex + 1) % currentGallery.images.length,
          };
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveGallery((currentGallery) => {
          if (!currentGallery) {
            return currentGallery;
          }

          return {
            ...currentGallery,
            currentIndex:
              (currentGallery.currentIndex - 1 + currentGallery.images.length) %
              currentGallery.images.length,
          };
        });
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

  const openGallery = (project, initialIndex = 0) => {
    const images = project.gallery?.length
      ? project.gallery
      : [{ src: project.image, alt: project.imageAlt }];

    setActiveGallery({
      projectTitle: project.title,
      images,
      currentIndex: initialIndex,
    });
  };

  const changeGalleryIndex = (nextIndex) => {
    setActiveGallery((currentGallery) => {
      if (!currentGallery) {
        return currentGallery;
      }

      return {
        ...currentGallery,
        currentIndex: nextIndex,
      };
    });
  };

  return (
    <>
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
              const galleryImages = project.gallery?.length
                ? project.gallery
                : [{ src: project.image, alt: project.imageAlt }];

              return (
                <article
                  className={`project-card ${isReversed ? "is-reversed" : ""}`}
                  key={project.id}
                  aria-labelledby={`project-${project.id}-title`}
                >
                  <div className="project-image-wrapper">
                    <button
                      type="button"
                      className="project-image-button"
                      onClick={() => {
                        openGallery(project, 0);
                      }}
                      aria-label={`Abrir galeria de imagenes de ${project.title}`}
                    >
                      <img
                        src={galleryImages[0].src}
                        alt={galleryImages[0].alt}
                        className="project-image"
                        loading="lazy"
                      />

                      <span className="project-image-overlay">
                        <Icon
                          icon="lineicons:gallery"
                          width={18}
                          height={18}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span>Ver galeria</span>
                      </span>
                    </button>

                    {galleryImages.length > 1 ? (
                      <div className="project-gallery-strip" aria-label={`Miniaturas de ${project.title}`}>
                        {galleryImages.map((image, imageIndex) => (
                          <button
                            type="button"
                            key={`${project.id}-thumb-${imageIndex}`}
                            className="project-gallery-thumb"
                            onClick={() => {
                              openGallery(project, imageIndex);
                            }}
                            aria-label={`Abrir imagen ${imageIndex + 1} de ${project.title}`}
                          >
                            <img
                              src={image.src}
                              alt=""
                              className="project-gallery-thumb-image"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    ) : null}
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

                    {project.demoCredentials ? (
                      <div className="project-demo-box" aria-label={`Credenciales de prueba para ${project.title}`}>
                        <p className="project-demo-title">
                          {project.demoCredentials.title}
                        </p>

                        {project.demoCredentials.note ? (
                          <p className="project-demo-note">
                            {project.demoCredentials.note}
                          </p>
                        ) : null}

                        <ul className="project-demo-list">
                          {project.demoCredentials.items.map((item) => (
                            <li key={`${project.id}-${item}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="project-links" aria-label={`Enlaces del proyecto ${project.title}`}>
                      <button
                        type="button"
                        className="project-link"
                        onClick={() => {
                          openGallery(project, 0);
                        }}
                        aria-label={`Abrir galeria del proyecto ${project.title}`}
                      >
                        <Icon
                          icon="lineicons:image-multiple"
                          width={24}
                          height={24}
                          aria-hidden="true"
                          focusable="false"
                          className="project-link-icon"
                        />

                        <span>Capturas</span>
                      </button>

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

      {activeGallery ? (
        <div
          className="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => {
            setActiveGallery(null);
          }}
        >
          <div
            className="project-modal"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="project-modal-header">
              <div>
                <p className="project-modal-subtitle">
                  Vista previa
                </p>
                <h3 className="project-modal-title" id="project-modal-title">
                  {activeGallery.projectTitle}
                </h3>
              </div>

              <button
                type="button"
                className="project-modal-close"
                onClick={() => {
                  setActiveGallery(null);
                }}
                aria-label="Cerrar galeria"
              >
                <Icon
                  icon="lineicons:close"
                  width={22}
                  height={22}
                  aria-hidden="true"
                  focusable="false"
                />
              </button>
            </div>

            <div className="project-modal-image-frame">
              <img
                src={activeGallery.images[activeGallery.currentIndex].src}
                alt={activeGallery.images[activeGallery.currentIndex].alt}
                className="project-modal-image"
              />
            </div>

            {activeGallery.images.length > 1 ? (
              <div className="project-modal-thumbs" aria-label="Selector de capturas">
                {activeGallery.images.map((image, imageIndex) => (
                  <button
                    type="button"
                    key={`${activeGallery.projectTitle}-${imageIndex}`}
                    className={`project-modal-thumb ${activeGallery.currentIndex === imageIndex ? "is-active" : ""}`}
                    onClick={() => {
                      changeGalleryIndex(imageIndex);
                    }}
                    aria-label={`Ver captura ${imageIndex + 1}`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="project-modal-thumb-image"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
