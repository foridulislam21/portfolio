export default function Footer() {
  return <footer className="border-t border-zinc-200 dark:border-zinc-800"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Forid Islam</span><span>Built with Next.js + TypeScript</span></div></footer>;
}