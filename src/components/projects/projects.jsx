import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/language-context.jsx";
import "./projects.css";

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeGallery, setActiveGallery] = useState(null);

  const getLocalizedValue = (value) => {
    if (typeof value === "string") {
      return value;
    }

    return value?.[language] ?? value?.es ?? "";
  };

  const getLocalizedList = (value) => {
    if (Array.isArray(value)) {
      return value;
    }

    return value?.[language] ?? value?.es ?? [];
  };

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
      ? project.gallery.map((image) => ({
          src: image.src,
          alt: getLocalizedValue(image.alt),
        }))
      : [{ src: project.image, alt: getLocalizedValue(project.imageAlt) }];

    setActiveGallery({
      projectTitle: getLocalizedValue(project.title),
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
              {t.projects.subtitle}
            </p>

            <h2 className="projects-title" id="projects-title">
              {t.projects.titleLead} <span>{t.projects.titleHighlight}</span>
            </h2>
          </div>

          <div className="project-cards">
            {projects.map((project, index) => {
              const isReversed = index % 2 !== 0;
              const galleryImages = project.gallery?.length
                ? project.gallery.map((image) => ({
                    src: image.src,
                    alt: getLocalizedValue(image.alt),
                  }))
                : [{ src: project.image, alt: getLocalizedValue(project.imageAlt) }];
              const coverImage = {
                src: project.image ?? galleryImages[0]?.src,
                alt: getLocalizedValue(project.imageAlt) || galleryImages[0]?.alt || "",
              };
              const projectTitle = getLocalizedValue(project.title);
              const projectDescription = getLocalizedValue(project.description);
              const demoButtonLabel = getLocalizedValue(project.demoAccess?.label) || t.projects.demoButtonDefault;
              const demoCredentialsTitle = getLocalizedValue(project.demoCredentials?.title);
              const demoCredentialsNote = getLocalizedValue(project.demoCredentials?.note);
              const demoCredentialsItems = getLocalizedList(project.demoCredentials?.items);

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
                      aria-label={`${t.projects.openGallery} ${projectTitle}`}
                    >
                      <img
                        src={coverImage.src}
                        alt={coverImage.alt}
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
                        <span>{t.projects.gallery}</span>
                      </span>
                    </button>

                    {galleryImages.length > 1 ? (
                      <div className="project-gallery-strip" aria-label={`${t.projects.thumbnailsOf} ${projectTitle}`}>
                        {galleryImages.map((image, imageIndex) => (
                          <button
                            type="button"
                            key={`${project.id}-thumb-${imageIndex}`}
                            className="project-gallery-thumb"
                            onClick={() => {
                              openGallery(project, imageIndex);
                            }}
                            aria-label={`${t.projects.viewScreenshot} ${imageIndex + 1} de ${projectTitle}`}
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
                      {projectTitle}
                    </h3>

                    <p className="project-description">
                      {projectDescription}
                    </p>

                    {project.technologies?.length ? (
                      <div className="project-tech-stack" aria-label={`${t.projects.technologiesUsed} ${projectTitle}`}>
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

                    {project.demoAccess ? (
                      <a
                        href={project.demoAccess.url}
                        className="project-demo-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${demoButtonLabel} de ${projectTitle}`}
                      >
                        <Icon
                          icon="solar:rocket-bold-duotone"
                          width={20}
                          height={20}
                          aria-hidden="true"
                          focusable="false"
                          className="project-demo-button-icon"
                        />

                        <span>{demoButtonLabel}</span>
                      </a>
                    ) : null}

                    {project.demoCredentials &&
                    project.demoCredentials.visible !== false ? (
                      <div className="project-demo-box" aria-label={`${t.projects.demoCredentialsLabel} ${projectTitle}`}>
                        <p className="project-demo-title">
                          {demoCredentialsTitle}
                        </p>

                        {demoCredentialsNote ? (
                          <p className="project-demo-note">
                            {demoCredentialsNote}
                          </p>
                        ) : null}

                        <ul className="project-demo-list">
                          {demoCredentialsItems.map((item) => (
                            <li key={`${project.id}-${item}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="project-links" aria-label={`${t.projects.projectLinksLabel} ${projectTitle}`}>
                      <button
                        type="button"
                        className="project-link"
                        onClick={() => {
                          openGallery(project, 0);
                        }}
                        aria-label={`${t.projects.openGallery} ${projectTitle}`}
                      >
                        <Icon
                          icon="lineicons:image-multiple"
                          width={24}
                          height={24}
                          aria-hidden="true"
                          focusable="false"
                          className="project-link-icon"
                        />

                        <span>{t.projects.screenshots}</span>
                      </button>

                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.projects.viewProject} ${projectTitle}`}
                        >
                          <Icon
                            icon="lineicons:link-2-angular-right"
                            width={24}
                            height={24}
                            aria-hidden="true"
                            focusable="false"
                            className="project-link-icon"
                          />

                          <span>{t.projects.viewProject}</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.projects.sourceCodeAria} ${projectTitle} en GitHub`}
                        >
                          <Icon
                            icon="lineicons:github"
                            width={24}
                            height={24}
                            aria-hidden="true"
                            focusable="false"
                            className="project-link-icon"
                          />

                          <span>{t.projects.sourceCode}</span>
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
                  {t.projects.preview}
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
                aria-label={t.projects.closeGallery}
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
              <div className="project-modal-thumbs" aria-label={t.projects.screenshotSelector}>
                {activeGallery.images.map((image, imageIndex) => (
                  <button
                    type="button"
                    key={`${activeGallery.projectTitle}-${imageIndex}`}
                    className={`project-modal-thumb ${activeGallery.currentIndex === imageIndex ? "is-active" : ""}`}
                    onClick={() => {
                      changeGalleryIndex(imageIndex);
                    }}
                    aria-label={`${t.projects.viewScreenshot} ${imageIndex + 1}`}
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
