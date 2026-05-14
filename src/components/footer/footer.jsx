import React from "react";
import { IMAGES } from "../../const/images";
import "./footer.css";

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Pie de página">
            <div className="footer-content">
                <a href="#" className="footer-brand" aria-label="Ir al inicio">
                    <img
                        src={IMAGES.logo_white}
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
                    © {currentYear} David Triminio. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}