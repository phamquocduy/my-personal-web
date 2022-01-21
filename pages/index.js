import dynamic from "next/dynamic";

import Navigation from "../components/layout/navigation";
import HeroSection from "../components/layout/hero-section";
import AboutMe from "../components/layout/about-me-panel";
// make sure that the SkillsChart component is only loaded in the browser
const SkillsChart = dynamic(() => import("../components/layout/skills-chart"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <AboutMe />
      <SkillsChart />
    </div>
  );
}
