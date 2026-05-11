import AboutMe from "../components/about-me/about-me";
import Projects from "../components/projects/projects";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";
import ContactForm from "../components/contact/contact-form";
import FooterComponent from "../components/footer/footer";

const HomePage = () => {
    return (
        <div className="max-w-[1200px] m-auto justify-center">
            <NavBar/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ContactForm/>
            <FooterComponent/>
        </div>
    )
}
export default HomePage
