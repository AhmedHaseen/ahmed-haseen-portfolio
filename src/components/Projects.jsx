import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolioData";

function ProjectCard({
  title,
  desc,
  tech,
  github,
  demo,
  image,
  delay,
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col p-6 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#00D4AA]/30 hover:shadow-lg hover:shadow-[#00D4AA]/5 dark:hover:bg-[#00D4AA]/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-700`}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4AA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="mb-4 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0f1a2f]/70 overflow-hidden aspect-video">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#13213a] dark:to-[#0A0F1E]">
            <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Image coming soon
            </span>
          </div>
        )}
      </div>

      <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-3 leading-snug pr-12">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        {desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#00D4AA] hover:opacity-70 transition-opacity font-medium"
          >
            <Github size={13} /> GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#00D4AA] hover:opacity-70 transition-opacity font-medium"
          >
            <ExternalLink size={13} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const dataProjects = projects.filter((p) => p.category === "data");
  const webProjects = projects.filter((p) => p.category === "web");

  return (
    <section id="projects" className="section-bg-alt py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What I've Built"
          title="Project"
          accent="Categories"
        />

        <div id="data-projects" className="mt-16 scroll-mt-24">
          <a
            href="#data-projects"
            className="group inline-flex flex-col items-start mb-6"
          >
            <span className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white group-hover:text-[#00D4AA] transition-all duration-300 group-hover:tracking-wide">
              Data Analytics & Machine Learning Projects
            </span>
            <span className="h-0.5 w-12 mt-1 bg-[#00D4AA]/70 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="text-xs text-[#00D4AA] mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Explore section ->
            </span>
          </a>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dataProjects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>
        </div>

        <div id="web-projects" className="mt-16 scroll-mt-24">
          <a
            href="#web-projects"
            className="group inline-flex flex-col items-start mb-6"
          >
            <span className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white group-hover:text-[#00D4AA] transition-all duration-300 group-hover:tracking-wide">
              Full-Stack Web Development Projects
            </span>
            <span className="h-0.5 w-12 mt-1 bg-[#00D4AA]/70 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="text-xs text-[#00D4AA] mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Explore section ->
            </span>
          </a>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {webProjects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
