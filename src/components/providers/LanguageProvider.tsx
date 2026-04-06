'use client'

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import {
  defaultLanguage,
  dictionaries,
  type Dictionary,
  type Language,
} from '@/lib/translations'

type LanguageContextValue = {
  language: Language
  dictionary: Dictionary
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LANGUAGE_STORAGE_KEY = 'portfolio-language'
const LANGUAGE_EVENT = 'portfolio-language-change'

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return storedLanguage === 'en' || storedLanguage === 'es'
    ? storedLanguage
    : defaultLanguage
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined
  }

  const handleLanguageChange = () => {
    onStoreChange()
  }

  window.addEventListener('storage', handleLanguageChange)
  window.addEventListener(LANGUAGE_EVENT, handleLanguageChange)

  return () => {
    window.removeEventListener('storage', handleLanguageChange)
    window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange)
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getStoredLanguage,
    () => defaultLanguage
  )

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage: Language) => {
    if (getStoredLanguage() === nextLanguage) {
      return
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    window.dispatchEvent(new Event(LANGUAGE_EVENT))
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <LanguageContext.Provider
          value={{
            language,
            dictionary: dictionaries[language],
            setLanguage,
            toggleLanguage,
          }}
        >
          {children}
        </LanguageContext.Provider>
      </MotionConfig>
    </LazyMotion>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
