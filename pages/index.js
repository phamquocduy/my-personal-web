import Navigation from "../components/layout/navigation";

import HeroSection from "../components/layout/hero-section";
import AboutMe from "../components/layout/about-me-panel";
import Resume from "../components/layout/resume";
import ContactMe from "../components/layout/contact-me";

import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />

      <HeroSection />
      <AboutMe />
      <Resume />
      <ContactMe />

      <Footer />
    </div>
  );
}
