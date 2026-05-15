import { motion, useReducedMotion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { PageBackdrop } from './components/PageBackdrop'
import './App.css'

const technicalSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Responsive Design',
]

const softSkills = [
  'Teamwork',
  'Problem solving',
  'Time management',
  'Adaptability',
  'Quick learner',
]

const courses = [
  'Research Methodology',
  'Modern Indian History',
  'Frontend Web Development',
  'JavaScript & React',
]

const languages = [
  { name: 'English', score: 80 },
  { name: 'Hindi', score: 80 },
  { name: 'Urdu', score: 80 },
]

const strengths = [
  'Hands-on React projects using hooks and component structure',
  'Responsive layouts with semantic HTML and modern CSS',
  'Fast learner; comfortable collaborating and owning tasks end-to-end',
]

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function HeroMain({ reduce, strengths }) {
  if (reduce) {
    return (
      <div className="hero__main">
        <p className="hero__kicker">
          <span className="hero__kicker-dot" aria-hidden />
          Portfolio · Fresher · Kanpur, India
        </p>
        <h1 className="hero__title">
          Shifa Siddiqui
          <span className="hero__title-role">Web Developer</span>
        </h1>
        <p className="hero__intro">
          Aspiring front-end developer with a solid base in HTML, CSS,
          JavaScript, and React. Seeking an internship or entry-level role where
          I can contribute, learn quickly, and grow with the team.
        </p>
        <ul className="hero__bullets" aria-label="Key strengths">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero__cta-row">
          <a className="btn btn--solid" href="#contact">
            Get in touch
          </a>
          <a className="btn btn--outline" href="#projects">
            View work
          </a>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="hero__main"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      <motion.p className="hero__kicker" variants={heroItem}>
        <span className="hero__kicker-dot" aria-hidden />
        Portfolio · Fresher · Kanpur, India
      </motion.p>
      <motion.h1 className="hero__title" variants={heroItem}>
        Shifa Siddiqui
        <span className="hero__title-role">Web Developer</span>
      </motion.h1>
      <motion.p className="hero__intro" variants={heroItem}>
        Aspiring front-end developer with a solid base in HTML, CSS, JavaScript,
        and React. Seeking an internship or entry-level role where I can
        contribute, learn quickly, and grow with the team.
      </motion.p>
      <motion.ul
        className="hero__bullets"
        aria-label="Key strengths"
        variants={heroItem}
      >
        {strengths.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
      <motion.div className="hero__cta-row" variants={heroItem}>
        <motion.a
          className="btn btn--solid"
          href="#contact"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          Get in touch
        </motion.a>
        <motion.a
          className="btn btn--outline"
          href="#projects"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          View work
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const reduce = useReducedMotion()

  return (
    <div className="page">
      <PageBackdrop />
      <Navbar />

      <main className="main">
        <section id="top" className="hero">
          <div className="hero__grid">
            <HeroMain reduce={reduce} strengths={strengths} />

            <motion.aside
              className="hero__card glass-card"
              initial={reduce ? false : { opacity: 0, y: 32, scale: 0.98 }}
              animate={reduce ? false : { opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -4,
                      boxShadow:
                        '0 24px 48px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(148, 163, 184, 0.12)',
                    }
              }
            >
              <div className="hero__card-shine" aria-hidden />
              <h2 className="card-title">At a glance</h2>
              <dl className="facts">
                <div className="facts__row">
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:shifasiddiquii7355@gmail.com">
                      shifasiddiquii7355@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="facts__row">
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+917355328560">+91 73553 28560</a>
                  </dd>
                </div>
                <div className="facts__row">
                  <dt>Location</dt>
                  <dd>Kanpur, Uttar Pradesh, India</dd>
                </div>
                <div className="facts__row facts__row--full">
                  <dt>Focus</dt>
                  <dd>Front-End · React · Responsive UI</dd>
                </div>
              </dl>
              <p className="hero__card-note">
                Open to internships and junior developer roles.
              </p>
            </motion.aside>
          </div>

          {!reduce && (
            <motion.div
              className="hero__scroll-hint"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 6, 0] }}
              transition={{
                opacity: { delay: 1.2, duration: 0.5 },
                y: { delay: 1.5, duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          )}
        </section>

        <section id="summary" className="band band--tight">
          <Reveal>
            <div className="section-head">
              <span className="section-eyebrow">Overview</span>
              <h2 className="h2">Professional summary</h2>
              <p className="section-head__sub">
                Brief overview for recruiters and hiring managers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="summary-panel glass-card">
              <p>
                Web developer skilled in HTML, CSS, JavaScript, and React,
                with practical experience from personal projects and coursework.
                Comfortable breaking problems down, iterating on UI details, and
                picking up new tools. Strong teamwork, time management, and
                communication in English, Hindi, and Urdu.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="band">
          <Reveal>
            <div className="section-head section-head--inline">
              <span className="section-eyebrow">Capabilities</span>
              <h2 className="h2">Skills</h2>
              <p className="section-head__sub">
                Technical stack, interpersonal strengths, and languages.
              </p>
            </div>
          </Reveal>

          <div className="skills-board">
            <Reveal delay={0.04}>
              <div className="panel glass-card">
                <h3 className="h3">Technical</h3>
                <ul className="tag-list">
                  {technicalSkills.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={
                        reduce ? undefined : { y: -3, scale: 1.02 }
                      }
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 24,
                      }}
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="panel glass-card">
                <h3 className="h3">Soft skills</h3>
                <ul className="tag-list tag-list--muted">
                  {softSkills.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={
                        reduce ? undefined : { y: -3, scale: 1.02 }
                      }
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 24,
                      }}
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="panel panel--stretch glass-card">
                <h3 className="h3">Languages</h3>
                <ul className="lang-compact">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <span className="lang-compact__name">{lang.name}</span>
                      <span className="lang-compact__track">
                        <motion.span
                          className="lang-compact__fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.score}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.95,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </span>
                      <span className="lang-compact__pct">{lang.score}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="band band--split">
          <div className="two-col">
            <div className="two-col__cell" id="education">
              <Reveal>
                <div className="section-head section-head--tight">
                  <span className="section-eyebrow">Background</span>
                  <h2 className="h2">Education</h2>
                </div>
                <article className="timeline-card glass-card">
                  <header className="timeline-card__head">
                    <div>
                      <h3 className="h3 h3--large">Master of Arts</h3>
                      <p className="muted">CSJMU Kanpur · Kanpur</p>
                    </div>
                    <p className="date-range">Aug 2022 — Oct 2024</p>
                  </header>
                  <p className="timeline-card__label">Relevant coursework</p>
                  <ul className="dash-list">
                    {courses.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            <div className="two-col__cell" id="projects">
              <Reveal delay={0.06}>
                <div className="section-head section-head--tight">
                  <span className="section-eyebrow">Builds</span>
                  <h2 className="h2">Project</h2>
                </div>
                <motion.article
                  className="project-block glass-card"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -6,
                          borderColor: 'rgba(56, 189, 248, 0.35)',
                          boxShadow:
                            '0 20px 40px rgba(15, 23, 42, 0.5), 0 0 0 1px rgba(56, 189, 248, 0.2)',
                        }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="project-block__top">
                    <h3 className="h3 h3--large">Task Manager App</h3>
                    <span className="pill">Sep 2026</span>
                  </div>
                  <ul className="dash-list">
                    <li>Built with React and useState for local task state.</li>
                    <li>Users can add, delete, and manage tasks.</li>
                    <li>
                      Clean, responsive layout suitable for desktop and mobile.
                    </li>
                  </ul>
                  <div className="project-block__tags">
                    <span>React</span>
                    <span>Hooks</span>
                    <span>UI</span>
                  </div>
                </motion.article>
              </Reveal>
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <Reveal>
            <div className="section-head section-head--tight">
              <span className="section-eyebrow">Hello</span>
              <h2 className="h2">Contact</h2>
              <p className="section-head__sub">
                Prefer email or phone — I reply within one business day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="contact-row">
              <motion.a
                className="contact-chip"
                href="mailto:shifasiddiquii7355@gmail.com"
                whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                <span className="contact-chip__label">Email</span>
                shifasiddiquii7355@gmail.com
              </motion.a>
              <motion.a
                className="contact-chip"
                href="tel:+917355328560"
                whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                <span className="contact-chip__label">Phone</span>
                +91 73553 28560
              </motion.a>
              <span className="contact-chip contact-chip--static">
                <span className="contact-chip__label">Location</span>
                Kanpur, India
              </span>
            </div>
          </Reveal>
          <p className="footer__fine">
            © {new Date().getFullYear()} Shifa Siddiqui · Crafted with React &
            motion
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
