import React, { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { education } from "../data/portfolioData";
import educationImage from "../assets/Image_edu.jpg";
import dpFinalImg from "../assets/Dp_Final.png";

function EduCard({ year, degree, inst, detail, detailUrl, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex gap-6 p-6 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#00D4AA]/30 hover:shadow-lg hover:shadow-[#00D4AA]/5 transition-all duration-300 hover:-translate-y-0.5 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex-shrink-0 text-center min-w-[72px]">
        <span className="font-display text-xs font-bold text-[#00D4AA] leading-tight">
          {year}
        </span>
      </div>
      <div className="min-w-0 border-l border-gray-100 dark:border-white/10 pl-6">
        <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-1">
          {degree}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{inst}</p>
        {detailUrl ? (
          <a
            href={detailUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-full flex-wrap text-center text-xs font-medium text-[#00D4AA] bg-[#00D4AA]/10 px-3 py-1 rounded-full leading-snug break-words hover:text-sky-400 hover:scale-105 transition-colors transition-transform"
          >
            {detail}
          </a>
        ) : (
          <span className="inline-flex max-w-full flex-wrap text-center text-xs font-medium text-[#00D4AA] bg-[#00D4AA]/10 px-3 py-1 rounded-full leading-snug break-words">
            {detail}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  const educationImages = [educationImage, dpFinalImg];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % educationImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [educationImages.length]);

  return (
    <section id="education" className="section-bg-alt py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Academic Background"
          title="My"
          accent="Education"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-8 lg:gap-10 items-start">
          <div className="flex flex-col gap-4 max-w-3xl">
            {education.map((e, i) => (
              <EduCard key={e.degree} {...e} delay={i * 100} />
            ))}
          </div>

          <div className="group hidden lg:block w-full max-w-md lg:justify-self-end rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 p-2 shadow-sm hover:shadow-lg hover:shadow-[#00D4AA]/10 hover:-translate-y-0.5 transition-all duration-300">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
              {educationImages.map((imageSrc, index) => (
                <img
                  key={imageSrc}
                  src={imageSrc}
                  alt="Academic background"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    activeImageIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  } group-hover:scale-105 group-hover:brightness-110`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
