import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Features } from "../components/Features";
import { Calculator } from "../components/Calculator";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";

export function OriginalConcept() {
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // init trigger

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 dark:bg-brand-dark dark:text-white transition-colors duration-300 min-h-screen">
      <div className="ambient-bg"></div>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Calculator />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
