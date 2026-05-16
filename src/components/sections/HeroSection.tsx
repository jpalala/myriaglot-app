import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="top" className="max-w-5xl mx-auto px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm">
        <Sparkles className="w-4 h-4" />
        Curated developer learning links
      </div>

      <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
        Your polyglot programming directory
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
        Explore practical documentation, awesome lists, and ecosystem resources
        for languages used in modern software development.
      </p>
    </section>
  );
}
