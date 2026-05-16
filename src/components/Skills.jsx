import React from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/portfolioData";

function SkillCard({ icon, title, tags, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group p-6 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#00D4AA]/40 hover:bg-[#00D4AA]/5 dark:hover:bg-[#00D4AA]/5 transition-all duration-300 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700`}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-xs bg-[#00D4AA]/10 text-[#00D4AA] border border-[#00D4AA]/20 font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-bg py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What I Work With"
          title="Technical"
          accent="Skills"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <SkillCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
