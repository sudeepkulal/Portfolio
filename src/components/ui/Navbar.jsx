import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',      to: 'about' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Experience', to: 'internship' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Education',  to: 'education' },
  { label: 'Contact',    to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="cursor-pointer">
          <span className="font-display text-lg font-bold text-text tracking-tight">
            SK<span className="text-teal">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-64}
                className="font-body text-sm text-muted hover:text-text cursor-pointer transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume button — desktop */}
        <a
          href="/Sudeep_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-display font-semibold px-4 py-2 rounded-lg border border-teal/50 text-teal hover:bg-teal/10 transition-all duration-200"
        >
          Resume ↓
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={() => setOpen(false)}
                    className="font-body text-sm text-muted hover:text-text cursor-pointer transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Sudeep_Resume_2026.pdf"
                  download
                  className="inline-block text-sm font-display font-semibold px-4 py-2 rounded-lg border border-teal/50 text-teal hover:bg-teal/10 transition-all"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
