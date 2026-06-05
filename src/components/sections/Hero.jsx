import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Android Developer",
  "AI / ML Enthusiast",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => w + 1);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Big decorative background letter */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[28vw] leading-none text-text/[0.025] select-none pointer-events-none"
      >
        SK
      </div>

      {/* Teal blob glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Greeting chip */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-display font-semibold tracking-[0.18em] uppercase text-teal border border-teal/25 bg-teal/8 px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-text leading-[1.05] tracking-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Sudeep</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="mb-6 h-10">
            <span className="font-display text-2xl md:text-3xl font-semibold text-muted">
              {typed}
              <span className="inline-block w-0.5 h-7 bg-teal ml-0.5 align-middle animate-cursor-blink" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="font-body text-lg text-muted leading-relaxed max-w-xl mb-10"
          >
            I build production-ready web apps and Android applications with
            clean architecture. Previously interned at{" "}
            <span className="text-text font-medium">MindMatrix</span> — crafting
            GenAI-powered Android experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
            <Link to="projects" smooth duration={700} offset={-64}>
              <button className="font-display font-semibold text-sm px-6 py-3 rounded-xl bg-teal text-bg hover:bg-teal/90 transition-all duration-200 shadow-[0_0_20px_-4px_rgba(46,191,165,0.5)]">
                View Projects →
              </button>
            </Link>
            <Link to="contact" smooth duration={700} offset={-64}>
              <button className="font-display font-semibold text-sm px-6 py-3 rounded-xl border border-border text-text hover:border-teal/40 hover:text-teal transition-all duration-200">
                Get in Touch
              </button>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5">
            <a
              href="https://github.com/sudeepkulal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-teal transition-colors duration-200 group"
            >
              <Github
                size={18}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              GitHub
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="https://linkedin.com/in/sudeepkulal2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-teal transition-colors duration-200 group"
            >
              <Linkedin
                size={18}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="mailto:kulalsudeep63@gmail.com"
              className="text-sm text-muted hover:text-teal transition-colors duration-200"
            >
              kulalsudeep63@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
