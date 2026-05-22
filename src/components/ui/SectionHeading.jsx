import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, align = 'left' }) {
  return (
    <motion.div
      className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
        {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-px bg-gradient-to-r from-teal to-transparent w-16 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
