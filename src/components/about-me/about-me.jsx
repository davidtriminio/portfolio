import React from "react";
import { Icon } from "@iconify/react";
import { IMAGES } from "../../const/images";
import "../about-me/about-me.css";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: "lineicons:github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: "lineicons:linkedin",
  },
];

export default function AboutMe() {
  return (
      <section
          className="about-me-section"
          id="about-me"
          aria-labelledby="about-me-title"
      >
        <div className="about-me-content">
          <div className="about-me-text">
            <p className="about-me-greeting">
              Hola, soy{" "}
              <span className="about-me-name">
              David Triminio
            </span>
              .
            </p>

            <h1 className="about-me-title" id="about-me-title">
            <span className="developer-text">
              Desarrollador Full Stack
            </span>{" "}
              enfocado en soluciones web modernas
            </h1>

            <p className="about-me-description">
              Soy desarrollador Full Stack y me enfoco en crear aplicaciones
              web funcionales, modernas y escalables. Busco aportar en equipos
              de desarrollo, productos digitales y tambien colaborar en
              proyectos freelance, cuidando tanto la experiencia del usuario
              como la calidad tecnica de cada solucion.
            </p>

            <nav
                className="social-buttons"
                aria-label="Redes sociales de David Triminio"
            >
              {socialLinks.map((social) => (
                  <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar perfil de ${social.name}`}
                      title={social.name}
                  >
                    <Icon
                        icon={social.icon}
                        width={28}
                        height={28}
                        aria-hidden="true"
                        focusable="false"
                    />
                  </a>
              ))}
            </nav>
          </div>

          <div className="about-me-image-wrapper" aria-hidden="true">
            <div className="about-me-image-stack">
              <img
                  src={IMAGES.bannerWhite}
                  alt=""
                  className="about-me-image"
              />

              <div className="availability-badge">
                <div className="availability-avatar-ring">
                  <img
                      src={IMAGES.bannerWhite}
                      alt=""
                      className="availability-avatar"
                  />
                </div>

                <div className="availability-pill">
                  <span className="availability-dot" />
                  <Icon
                      icon="lineicons:briefcase"
                      width={16}
                      height={16}
                      aria-hidden="true"
                      focusable="false"
                  />
                  <span>Disponible para empleo y freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
