import React from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactComponent as WhatsappIcon } from "./assets/whatsapp-svgrepo-com.svg";

export default function App() {
  const [dark, toggleTheme] = useTheme();

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <a
        href="https://wa.me/94767502206"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact via WhatsApp"
        title="Let's connect."
        className="group lg:hidden fixed bottom-6 right-6 z-50"
      >
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0A0F1E] text-white text-xs px-2 py-1 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
          Let's connect.
        </span>
        <span className="w-12 h-12 rounded-full bg-[#25D366] shadow-lg shadow-black/10 flex items-center justify-center whatsapp-fab-pulse transition-transform group-hover:scale-105 active:scale-95">
          <WhatsappIcon className="w-6 h-6 text-white" aria-hidden="true" />
        </span>
      </a>
      <style>{`
        .whatsapp-fab-pulse {
          animation: whatsappPulse 150s ease-in-out infinite;
        }

        @keyframes whatsappPulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          20.01% {
            opacity: 0;
            transform: scale(0.94);
          }
          100% {
            opacity: 0;
            transform: scale(0.94);
          }
        }
      `}</style>
      <Footer />
    </div>
  );
}
