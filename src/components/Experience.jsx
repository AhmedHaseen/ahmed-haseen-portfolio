import React from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { experience, certifications } from "../data/portfolioData";

function TimelineItem({ date, title, org, orgUrl, desc, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative pl-8 pb-8 last:pb-0 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-1.5 bottom-0 w-px bg-gray-100 dark:bg-white/10 last:hidden" />
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#00D4AA] shadow-[0_0_0_3px_rgba(0,212,170,0.15)] -translate-x-[3px]" />
      <p className="text-xs text-[#00D4AA] uppercase tracking-wider font-medium mb-1">
        {date}
      </p>
      <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base mb-0.5">
        {title}
      </h3>
      {orgUrl ? (
        <a
          href={orgUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2 hover:text-sky-400 hover:scale-105 transition-colors transition-transform"
        >
          {org}
        </a>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{org}</p>
      )}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function CertCard({ icon, name, issuer, verifyUrl, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#00D4AA]/30 transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00D4AA]/10 text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        {verifyUrl ? (
          <a
            href={verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm font-medium text-gray-900 dark:text-white leading-snug transition-colors transition-transform group-hover:text-[#38bdf8] group-hover:scale-105 hover:text-[#38bdf8] hover:scale-105"
          >
            {name}
          </a>
        ) : (
          <p className="inline-block text-sm font-medium text-gray-900 dark:text-white leading-snug transition-colors transition-transform group-hover:text-[#38bdf8] group-hover:scale-105">
            {name}
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
          {issuer}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-bg py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Background & Credentials"
          title="Experience &"
          accent="Certifications"
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-8 pb-3 border-b border-gray-100 dark:border-white/10 uppercase tracking-wider">
              Volunteer Experience
            </h3>
            <div>
              {experience.map((e, i) => (
                <TimelineItem key={e.title} {...e} delay={i * 100} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-8 pb-3 border-b border-gray-100 dark:border-white/10 uppercase tracking-wider">
              Professional Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((c, i) => (
                <CertCard key={c.name} {...c} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
