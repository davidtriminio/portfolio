import {useEffect, useState} from "react";
import {IMAGES} from "../../const/images";
import "./navbar.css";
import {Icon} from "@iconify/react";

const navLinks = [
    {
        label: "Sobre Mí",
        href: "#about-me",
    },
    {
        label: "Habilidades",
        href: "#skills",
    },
    {
        label: "Proyectos",
        href: "#projects",
    },
    {
        label: "Contacto",
        href: "#contact",
    },
];

export default function NavBar({ themePreference, setThemePreference }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#about-me");
    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const brandLogo = themePreference === "dark" ? IMAGES.logo_white : IMAGES.logo;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const updateActiveSection = () => {
            const navbarHeight = document.querySelector(".navbar-header")?.offsetHeight ?? 0;
            const currentPosition = window.scrollY + navbarHeight + 120;

            let currentSection = navLinks[0].href;

            sections.forEach((section) => {
                if (section.offsetTop <= currentPosition) {
                    currentSection = `#${section.id}`;
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const mobileViewport = window.innerWidth <= 768;

            setIsMobileViewport(mobileViewport);

            if (!mobileViewport) {
                setIsMenuOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <header className="navbar-header">
            <nav className="navbar-container" aria-label="Navegación principal">
                <a href="#page-top" className="navbar-brand" aria-label="Ir al inicio" onClick={closeMenu}>
                    <img
                        src={brandLogo}
                        width={72}
                        height={72}
                        alt=""
                        aria-hidden="true"
                        className="navbar-logo"
                    />
                </a>

                <span className="name-title">
    David Triminio
  </span>

                <button
                    type="button"
                    className="navbar-toggle"
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar-menu"
                    onClick={() => {
                        setIsMenuOpen((prevState) => !prevState);
                    }}
                >
                    <Icon
                        icon={isMenuOpen ? "lineicons:close" : "lineicons:menu-hamburger-1"}
                        width={28}
                        height={28}
                        aria-hidden="true"
                        focusable="false"
                    />
                </button>

                <div
                    className={`navbar-menu ${isMenuOpen ? "is-open" : ""}`}
                    id="navbar-menu"
                    aria-hidden={isMobileViewport && !isMenuOpen ? "true" : undefined}
                >
                    <div className="theme-control" role="group" aria-label="Cambiar tema">
                        <button
                            type="button"
                            className={`theme-icon-button ${themePreference === "dark" ? "is-active" : ""}`}
                            onClick={() => {
                                setThemePreference("dark");
                            }}
                            aria-pressed={themePreference === "dark"}
                            aria-label="Activar modo oscuro"
                            title="Modo oscuro"
                        >
                            <Icon
                                icon="lineicons:moon-half-right-5"
                                width={18}
                                height={18}
                                aria-hidden="true"
                                focusable="false"
                            />
                        </button>

                        <button
                            type="button"
                            className={`theme-icon-button ${themePreference === "light" ? "is-active" : ""}`}
                            onClick={() => {
                                setThemePreference("light");
                            }}
                            aria-pressed={themePreference === "light"}
                            aria-label="Activar modo claro"
                            title="Modo claro"
                        >
                            <Icon
                                icon="lineicons:sun-1"
                                width={18}
                                height={18}
                                aria-hidden="true"
                                focusable="false"
                            />
                        </button>
                    </div>

                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`nav-link ${activeSection === link.href ? "is-active" : ""}`}
                                    aria-current={activeSection === link.href ? "page" : undefined}
                                    onClick={() => {
                                        setActiveSection(link.href);
                                        closeMenu();
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/David-Triminio-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-button"
                        onClick={closeMenu}
                        aria-label="Ver hoja de vida de David Triminio en una nueva pestaña"
                    >
                        Ver CV

                        <Icon
                            icon="lineicons:eye"
                            width={24}
                            height={24}
                            aria-hidden="true"
                            focusable="false"
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
}
