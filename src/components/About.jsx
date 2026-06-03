import React, { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { softSkills, languages } from "../data/portfolioData";
import dpFinalImg from "../assets/Dp_Final.png";
import newDpImg from "../assets/New_Dp.png";
import educationImage from "../assets/Image_edu.jpg";
import sportImage from "../assets/img1_sport.jpg";

export default function About() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const aboutImages = [dpFinalImg, newDpImg, educationImage, sportImage];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imagePositions = {
    [dpFinalImg]: "center top",
    [newDpImg]: "center 24%",
    [educationImage]: "center 40%",
    [sportImage]: "center 30%",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [aboutImages.length]);

  return (
    <section id="about" className="section-bg-alt py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Who I Am" title="About" accent="Me" />

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
          {/* Left: bio + info */}
          <div
            ref={ref}
            className={`min-w-0 overflow-visible lg:flex lg:flex-col lg:h-full transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed break-words mb-4">
              I'm a motivated{" "}
              <strong className="text-gray-900 dark:text-white font-medium">
                Data Analyst and aspiring Data Scientist
              </strong>{" "}
              currently pursuing a BSc (Hons) in Software Engineering at
              Sabaragamuwa University of Sri Lanka. I love transforming complex
              datasets into clear, compelling insights.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed break-words mb-4">
              My toolkit spans{" "}
              <strong className="text-gray-900 dark:text-white font-medium">
                Python, SQL, Power BI, and machine learning
              </strong>
              , and I'm continuously expanding my expertise in <strong className="text-gray-900 dark:text-white font-medium">
                data analytics, business intelligence, predictive modelling, and AI-driven automation.
              </strong> Beyond tech, I'm a martial arts competitor (
              Karate & Taekwondo ) — discipline and creativity run through
              everything I do.
            </p>

            {/* Languages */}
            <div className="hidden lg:block mt-auto pt-8">
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map(({ lang, level }) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-600 dark:text-gray-400"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lang}
                    </span>{" "}
                    · {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: looping images + soft skills */}
          <div
            ref={ref2}
            className={`min-w-0 lg:flex lg:flex-col lg:h-full transition-all duration-700 delay-100 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="hidden lg:block relative rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 p-2 shadow-sm h-[300px] sm:h-[360px] lg:h-[390px] xl:h-[430px] overflow-hidden group">
              {aboutImages.map((imgSrc, index) => (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt="About visual"
                  loading="lazy"
                  style={{
                    objectPosition: imagePositions[imgSrc] || "center center",
                  }}
                  className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-lg object-contain bg-gray-100 dark:bg-[#0f1a2f]/65 transition-all duration-700 ${
                    activeImageIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  } group-hover:scale-105 group-hover:brightness-110`}
                />
              ))}
            </div>

            <div className="mt-6 lg:hidden">
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map(({ lang, level }) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-600 dark:text-gray-400"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lang}
                    </span>{" "}
                    · {level}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 lg:mt-auto lg:pt-8">
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 text-[#00D4AA] text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
