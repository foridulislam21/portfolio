import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20">
    <div className="absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-3xl"/>
    <div className="mx-auto w-full max-w-6xl">
      <div className="max-w-4xl">
        <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-[.25em] text-[var(--accent)]">Backend / Full-Stack Developer</p>
        <h1 className="text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-8xl">
          Building software<br/><span className="text-zinc-400">that scales.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I build reliable APIs, backend systems and modern web applications with a focus on clean architecture, performance and maintainability.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950">View projects <ArrowUpRight size={16}/></a>
          <a href="#contact" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">Let's talk</a>
        </div>
        <div className="mt-12 flex gap-5">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-5 flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500"><ArrowDown size={15}/> Scroll</a>
    </div>
  </section>;
}