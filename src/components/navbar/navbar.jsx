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

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#about-me");

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
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="navbar-header">
            <nav className="navbar-container" aria-label="Navegación principal">
                <a href="#" className="navbar-brand" aria-label="Ir al inicio" onClick={closeMenu}>
                    <img
                        src={IMAGES.logo}
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
                >
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
