'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { sectionReveal } from '@/lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.18,
}: RevealProps) {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={sectionReveal(reducedMotion, delay)}
    >
      {children}
    </motion.div>
  )
}
