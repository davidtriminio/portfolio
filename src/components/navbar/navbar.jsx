import {useEffect, useState} from "react";
import {IMAGES} from "../../const/images";
import "./navbar.css";
import {Icon} from "@iconify/react";
import { useLanguage } from "../../context/language-context.jsx";

const NAV_ITEMS = [
    {
        key: "about",
        href: "#about-me",
    },
    {
        key: "skills",
        href: "#skills",
    },
    {
        key: "projects",
        href: "#projects",
    },
    {
        key: "contact",
        href: "#contact",
    },
];

export default function NavBar({ themePreference, setThemePreference }) {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#about-me");
    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const brandLogo = themePreference === "dark" ? IMAGES.logo_white : IMAGES.logo;
    const navLinks = NAV_ITEMS.map((item) => ({
        href: item.href,
        label: t.navbar.links[item.key],
    }));

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const sections = NAV_ITEMS
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const updateActiveSection = () => {
            const navbarHeight = document.querySelector(".navbar-header")?.offsetHeight ?? 0;
            const currentPosition = window.scrollY + navbarHeight + 120;

            let currentSection = NAV_ITEMS[0].href;

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
            const mobileViewport = window.innerWidth <= 1024;

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
            <nav className="navbar-container" aria-label={t.navbar.ariaLabel}>
                <a href="#page-top" className="navbar-brand" aria-label={t.navbar.goHome} onClick={closeMenu}>
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
                    aria-label={isMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
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

                    <div className="navbar-controls">
                        <div className="theme-control" role="group" aria-label={t.navbar.changeTheme}>
                            <button
                                type="button"
                                className={`theme-icon-button ${themePreference === "dark" ? "is-active" : ""}`}
                                onClick={() => {
                                    setThemePreference("dark");
                                }}
                                aria-pressed={themePreference === "dark"}
                                aria-label={t.common.darkMode}
                                title={t.common.darkMode}
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
                                aria-label={t.common.lightMode}
                                title={t.common.lightMode}
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

                        <div className="language-switch" role="group" aria-label={t.common.language}>
                            <button
                                type="button"
                                className={`language-button ${language === "es" ? "is-active" : ""}`}
                                onClick={() => {
                                    setLanguage("es");
                                }}
                                aria-pressed={language === "es"}
                                title="Español"
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                className={`language-button ${language === "en" ? "is-active" : ""}`}
                                onClick={() => {
                                    setLanguage("en");
                                }}
                                aria-pressed={language === "en"}
                                title="English"
                            >
                                EN
                            </button>
                        </div>
                    </div>
                    <a
                        href={t.navbar.cvHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-button"
                        onClick={closeMenu}
                        aria-label={t.navbar.cvAriaLabel}
                    >
                        {t.navbar.cvLabel}

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
