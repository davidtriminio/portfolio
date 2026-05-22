import React from "react";
import { Icon } from "@iconify/react";
import { IMAGES } from "../../const/images";
import "../about-me/about-me.css";
import { useLanguage } from "../../context/language-context.jsx";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/davidtriminio",
    icon: "lineicons:github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/davidtriminio/",
    icon: "lineicons:linkedin",
  },
];

export default function AboutMe() {
  const { t } = useLanguage();

  return (
      <section
          className="about-me-section"
          id="about-me"
          aria-labelledby="about-me-title"
      >
        <div className="about-me-content">
          <div className="about-me-text">
            <p className="about-me-greeting">
              {t.about.greeting}{" "}
              <span className="about-me-name">
              {t.about.fullName}
            </span>
              .
            </p>

            <h1 className="about-me-title" id="about-me-title">
            <span className="developer-text">
              {t.about.titleLead}
            </span>{" "}
              {t.about.titleTail}
            </h1>

            <p className="about-me-description">
              {t.about.description}
            </p>

            <nav
                className="social-buttons"
                aria-label={t.about.socialAriaLabel}
            >
              {socialLinks.map((social) => (
                  <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.about.visitProfile} ${social.name}`}
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
                      src={IMAGES.profilePic}
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
                  <span>{t.about.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
