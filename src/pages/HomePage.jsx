import AboutMe from "../components/about-me/about-me";
import Projects from "../components/projects/projects";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";
import ContactForm from "../components/contact/contact-form";
import FooterComponent from "../components/footer/footer";
import { useEffect } from "react";
import { useLanguage } from "../context/language-context.jsx";

const HomePage = ({ themePreference, setThemePreference }) => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = t.common.documentTitle;
    }, [t]);

    return (
        <div className="max-w-[1400px] m-auto justify-center" id="page-top">
            <a href="#main-content" className="skip-link">
                {t.common.skipToContent}
            </a>
            <NavBar
                themePreference={themePreference}
                setThemePreference={setThemePreference}
            />
            <main id="main-content">
                <AboutMe/>
                <Skills/>
                <Projects/>
                <ContactForm/>
            </main>
            <FooterComponent themePreference={themePreference}/>
        </div>
    )
}
export default HomePage
