import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  Download,
} from "lucide-react";
import dpFinalImg from "../assets/Dp_Final.png";
import newDpImg from "../assets/New_Dp.png";
import cvFile from "../assets/Ahmed Haseen_CV.pdf";
import { personal, stats } from "../data/portfolioData";

export default function Hero() {
  const profileImages = [dpFinalImg, newDpImg];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 2800);

    return () => clearInterval(intervalId);
  }, [profileImages.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-bg overflow-hidden pt-16"
    >
      {/* Grid background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 70% 50%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 70% 50%, black 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D4AA]/30 bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium uppercase tracking-widest mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-blink" />
              Available for Opportunities
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-gray-900 dark:text-white mb-4 animate-fade-up">
              <span className="name-type-loop name-type-ahmed name-color-ahmed">
                Ahmed
              </span>
              <br />
              <span className="name-type-loop name-type-haseen name-color-haseen">
                Haseen
              </span>
            </h1>

            <p className="font-display text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-6 font-normal animate-fade-up animate-delay-100">
              {personal.title}
            </p>

            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed mb-8 animate-fade-up animate-delay-200">
              {personal.summary}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col items-center lg:items-start gap-3 mb-6 animate-fade-up animate-delay-300">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="animated-accent-btn inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg text-sm hover:-translate-y-0.5"
                >
                  View Projects <ArrowDown size={15} />
                </a>
                <a
                  href={cvFile}
                  download="Ahmed Haseen_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#00D4AA]/30 bg-[#00D4AA]/10 text-[#00D4AA] font-medium rounded-lg text-sm hover:bg-[#00D4AA]/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Download CV <Download size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/posts/ahmed-haseen_videocv-dataanalysis-datascience-ugcPost-7393572535378001920-kryf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF3BwpsBbkrPoPKR0OLGe6P4YxDGOWb-YjY"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#00D4AA]/30 bg-[#00D4AA]/10 text-[#00D4AA] font-medium rounded-lg text-sm hover:bg-[#00D4AA]/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Watch My Video CV
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-sm hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all duration-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up animate-delay-400">
              {[
                {
                  href: personal.github,
                  icon: <Github size={18} />,
                  label: "GitHub",
                },
                {
                  href: personal.linkedin,
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${personal.email}`,
                  icon: <Mail size={18} />,
                  label: "Email",
                },
                {
                  href: `tel:${personal.phone}`,
                  icon: <Phone size={18} />,
                  label: "Phone",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 animate-fade-in animate-delay-200">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4AA]/30 to-transparent blur-2xl scale-110" />
              {/* Rotating border */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00D4AA, transparent, #00D4AA)",
                  padding: "3px",
                  borderRadius: "50%",
                  animation: "spin 8s linear infinite",
                }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-[#0A0F1E]" />
              </div>
              {profileImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="Ahmed Haseen"
                  style={{
                    objectPosition: index === 1 ? "center 22%" : "center top",
                  }}
                  className={`absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover object-top transition-opacity duration-700 ${
                    activeImageIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up animate-delay-500">
          {stats.map(({ num, label, target }) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                document
                  .getElementById(target)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group text-center lg:text-left focus:outline-none"
              aria-label={`Go to ${label.toLowerCase()}`}
            >
              <div className="inline-block font-display text-3xl font-bold text-[#00D4AA] transition-colors transition-transform group-hover:text-sky-400 group-hover:scale-105">
                {num}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1 transition-colors group-hover:text-sky-400">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        @keyframes typeAhmed {
          0%, 6% { width: 0ch; }
          28%, 72% { width: 5.5ch; }
          100% { width: 0ch; }
        }

        @keyframes typeHaseen {
          0%, 6% { width: 0ch; }
          28%, 72% { width: 6.5ch; }
          100% { width: 0ch; }
        }

        @keyframes nameGradientAhmed {
          0% {
            background-image: linear-gradient(120deg, #00d4aa, #22d3ee, #38bdf8);
            background-position: 0% 50%;
          }
          25% {
            background-image: linear-gradient(120deg, #22c55e, #14b8a6, #0ea5e9);
            background-position: 100% 50%;
          }
          50% {
            background-image: linear-gradient(120deg, #06b6d4, #2dd4bf, #84cc16);
            background-position: 0% 50%;
          }
          75% {
            background-image: linear-gradient(120deg, #14b8a6, #60a5fa, #00d4aa);
            background-position: 100% 50%;
          }
          100% {
            background-image: linear-gradient(120deg, #00d4aa, #22d3ee, #38bdf8);
            background-position: 0% 50%;
          }
        }

        @keyframes nameGradientHaseen {
          0% {
            background-image: linear-gradient(120deg, #00d4aa, #0ea5e9, #22d3ee);
            background-position: 0% 50%;
          }
          25% {
            background-image: linear-gradient(120deg, #2dd4bf, #38bdf8, #60a5fa);
            background-position: 100% 50%;
          }
          50% {
            background-image: linear-gradient(120deg, #14b8a6, #22c55e, #06b6d4);
            background-position: 0% 50%;
          }
          75% {
            background-image: linear-gradient(120deg, #22d3ee, #00d4aa, #84cc16);
            background-position: 100% 50%;
          }
          100% {
            background-image: linear-gradient(120deg, #00d4aa, #0ea5e9, #22d3ee);
            background-position: 0% 50%;
          }
        }

        .name-type-loop {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0ch;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 240% 240%;
        }

        .name-type-ahmed {
          animation: typeAhmed 4.8s steps(6, end) infinite;
        }

        .name-type-haseen {
          animation: typeHaseen 4.8s steps(7, end) infinite;
        }

        .name-color-ahmed {
          animation: typeAhmed 4.6s steps(6, end) infinite, nameGradientAhmed 6.4s ease-in-out infinite;
        }

        .name-color-haseen {
          animation: typeHaseen 4.6s steps(7, end) infinite, nameGradientHaseen 6.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
