import { experience } from "@/data/experience";
export default function Experience() {
  return <section id="experience" className="section-shell">
    <p className="eyebrow">04 — Experience</p><h2 className="section-title mb-12">Where I've<br/>been building.</h2>
    <div className="space-y-0">{experience.map((e,i)=><div key={i} className="grid gap-4 border-t border-zinc-200 py-8 dark:border-zinc-800 md:grid-cols-[180px_1fr]"><div className="font-mono text-xs uppercase tracking-widest text-zinc-500">{e.period}</div><div><h3 className="text-xl font-bold">{e.role}</h3><p className="mt-1 text-sm text-[var(--accent)]">{e.company}</p><p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">{e.description}</p></div></div>)}</div>
  </section>;
}