'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/providers/LanguageProvider'

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#certifications', key: 'certifications' },
  { href: '#skills', key: 'skills' },
  { href: '#contact', key: 'contact' },
] as const

export default function Navbar() {
  const { dictionary, language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(245,245,245,0.11)] bg-[rgba(18,18,18,0.94)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-9">
        <nav className="flex min-h-[108px] flex-col gap-5 px-4 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <Link
            href="/"
            className="font-title text-[clamp(1.55rem,1.9vw,2rem)] font-semibold leading-none tracking-[-0.03em]"
          >
            Esaú Aguilar
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[1rem] text-[color:var(--foreground)] sm:gap-x-10 sm:text-[1.04rem]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-[0.98rem] font-light tracking-[0.01em] transition-opacity duration-200 hover:opacity-70 sm:text-[1.08rem]"
              >
                {dictionary.nav[item.key]}
              </Link>
            ))}

            <div
              className="language-switch"
              role="group"
              aria-label={dictionary.nav.languageSwitch}
            >
              {(['en', 'es'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`language-option ${language === option ? 'is-active' : ''}`}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
