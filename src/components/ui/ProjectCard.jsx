import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const badgeColors = {
  'AI-Powered':   'bg-teal/15 text-teal border border-teal/25',
  'Full Stack':   'bg-blue-400/15 text-blue-400 border border-blue-400/25',
  'Deep Learning':'bg-amber-400/15 text-amber-400 border border-amber-400/25',
  'Django':       'bg-violet-400/15 text-violet-400 border border-violet-400/25',
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`relative flex flex-col rounded-2xl border bg-card p-6 overflow-hidden group transition-colors duration-300
        ${project.highlight
          ? 'border-teal/40 shadow-[0_0_40px_-8px_rgba(46,191,165,0.2)]'
          : 'border-border hover:border-faint'
        }`}
    >
      {/* Subtle top-left glow on highlighted card */}
      {project.highlight && (
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className={`inline-block text-[11px] font-display font-semibold px-2.5 py-1 rounded-full mb-3 ${badgeColors[project.badge] || 'bg-faint/40 text-muted border border-faint'}`}>
            {project.badge}
          </span>
          <h3 className="font-display text-xl font-bold text-text group-hover:text-teal transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-0.5">{project.subtitle}</p>
        </div>
        <div className="flex gap-2 shrink-0 mt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-muted hover:text-teal hover:border-teal/40 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-muted hover:text-teal hover:border-teal/40 transition-all duration-200"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Category label */}
      <p className="text-[11px] font-display font-semibold tracking-widest uppercase text-teal/60 mb-3">
        {project.category}
      </p>

      {/* Tech stack chips */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="text-[11px] font-body px-2.5 py-1 rounded-md bg-faint/40 text-muted border border-faint/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
