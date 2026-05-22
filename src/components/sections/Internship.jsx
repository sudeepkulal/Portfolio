import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { internship } from '../../data/experience'
import { CheckCircle2, Briefcase } from 'lucide-react'

export default function Internship() {
  return (
    <section id="internship" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Where I've worked" title="Internship Experience" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-teal/30 bg-card overflow-hidden shadow-[0_0_60px_-12px_rgba(46,191,165,0.15)]"
        >
          {/* Top accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-teal via-teal/60 to-transparent" />

          {/* Glow blob */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal/8 blur-3xl pointer-events-none" />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-teal/25 bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={22} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-text">
                    {internship.company}
                  </h3>
                  <p className="text-muted text-sm">{internship.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1.5 rounded-full bg-teal/15 text-teal border border-teal/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  {internship.period}
                </span>
                <p className="text-xs text-muted italic">{internship.focus}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-6" />

            {/* Bullet points */}
            <ul className="space-y-4">
              {internship.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 size={18} className="text-teal flex-shrink-0 mt-0.5" />
                  <p className="text-muted text-sm leading-relaxed font-body">{point}</p>
                </motion.li>
              ))}
            </ul>

            {/* Tech chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini API', 'MVVM', 'Google Maps SDK', 'Material Design 3'].map(t => (
                <span
                  key={t}
                  className="text-[11px] font-body px-2.5 py-1 rounded-md bg-teal/10 text-teal border border-teal/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
