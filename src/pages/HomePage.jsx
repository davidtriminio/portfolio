import AboutMe from "../components/about-me/about-me";
import Projects from "../components/projects/projects";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";
import ContactForm from "../components/contact/contact-form";
import FooterComponent from "../components/footer/footer";

const HomePage = () => {
    return (
        <div className="max-w-[1400px] m-auto justify-center" id="page-top">
            <a href="#main-content" className="skip-link">
                Saltar al contenido principal
            </a>
            <NavBar/>
            <main id="main-content">
                <AboutMe/>
                <Skills/>
                <Projects/>
                <ContactForm/>
            </main>
            <FooterComponent/>
        </div>
    )
}
export default HomePage
