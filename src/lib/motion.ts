import type { Transition, Variants } from 'framer-motion'

export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
export const softEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const baseEnter: Transition = {
  duration: 0.55,
  ease: premiumEase,
}

export const quickFade: Transition = {
  duration: 0.32,
  ease: softEase,
}

export function fadeIn(delay = 0, duration = 0.42): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: premiumEase,
      },
    },
  }
}

export function fadeUp(distance = 16, delay = 0, duration = 0.55): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: premiumEase,
      },
    },
  }
}

export function staggerContainer(
  staggerChildren = 0.08,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

export function sectionReveal(reducedMotion: boolean, delay = 0): Variants {
  return reducedMotion ? fadeIn(delay, 0.32) : fadeUp(14, delay, 0.5)
}

export function cardReveal(reducedMotion: boolean, delay = 0): Variants {
  return reducedMotion ? fadeIn(delay, 0.3) : fadeUp(18, delay, 0.56)
}

export function heroReveal(reducedMotion: boolean, delay = 0): Variants {
  return reducedMotion ? fadeIn(delay, 0.34) : fadeUp(20, delay, 0.62)
}

export function getCardHoverMotion(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      whileHover: { opacity: 0.98 },
      whileTap: { opacity: 0.94 },
    }
  }

  return {
    whileHover: {
      y: -4,
      scale: 1.01,
      transition: {
        duration: 0.28,
        ease: softEase,
      },
    },
    whileTap: {
      scale: 0.992,
      transition: {
        duration: 0.18,
        ease: softEase,
      },
    },
  }
}

export function getButtonMotion(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      whileHover: { opacity: 0.96 },
      whileTap: { opacity: 0.9 },
    }
  }

  return {
    whileHover: {
      y: -2,
      scale: 1.012,
      transition: {
        duration: 0.22,
        ease: softEase,
      },
    },
    whileTap: {
      scale: 0.985,
      transition: {
        duration: 0.16,
        ease: softEase,
      },
    },
  }
}

export function getIconMotion(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      whileHover: { opacity: 0.96 },
      whileTap: { opacity: 0.9 },
    }
  }

  return {
    whileHover: {
      y: -2,
      scale: 1.04,
      transition: {
        duration: 0.24,
        ease: softEase,
      },
    },
    whileTap: {
      scale: 0.98,
      transition: {
        duration: 0.16,
        ease: softEase,
      },
    },
  }
}
