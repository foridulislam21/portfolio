"use client";

import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("about");

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = links
        .map(([, id]) => document.getElementById(id))
        .filter(Boolean);

      const current = sections
        .reverse()
        .find((section) => section!.getBoundingClientRect().top <= 140);

      if (current) {
        setActive(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6">
        <nav
          className="
            mx-auto flex max-w-5xl items-center justify-between
            rounded-2xl border border-white/20
            bg-white/55 px-3 py-2
            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl backdrop-saturate-150
            dark:border-white/10
            dark:bg-zinc-900/55
            dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}
          <a
            href="#top"
            className="
              group flex items-center gap-2 rounded-xl px-3 py-2
              transition-all duration-300
              hover:bg-white/50
              dark:hover:bg-white/10
            "
          >
            <span className="text-lg font-black tracking-[-0.05em]">
              FORID
            </span>

            <span
              className="
                h-2 w-2 rounded-full
                bg-violet-500
                shadow-[0_0_12px_rgba(139,92,246,0.9)]
                transition-transform duration-300
                group-hover:scale-125
              "
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                className={`
                  relative rounded-xl px-4 py-2 text-sm font-medium
                  transition-all duration-300
                  ${
                    active === href
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  }
                `}
              >
                {active === href && (
                  <span
                    className="
                      absolute inset-0 -z-10 rounded-xl
                      bg-white/80 shadow-sm
                      dark:bg-white/10
                    "
                  />
                )}

                {label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="
                hidden items-center gap-1.5 rounded-xl
                bg-zinc-950 px-4 py-2 text-sm font-semibold text-white
                shadow-lg shadow-black/10
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-xl
                dark:bg-white dark:text-zinc-950
                sm:flex
              "
            >
              Let's talk
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl border border-black/5
                bg-white/50
                transition-all duration-300
                hover:scale-105 hover:bg-white
                dark:border-white/10
                dark:bg-white/5
                dark:hover:bg-white/10
              "
            >
              {!mounted ? (
                <span className="h-4 w-4" />
              ) : theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            {/* Mobile button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl border border-black/5
                bg-white/50 md:hidden
                dark:border-white/10 dark:bg-white/5
              "
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`
            mx-auto mt-2 max-w-5xl overflow-hidden
            rounded-2xl border border-white/20
            bg-white/70 shadow-xl
            backdrop-blur-2xl
            transition-all duration-300
            dark:border-white/10 dark:bg-zinc-900/75
            md:hidden
            ${
              open
                ? "max-h-[400px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="p-2">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={() => setOpen(false)}
                className="
                  block rounded-xl px-4 py-3
                  text-sm font-medium
                  text-zinc-600
                  transition hover:bg-white/70 hover:text-black
                  dark:text-zinc-400
                  dark:hover:bg-white/10 dark:hover:text-white
                "
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}