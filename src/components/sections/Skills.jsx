import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { skillGroups, colorMap } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="What I know" title="Skills & Tech Stack" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const colors = colorMap[group.color]
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-faint transition-colors duration-300"
              >
                {/* Group label */}
                <p className={`font-display text-xs font-semibold tracking-[0.18em] uppercase mb-4 ${colors.text}`}>
                  {group.label}
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className={`text-[12px] font-body px-3 py-1.5 rounded-lg border font-medium ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
