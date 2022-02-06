import Head from "next/head";
import { Element } from "react-scroll";

import Navigation from "../components/layout/navigation";

import HeroSection from "../components/layout/hero-section";
import AboutMe from "../components/layout/about-me-panel";
import Resume from "../components/layout/resume";
import ContactMe from "../components/layout/contact-me";

import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Duy.Dev</title>
        <meta name="description" content="Duy.Dev portfolio" />

        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      {/* navigation menu */}
      <Navigation />

      {/* hero section */}
      <HeroSection />

      {/* my services */}
      <AboutMe />

      {/* my resume */}
      <Element name="my-resume">
        <Resume />
      </Element>

      {/* contact me */}
      <Element name="contact-section">
        <ContactMe />
      </Element>

      {/* footer */}
      <Footer />
    </div>
  );
}
