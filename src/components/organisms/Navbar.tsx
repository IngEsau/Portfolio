'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { fadeIn, fadeUp, getButtonMotion, softEase, staggerContainer } from '@/lib/motion'

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#certifications', key: 'certifications' },
  { href: '#skills', key: 'skills' },
  { href: '#contact', key: 'contact' },
] as const

export default function Navbar() {
  const { dictionary, language, setLanguage } = useLanguage()
  const reducedMotion = useReducedMotion() ?? false
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const buttonMotion = getButtonMotion(reducedMotion)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderLanguageSwitch = () => (
    <div
      className="language-switch"
      role="group"
      aria-label={dictionary.nav.languageSwitch}
    >
      {(['en', 'es'] as const).map((option) => (
        <motion.button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={`language-option ${language === option ? 'is-active' : ''}`}
          aria-pressed={language === option}
          disabled={language === option}
          {...buttonMotion}
        >
          {option.toUpperCase()}
        </motion.button>
      ))}
    </div>
  )

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={reducedMotion ? fadeIn(0, 0.3) : fadeUp(8, 0, 0.42)}
      className={clsx(
        'sticky top-0 z-40 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300',
        isScrolled
          ? 'border-[rgba(245,245,245,0.14)] bg-[rgba(18,18,18,0.9)] shadow-[0_16px_40px_rgba(0,0,0,0.26)]'
          : 'border-[rgba(245,245,245,0.11)] bg-[rgba(18,18,18,0.82)]'
      )}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-9">
        <nav className="px-4 py-5 sm:px-10 lg:px-12">
          <div className="flex min-h-[72px] items-center justify-between gap-6 lg:min-h-[84px]">
            <motion.div variants={fadeIn(0.06, 0.38)}>
              <Link
                href="/"
                className="font-title text-[clamp(1.55rem,1.9vw,2rem)] font-semibold leading-none tracking-[-0.03em]"
              >
                Esaú Aguilar
              </Link>
            </motion.div>

            <motion.div
              className="hidden items-center gap-x-6 gap-y-3 lg:flex xl:gap-x-10"
              variants={staggerContainer(0.05, 0.08)}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={fadeIn(0, 0.32)}>
                  <Link
                    href={item.href}
                    className="font-body text-[0.98rem] font-light tracking-[0.01em] text-[color:var(--foreground)] transition-opacity duration-200 hover:opacity-70 sm:text-[1.08rem]"
                  >
                    {dictionary.nav[item.key]}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={fadeIn(0, 0.32)}>{renderLanguageSwitch()}</motion.div>
            </motion.div>

            <div className="flex items-center gap-3 lg:hidden">
              {renderLanguageSwitch()}

              <motion.button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setIsMenuOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(245,245,245,0.11)] bg-[rgba(255,255,255,0.03)] text-[color:var(--foreground)] shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                {...buttonMotion}
              >
                {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </motion.button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <motion.div
                id="mobile-navigation"
                className="mt-4 grid gap-3 rounded-[1.35rem] border border-[rgba(245,245,245,0.09)] bg-[rgba(20,20,20,0.9)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)] lg:hidden"
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -8, scale: 0.985 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -6, scale: 0.99 }
                }
                transition={{ duration: 0.24, ease: softEase }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.24,
                      delay: reducedMotion ? 0 : index * 0.03,
                      ease: softEase,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-[1rem] border border-[rgba(245,245,245,0.06)] bg-[rgba(255,255,255,0.02)] px-4 py-3 font-body text-[0.98rem] font-light text-[color:var(--foreground)] transition-colors duration-200 hover:border-[rgba(245,110,56,0.18)] hover:bg-[rgba(245,110,56,0.08)]"
                    >
                      {dictionary.nav[item.key]}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  )
}
