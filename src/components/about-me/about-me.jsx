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
              Desarrollador Web
            </span>{" "}
              Frontend/Backend
            </h1>

            <p className="about-me-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ratione pariatur dolore?
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
            <img
                src={IMAGES.bannerWhite}
                alt=""
                className="about-me-image"
            />
          </div>
        </div>
      </section>
  );
}