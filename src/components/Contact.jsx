import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { personal } from "../data/portfolioData";

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "mh.ahmedhaseen.ai@gmail.com",
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+94 76 7502206",
    href: `tel:${personal.phone}`,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedhaseen",
    href: personal.linkedin,
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/ahmedhaseen",
    href: personal.github,
  },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    // Opens email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-bg-alt py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Say Hello" title="Get In" accent="Touch" />

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl">
          I'm open to internship opportunities, freelance data projects,
          research collaborations, and full-time roles. Feel free to reach out —
          I'd love to connect!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info + links */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#00D4AA]/40 hover:bg-[#00D4AA]/5 dark:hover:bg-[#00D4AA]/5 transition-all duration-200 group"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00D4AA]/10 text-[#00D4AA] flex-shrink-0 group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="contact-address-value text-sm text-gray-800 dark:text-gray-200 font-medium">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            ref={ref2}
            className={`transition-all duration-700 delay-100 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-[#00D4AA]" />
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl">
                  Message Ready!
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Your email client has been opened with the message pre-filled.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm text-[#00D4AA] border border-[#00D4AA]/30 px-4 py-2 rounded-lg hover:bg-[#00D4AA]/10 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Ahmed..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-[#00D4AA] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-[#00D4AA] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Hi Ahmed, I'd love to..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-[#00D4AA] transition-colors resize-none"
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#00D4AA] text-[#0A0F1E] font-semibold rounded-xl hover:bg-[#00eec0] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#00D4AA]/20 text-sm"
                >
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
