import { motion, useReducedMotion } from 'framer-motion'

export function PageBackdrop() {
  const reduce = useReducedMotion()

  return (
    <div className="page-backdrop" aria-hidden>
      <div className="page-backdrop__mesh" />
      {!reduce && (
        <>
          <motion.div
            className="page-backdrop__orb page-backdrop__orb--a"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="page-backdrop__orb page-backdrop__orb--b"
            animate={{
              x: [0, -40, 0],
              y: [0, 25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="page-backdrop__orb page-backdrop__orb--c"
            animate={{
              x: [0, 20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}
      <div className="page-backdrop__grid" />
      <div className="page-backdrop__vignette" />
    </div>
  )
}
