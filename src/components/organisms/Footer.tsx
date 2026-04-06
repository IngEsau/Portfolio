'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'

export default function Footer() {
  const { dictionary } = useLanguage()

  return (
    <footer className="mx-auto mt-24 max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-9">
      <div className="section-divider px-4 pt-8 text-center text-sm text-[color:var(--muted-soft)] sm:px-10 lg:px-12">
        <p>{dictionary.footer.line1}</p>
      </div>
    </footer>
  )
}
