import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(id => document.getElementById(id)).filter(Boolean);
      const current = sections.find(s => window.scrollY >= s.offsetTop - 140);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-[#0A0F1E]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-lg text-gray-900 dark:text-white tracking-tight"
        >
          Haseen<span className="text-accent">.MHA</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(id => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
                  active === id
                    ? 'text-accent'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all duration-200"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
            aria-label="Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#111827] border-t border-gray-100 dark:border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left text-sm font-medium uppercase tracking-widest transition-colors ${
                active === id ? 'text-accent' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
