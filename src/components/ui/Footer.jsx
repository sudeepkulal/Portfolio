import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-bold text-text">
            SK<span className="text-teal">.</span>
          </span>
          <p className="text-muted text-sm mt-1">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sudeepkulal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border text-muted hover:text-teal hover:border-teal/40 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sudeepkulal2005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border text-muted hover:text-teal hover:border-teal/40 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kulalsudeep63@gmail.com"
            className="p-2 rounded-lg border border-border text-muted hover:text-teal hover:border-teal/40 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Sudeep Kulal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
