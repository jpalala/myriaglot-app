import { ChevronDown, ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

import type { Language } from "@/data/languages";

interface LanguageCardProps {
  lang: Language;
  isOpen: boolean;
  onToggle: () => void;
}

export default function LanguageCard({
  lang,
  isOpen,
  onToggle,
}: LanguageCardProps) {
  return (
    <article
      className={`
        rounded-2xl border-2 transition-all duration-300
        ${
          isOpen
            ? `${lang.accent} ${lang.bgAccent}`
            : 'border-slate-800/50 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'
        }
      `}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <div
            className={`
              w-12 h-12 rounded-xl
              bg-gradient-to-br ${lang.color}
              flex items-center justify-center shadow-lg
            `}
          >
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              {lang.name.charAt(0)}
            </span>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
              {lang.name}
            </h3>

            <p
              className="text-sm text-slate-400 mt-0.5"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              {lang.description}
            </p>
          </div>
        </div>

        <ChevronDown
          className={`
            w-6 h-6 text-slate-400
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Expandable Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 pb-6 pt-2 border-t border-slate-800/30">
          {/* Awesome List */}
          <a
            href={lang.awesomeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block mb-4 p-4 rounded-xl
              bg-gradient-to-r ${lang.color}
              hover:shadow-xl hover:scale-[1.02]
              transition-all duration-200 group/awesome
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaGithub className="w-5 h-5 text-white" />

                <span className="font-semibold text-white">
                  Awesome {lang.name} List
                </span>
              </div>

              <ExternalLink className="w-4 h-4 text-white/80 group-hover/awesome:text-white transition-colors" />
            </div>
          </a>

          {/* Resource Links */}
          <div className="space-y-2">
            {lang.resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block p-3 rounded-lg
                  bg-slate-800/40
                  hover:bg-slate-800/70
                  transition-all duration-200
                  group/link
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-sm text-slate-300
                      group-hover/link:text-white
                      transition-colors
                    "
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    {resource.title}
                  </span>

                  <ExternalLink
                    className="
                      w-3.5 h-3.5
                      text-slate-500
                      group-hover/link:text-slate-300
                      transition-colors
                    "
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
