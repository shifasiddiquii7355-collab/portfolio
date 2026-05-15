import { motion, useReducedMotion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

export function Reveal({ children, className, delay = 0, as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionComponent = motion[as] ?? motion.div

  if (reduce) {
    const C = as === 'div' ? 'div' : as
    return <C className={className}>{children}</C>
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: easing, delay },
        },
      }}
    >
      {children}
    </MotionComponent>
  )
}
