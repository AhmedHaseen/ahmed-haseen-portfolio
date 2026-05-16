import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/portfolioData";

const achievementImageContext = require.context(
  "../assets/Achievements_Images",
  false,
  /\.(png|jpe?g|webp)$/i,
);
const achievementImages = achievementImageContext
  .keys()
  .sort()
  .map((path) => ({
    src: achievementImageContext(path),
    alt: path.replace("./", "").replace(/\.[^/.]+$/, ""),
  }));

function AchCard({ emoji, title, sub, titleUrl, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#00D4AA]/30 hover:-translate-y-1 transition-all duration-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="text-4xl mb-4 block">{emoji}</span>
      {titleUrl ? (
        <a
          href={titleUrl}
          target="_blank"
          rel="noreferrer"
          className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2 leading-snug hover:text-sky-400 hover:scale-105 transition-colors transition-transform"
        >
          {title}
        </a>
      ) : (
        <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2 leading-snug">
          {title}
        </h3>
      )}
      <p className="text-xs text-gray-500 dark:text-gray-500">{sub}</p>
    </div>
  );
}

export default function Achievements() {
  const marqueeRef = useRef(null);
  const frameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const loopingImages = [...achievementImages, ...achievementImages];
  const portraitImages = new Set(["img1", "img2"]);

  const imagePositions = {
    img1: "50% 24%",
    img2: "35% 26%",
    img3: "55% 24%",
    img4: "48% 36%",
    img5: "68% 26%",
    img6: "40% 24%",
  };

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return undefined;

    const speedPerFrame = 0.55;

    const animate = () => {
      if (!isPaused) {
        const halfWidth = container.scrollWidth / 2;
        container.scrollLeft += speedPerFrame;

        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isPaused]);

  const moveSlides = (direction) => {
    const container = marqueeRef.current;
    if (!container) return;

    const step = direction === "left" ? -280 : 280;
    const halfWidth = container.scrollWidth / 2;
    let next = container.scrollLeft + step;

    if (next < 0) next += halfWidth;
    if (next >= halfWidth) next -= halfWidth;

    container.scrollTo({ left: next, behavior: "smooth" });
  };

  return (
    <section className="section-bg py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Milestones"
          title="Sports &"
          accent="Achievements"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <AchCard key={a.title} {...a} delay={i * 80} />
          ))}
        </div>

        {achievementImages.length > 0 && (
          <div
            className="ach-marquee-wrapper group relative mt-10 overflow-x-hidden overflow-y-visible rounded-xl border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-white dark:from-[#0A0F1E] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-white dark:from-[#0A0F1E] to-transparent z-10" />

            <button
              type="button"
              onClick={() => moveSlides("left")}
              aria-label="Previous achievement image"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#00D4AA]/35 bg-white/85 dark:bg-[#0A0F1E]/80 text-[#00D4AA] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft size={16} className="mx-auto" />
            </button>

            <button
              type="button"
              onClick={() => moveSlides("right")}
              aria-label="Next achievement image"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#00D4AA]/35 bg-white/85 dark:bg-[#0A0F1E]/80 text-[#00D4AA] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
            >
              <ChevronRight size={16} className="mx-auto" />
            </button>

            <div ref={marqueeRef} className="ach-marquee-track py-4">
              {loopingImages.map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className="ach-slide-item group/slide relative rounded-lg transition-transform duration-300 ease-out hover:scale-[1.16] hover:z-30"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    style={
                      portraitImages.has(image.alt)
                        ? {
                            objectPosition:
                              imagePositions[image.alt] || "50% 30%",
                          }
                        : { objectPosition: "center center" }
                    }
                    className={`h-32 sm:h-36 w-52 sm:w-60 md:w-64 rounded-lg border border-gray-200 dark:border-white/10 transition-all duration-300 ease-out group-hover/slide:brightness-110 group-hover/slide:border-[#00D4AA]/45 ${
                      portraitImages.has(image.alt)
                        ? "object-cover"
                        : "object-contain bg-gray-100 dark:bg-[#0f1a2f]/65 p-1"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .ach-marquee-track {
          display: flex;
          overflow-x: hidden;
          gap: 12px;
          scrollbar-width: none;
          will-change: transform;
        }

        .ach-marquee-track::-webkit-scrollbar {
          display: none;
        }

        .ach-slide-item {
          flex: 0 0 auto;
        }

        @media (min-width: 640px) {
          .ach-marquee-track {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
