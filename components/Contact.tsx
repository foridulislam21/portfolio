import { ArrowUpRight, Mail } from "lucide-react";
export default function Contact() {
  return <section id="contact" className="section-shell pb-24">
    <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50 md:p-14">
      <p className="eyebrow">05 — Contact</p><h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Have a project in mind?</h2>
      <p className="mt-6 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">I'm open to interesting software projects, engineering opportunities and collaborations.</p>
      <a href="mailto:hello@example.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-3 font-bold text-white dark:bg-white dark:text-zinc-950"><Mail size={17}/> Email me <ArrowUpRight size={16}/></a>
    </div>
  </section>;
}