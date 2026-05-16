import React from "react";
import { useInView } from "../hooks/useInView";

export default function SectionHeader({ label, title, accent }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-[#00D4AA] mb-2">
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        {title} <span className="text-accent">{accent}</span>
      </h2>
    </div>
  );
}
