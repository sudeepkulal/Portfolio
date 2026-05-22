import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kulalsudeep63@gmail.com',
    href: 'mailto:kulalsudeep63@gmail.com',
    sub: 'Click to open your email app',
    highlight: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6364473683',
    href: 'tel:+916364473683',
    sub: 'Call or WhatsApp',
    highlight: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sudeepkulal',
    href: 'https://github.com/sudeepkulal',
    sub: 'See my code',
    highlight: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sudeepkulal2005',
    href: 'https://linkedin.com/in/sudeepkulal2005',
    sub: 'Let\'s connect professionally',
    highlight: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Let's connect" title="Get in Touch" align="center" />

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted font-body leading-relaxed max-w-xl mx-auto mb-12"
        >
          I'm actively looking for full-time roles in Full Stack or Android development.
          Whether you have an opportunity, a project, or just want to say hi —
          reach out through any of the channels below.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contacts.map(({ icon: Icon, label, value, href, sub, highlight }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col gap-4 p-6 rounded-2xl border bg-card transition-all duration-200 group
                ${highlight
                  ? 'border-teal/40 shadow-[0_0_30px_-8px_rgba(46,191,165,0.2)]'
                  : 'border-border hover:border-faint'
                }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200
                ${highlight
                  ? 'bg-teal/15 border border-teal/25 group-hover:bg-teal/25'
                  : 'bg-faint/30 border border-faint group-hover:border-teal/30 group-hover:bg-teal/10'
                }`}
              >
                <Icon size={20} className={highlight ? 'text-teal' : 'text-muted group-hover:text-teal transition-colors duration-200'} />
              </div>
              <div>
                <p className="font-display text-xs font-semibold tracking-widest uppercase text-muted mb-1">
                  {label}
                </p>
                <p className={`font-body text-sm font-medium break-all leading-snug
                  ${highlight ? 'text-teal' : 'text-text'}`}
                >
                  {value}
                </p>
                <p className="text-muted text-xs mt-1">{sub}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Big CTA email button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="mailto:kulalsudeep63@gmail.com?subject=Opportunity%20for%20Sudeep%20Kulal"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-teal text-bg font-display font-bold text-base
              hover:bg-teal/90 transition-all duration-200 shadow-[0_0_30px_-6px_rgba(46,191,165,0.5)] hover:shadow-[0_0_40px_-4px_rgba(46,191,165,0.6)]"
          >
            <Mail size={20} />
            Send me an Email
          </a>
          <p className="text-muted text-xs mt-3">Opens your default email app</p>
        </motion.div>
      </div>
    </section>
  )
}
