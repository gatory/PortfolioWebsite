import Footer from "@/components/Footer";
import HeroSection from "@/components/recruiter/experience/HeroSection";
import PromotionSection from "@/components/recruiter/experience/PromotionSection";
import SeasonsSection from "@/components/recruiter/experience/SeasonsSection";
import Navbar from "@/components/recruiter/Navbar";

export default function ExperiencePage() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <SeasonsSection />
            <PromotionSection />
            <Footer />
        </main>
    );
}