'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'

type StaggerGroupProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  amount?: number
  immediate?: boolean
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  amount = 0.18,
  immediate = false,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' as const }
        : {
            whileInView: 'visible' as const,
            viewport: { once: true, amount },
          })}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </motion.div>
  )
}
