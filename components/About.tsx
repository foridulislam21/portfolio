export default function About() {
  return <section id="about" className="section-shell">
    <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
      <div><p className="eyebrow">01 — About</p><h2 className="section-title">Engineer first.<br/>Product minded.</h2></div>
      <div className="space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <p>I enjoy turning complex requirements into simple, dependable software. My strongest focus is backend engineering with the .NET ecosystem.</p>
        <p>From API design and data modeling to caching, logging and deployment, I care about the whole path from code to production.</p>
        <p>I also build modern interfaces with Next.js and TypeScript when a project needs a complete full-stack solution.</p>
      </div>
    </div>
  </section>;
}