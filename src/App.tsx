import { useState } from "react";
import {
    ExternalLink,
    Code2,
    BookOpen,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { languages } from "@/data/languages";
import type { Language } from "@/data/languages";
import LanguageCard from "@/components/language/LanguageCard";
import HeroSection from "@/components/sections/HeroSection";

function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50 shadow-2xl">
            <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                <a href="#top" className="flex items-center gap-3">
                    <Code2 className="w-8 h-8 text-cyan-400" strokeWidth={2.5} />
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        MyriaGlot
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
                    <a href="#languages" className="hover:text-white transition-colors">
                        Languages
                    </a>
                    <a href="#resources" className="hover:text-white transition-colors">
                        Resources
                    </a>
                    <a href="#about" className="hover:text-white transition-colors">
                        About
                    </a>
                </nav>

                <div
                    className="flex items-center gap-2 text-sm text-slate-400"
                    style={{ fontFamily: "Space Mono, monospace" }}
                >
                    <BookOpen className="w-4 h-4" />
                    <span>{languages.length} languages</span>
                </div>
            </div>
        </header>
    );
}

function LanguagesSection() {
    // Fixed: Added <string | null> generic typing to allow non-null updates
    const [openLang, setOpenLang] = useState<string | null>(null);

    return (
        <section
            id="languages"
            className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60"
        >
            <div className="mb-10">
                <p
                    className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3"
                    style={{ fontFamily: "Space Mono, monospace" }}
                >
                    Section 01
                </p>
                <h2 className="text-3xl font-bold text-white">Language directory</h2>
                <p className="mt-3 text-slate-400 max-w-2xl">
                    Open each language to find its main awesome list and a few essential
                    resources.
                </p>
            </div>

            <div className="space-y-4">
                {/* Fixed: Typed the loop parameter explicitly */}
                {languages.map((lang: Language) => (
                    <LanguageCard
                        key={lang.id}
                        lang={lang}
                        isOpen={openLang === lang.id}
                        onToggle={() => setOpenLang(openLang === lang.id ? null : lang.id)}
                    />
                ))}
            </div>
        </section>
    );
}

function ResourcesSection() {
    return (
        <section
            id="resources"
            className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60"
        >
            <div className="mb-10">
                <p
                    className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3"
                    style={{ fontFamily: "Space Mono, monospace" }}
                >
                    Section 02
                </p>
                <h2 className="text-3xl font-bold text-white">Quick resource grid</h2>
                <p className="mt-3 text-slate-400 max-w-2xl">
                    A faster overview of every language and its primary awesome list.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Fixed: Typed the loop parameter explicitly */}
                {languages.map((lang: Language) => (
                    <a
                        key={lang.id}
                        href={lang.awesomeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 hover:bg-slate-900/80 hover:border-slate-700 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${lang.color}`}
                            />
                            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                        </div>
                        <h3 className="font-bold text-white">{lang.name}</h3>
                        <p className="mt-2 text-sm text-slate-400">{lang.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section
            id="about"
            className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/60"
        >
            <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-8 md:p-10">
                <p
                    className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3"
                    style={{ fontFamily: "Space Mono, monospace" }}
                >
                    Section 03
                </p>
                <h2 className="text-3xl font-bold text-white">About MyriaGlot</h2>
                <p className="mt-4 text-slate-300 max-w-3xl">
                    MyriaGlot is a lightweight directory for developers who move across
                    multiple programming ecosystems. It keeps the page simple: pick a
                    language, open the card, and jump into high-quality learning material.
                </p>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer
            className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500"
            style={{ fontFamily: "Space Mono, monospace" }}
        >
            <p>Built with React • Powered by awesome-* communities</p>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-300 transition-colors"
            >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
            </a>
        </footer>
    );
}

export default function App() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
            <Header />

            <main>
                <HeroSection />
                <LanguagesSection />
                <ResourcesSection />
                <AboutSection />
            </main>

            <Footer />

            {/* Fixed: Standard React compatible inline style tag injection */}
            <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap");

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>
        </div>
    );
}
