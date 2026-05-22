import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { education, certifications } from '../../data/experience'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Background" title="Education & Certifications" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                <GraduationCap size={20} className="text-teal" />
              </div>
              <p className="font-display text-xs font-semibold tracking-widest uppercase text-teal">
                Education
              </p>
            </div>

            <h3 className="font-display text-xl font-bold text-text mb-1">
              {education.degree}
            </h3>
            <p className="text-teal text-sm font-medium mb-3">{education.branch}</p>
            <p className="text-muted text-sm mb-1">{education.college}</p>
            <p className="text-muted text-xs mb-6">{education.year}</p>

            <div className="flex items-center justify-between p-4 rounded-xl bg-teal/8 border border-teal/15">
              <span className="text-sm text-muted">CGPA</span>
              <span className="font-display text-2xl font-bold text-gradient">
                {education.cgpa}
              </span>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <Award size={20} className="text-amber-400" />
              </div>
              <p className="font-display text-xs font-semibold tracking-widest uppercase text-amber-400">
                Certifications
              </p>
            </div>

            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-display font-semibold text-sm text-text">{cert.title}</p>
                    <p className="text-muted text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-[11px] text-muted border border-faint rounded px-2 py-0.5 shrink-0 font-body">
                    {cert.date}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
