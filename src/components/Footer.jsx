import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/portfolioData';

const navLinks = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gray-50 dark:bg-[#111827] border-t border-gray-100 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-bold text-xl text-gray-900 dark:text-white"
          >
            Haseen<span className="text-[#00D4AA]">.MHA</span>
          </button>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(id => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 hover:text-[#00D4AA] transition-colors"
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { href: personal.github, icon: <Github size={16} />, label: 'GitHub' },
              { href: personal.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-400 hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} <span className="text-[#00D4AA]">Ahmed Haseen</span> · Data Analyst | Aspiring Data Scientist · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
