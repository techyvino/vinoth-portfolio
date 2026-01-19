"use client";

import { Github, Heart, Linkedin, Sparkles } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/techyvino", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/techyvino",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="py-32 border-t border-border/10 relative overflow-hidden noise">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-8">
            <div className="text-5xl md:text-6xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transform  cursor-default tracking-tighter">
              Vinoth.dev
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/5 text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <Sparkles size={12} /> Crafting Digital Excellence
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-indigo-500 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="h-px w-32 bg-linear-to-r from-transparent via-border/50 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.4em] flex items-center gap-2">
                © {new Date().getFullYear()} Vinothkumar S.
              </div>
              <div className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] flex items-center gap-2">
                Built with{" "}
                <Heart
                  size={10}
                  className="text-pink-500 fill-pink-500 animate-pulse"
                />{" "}
                using Next.js & Framer
              </div>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-indigo-500/5 text-indigo-500 border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-500 hover:text-white transition-all shadow-xl shadow-black/5"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
}
