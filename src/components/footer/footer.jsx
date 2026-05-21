import React from "react";
import { IMAGES } from "../../const/images";
import "./footer.css";
import { useLanguage } from "../../context/language-context.jsx";

export default function FooterComponent({ themePreference }) {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const footerLogo = themePreference === "dark" ? IMAGES.logo_white : IMAGES.logo;

    return (
        <footer className="footer" aria-label={t.footer.ariaLabel}>
            <div className="footer-content">
                <a href="#page-top" className="footer-brand" aria-label={t.footer.goHome}>
                    <img
                        src={footerLogo}
                        width={32}
                        height={32}
                        alt=""
                        aria-hidden="true"
                        className="footer-logo"
                    />

                    <span>
            David Triminio
          </span>
                </a>

                <p className="footer-copy">
                    © {currentYear} David Triminio. {t.footer.copySuffix}
                </p>
            </div>
        </footer>
    );
}
