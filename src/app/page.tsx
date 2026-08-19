import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PressWall from "@/components/PressWall";
import PortfolioGallery from "@/components/PortfolioGallery";
import BioConnect from "@/components/BioConnect";
import CareerSection from "@/components/CareerSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <PressWall />
        <PortfolioGallery />
        <BioConnect />
        <CareerSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}