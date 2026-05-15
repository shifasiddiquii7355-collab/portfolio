import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const links = [
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navMotion = reduce
    ? undefined
    : {
        initial: { y: -72, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <motion.header
      className={`nav-shell ${scrolled ? 'nav-shell--scrolled' : ''}`}
      {...(navMotion ?? {})}
    >
      <nav className="nav-inner" aria-label="Primary">
        <button
          type="button"
          className="nav-brand"
          onClick={() => scrollTo('top')}
        >
          <span className="nav-brand__mark" aria-hidden>
            <span className="nav-brand__mark-glow" />
            SS
          </span>
          Shifa Siddiqui
        </button>

        <ul className="nav-links nav-links--desktop">
          {links.map((l) => (
            <li key={l.id}>
              <button type="button" onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <motion.span
            className="nav-toggle__bar"
            animate={
              open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.22 }}
          />
          <motion.span
            className="nav-toggle__bar"
            animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
          />
          <motion.span
            className="nav-toggle__bar"
            animate={
              open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.22 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="nav-drawer__backdrop"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="nav-drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.ul
                className="nav-links nav-links--mobile"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                }}
              >
                {links.map((l) => (
                  <motion.li
                    key={l.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button type="button" onClick={() => scrollTo(l.id)}>
                      {l.label}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
