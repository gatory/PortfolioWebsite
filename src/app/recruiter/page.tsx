import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/recruiter/ExperienceSection";
import HeroSection from "@/components/recruiter/HeroSection";
import Navbar from "@/components/recruiter/Navbar";
import ProjectSection from "@/components/recruiter/ProjectSection";

export default function RecruiterProfile() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </main>
    )
}