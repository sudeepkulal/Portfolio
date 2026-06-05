import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

const facts = [
  { icon: MapPin,         text: 'Udupi, Karnataka' },
  { icon: GraduationCap, text: 'B.E. AI & ML — SMVITM (CGPA 8.56)' },
  { icon: Briefcase,     text: 'Former Android Dev Intern @ MindMatrix' },
]

export default function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <SectionHeading label="Who I am" title="About Me" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-muted leading-relaxed font-body"
            >
              <p>
                I'm an <span className="text-text font-medium">Artificial Intelligence & Machine Learning</span> graduate
                with a strong grip on both web and mobile development. I love building things
                end-to-end — from designing REST APIs to shipping polished Android UIs.
              </p>
              <p>
                My internship at <span className="text-text font-medium">MindMatrix</span> had me
                deep in Kotlin, Jetpack Compose, and GenAI — building apps that integrate
                Gemini API, Firebase, and Google Maps into real cultural experiences.
              </p>
              <p>
                When I'm not coding, I'm exploring how AI can solve real-world problems —
                like crop disease detection with YOLO or surfacing Karnataka's art heritage
                to new audiences.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-3"
            >
              {facts.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <Icon size={14} className="text-teal" />
                  </span>
                  {text}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl bg-teal/5 blur-2xl scale-105 pointer-events-none" />

            <div className="relative rounded-2xl border border-border bg-card p-8 space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: '4+',  label: 'Projects' },
                  { num: '8.56', label: 'CGPA' },
                  { num: '4',   label: 'Certifications' },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-bold text-gradient">{num}</p>
                    <p className="text-muted text-xs mt-1 font-body">{label}</p>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border" />

              {/* Tech taste line */}
              <div className="space-y-3">
                <p className="font-display text-xs font-semibold tracking-widest uppercase text-teal/60">
                  Currently working with
                </p>
                {['Kotlin + Jetpack Compose', 'Gemini API', 'Firebase Firestore', 'React.js + Node.js'].map(tech => (
                  <div key={tech} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-sm text-muted font-body">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
