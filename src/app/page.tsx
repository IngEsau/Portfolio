'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import { SiGithub, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import {
  TbBrandFigma,
  TbBrandFramerMotion,
  TbBrandVscode,
} from 'react-icons/tb'
import { Reveal } from '@/components/motion/Reveal'
import { StaggerGroup } from '@/components/motion/StaggerGroup'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Footer from '@/components/organisms/Footer'
import Navbar from '@/components/organisms/Navbar'
import {
  cardReveal,
  fadeIn,
  getButtonMotion,
  getCardHoverMotion,
  getIconMotion,
  heroReveal,
  staggerContainer,
  sectionReveal,
} from '@/lib/motion'

const socialLinks = [
  {
    href: 'https://www.instagram.com/esau_aguilar.na?igsh=MTM1N2dueWY3MHB0eQ==',
    label: 'Instagram',
    iconPath: '/social/Instagram.svg',
  },
  {
    href: 'https://www.linkedin.com/in/esauaguilar',
    label: 'LinkedIn',
    iconPath: '/social/LinkedIn.svg',
  },
  { href: 'https://github.com/IngEsau', label: 'GitHub', iconPath: '/social/GitHub.svg' },
]

const toolIconMap = {
  figma: TbBrandFigma,
  nextjs: SiNextdotjs,
  react: FaReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  vscode: TbBrandVscode,
  framer: TbBrandFramerMotion,
  github: SiGithub,
}

const cvDownloadPath = '/documents/CV_ESAU_AGUILAR_ES-2.pdf'

export default function Home() {
  const { dictionary } = useLanguage()
  const reducedMotion = useReducedMotion() ?? false
  const buttonMotion = getButtonMotion(reducedMotion)
  const cardMotion = getCardHoverMotion(reducedMotion)
  const iconMotion = getIconMotion(reducedMotion)

  return (
    <div className="site-shell">
      <Navbar />

      <section className="hero-band">
        <main className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-9">
          <section className="hero-stage overflow-hidden px-4 sm:px-10 lg:px-12">
            <Image
              src="/patterns/pattern1.svg"
              alt=""
              aria-hidden="true"
              width={1025}
              height={1211}
              className="hero-pattern hero-pattern-left"
              priority
            />

            <StaggerGroup
              className="hero-content mx-auto max-w-[1248px] text-center"
              stagger={reducedMotion ? 0.04 : 0.08}
              delayChildren={0.1}
              immediate
            >
              <motion.div
                className="mx-auto mt-24 max-w-[1248px]"
                variants={heroReveal(reducedMotion)}
              >
                <h1 className="hero-quote hidden md:block text-[38px] lg:text-[44px] xl:text-[48px]">
                  {dictionary.hero.quoteLines.map((line, index) => (
                    <span key={`hero-line-${index}`} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <h1 className="hero-quote md:hidden text-[30px] leading-[1.08]">
                  {dictionary.hero.quoteMobile}
                </h1>
              </motion.div>

              <motion.p
                className="hero-author mt-14 text-[18px]"
                variants={fadeIn(0.04, 0.36)}
              >
                {dictionary.hero.author}
              </motion.p>
            </StaggerGroup>
          </section>
        </main>
      </section>

      <section className="content-band">
        <main className="relative z-10 mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-9">
          <section className="cards-stage px-4 sm:px-10 lg:px-12">
            <StaggerGroup className="grid gap-5 lg:grid-cols-3 lg:gap-6" amount={0.45}>
              {dictionary.stats.map((stat, index) => (
                <motion.article
                  key={`stat-${index}`}
                  variants={cardReveal(reducedMotion)}
                  {...cardMotion}
                  className={`stats-card ${stat.accent ? 'stats-card-accent' : 'stats-card-default'}`}
                >
                  <p className="stats-value">{stat.value}</p>
                  <h2 className="stats-label">{stat.label}</h2>
                  <motion.div {...buttonMotion}>
                    <Link href={stat.href} className="stats-link inline-cta">
                      {stat.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </motion.article>
              ))}
            </StaggerGroup>
          </section>

          <section
            id="about"
            className="anchor-section about-stage relative overflow-hidden px-4 pb-8 pt-16 sm:px-10 lg:px-12 lg:pb-12 lg:pt-20"
          >
            <Image
              src="/patterns/pattern1.svg"
              alt=""
              aria-hidden="true"
              width={1025}
              height={1211}
              className="about-pattern about-pattern-left"
            />

            <StaggerGroup
              className="relative z-10 max-w-[760px]"
              amount={0.22}
              stagger={reducedMotion ? 0.04 : 0.08}
            >
              <motion.h2
                className="about-title"
                variants={sectionReveal(reducedMotion)}
              >
                {dictionary.about.title}
              </motion.h2>

              <motion.div
                className="body-copy mt-10 space-y-5 text-[1rem] sm:text-[1.08rem]"
                variants={sectionReveal(reducedMotion, 0.04)}
              >
                {dictionary.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                variants={sectionReveal(reducedMotion, 0.08)}
              >
                {socialLinks.map((item) => (
                  <motion.div key={item.label} {...iconMotion}>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className="social-button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={item.iconPath}
                        alt=""
                        aria-hidden="true"
                        width={64}
                        height={64}
                        className="social-icon object-contain"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                variants={sectionReveal(reducedMotion, 0.1)}
              >
                <motion.div {...buttonMotion}>
                  <Link href="#projects" className="button-primary">
                    {dictionary.about.primaryCta}
                  </Link>
                </motion.div>

                <motion.div {...buttonMotion}>
                  <a
                    href={cvDownloadPath}
                    className="button-secondary"
                    download="CV_ESAU_AGUILAR_ES-2.pdf"
                  >
                    {dictionary.about.secondaryCta}
                    <Download size={18} />
                  </a>
                </motion.div>
              </motion.div>
            </StaggerGroup>
          </section>
        </main>

        <section id="projects" className="anchor-section projects-band">
          <div className="projects-band-shell">
            <Reveal className="section-header project-band-header">
              <p className="eyebrow text-xs">{dictionary.projects.eyebrow}</p>
              <div className="section-heading-copy project-band-copy">
                <h3 className="section-title">{dictionary.projects.title}</h3>
                <p className="section-copy">{dictionary.projects.copy}</p>
              </div>
            </Reveal>

            <StaggerGroup
              className="project-gallery project-gallery-fullbleed"
              amount={0.12}
              stagger={reducedMotion ? 0.04 : 0.08}
            >
              <motion.article
                className="project-showcase project-showcase-featured project-showcase-accent"
                variants={cardReveal(reducedMotion)}
                {...cardMotion}
              >
                <div className="project-card-shell">
                  <div className="project-card-topline">
                    <p className="project-category">{dictionary.projects.featured.category}</p>
                    <span className="project-metric">{dictionary.projects.featured.metric}</span>
                  </div>

                  <div className="project-preview project-preview-featured">
                    <div className="preview-window">
                      <div className="preview-window-bar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="preview-window-grid">
                        <div className="preview-panel preview-panel-main" />
                        <div className="preview-panel preview-panel-side">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project-copy-block">
                    <h4 className="project-title">{dictionary.projects.featured.title}</h4>
                    <p className="body-copy project-copy">{dictionary.projects.featured.copy}</p>

                    <div className="pill-row">
                      {dictionary.projects.featured.tags.map((item) => (
                        <span key={item} className="pill pill-accent">
                          {item}
                        </span>
                      ))}
                    </div>

                    <motion.div className="inline-flex" {...buttonMotion}>
                      <Link
                        href={dictionary.projects.featured.href}
                        className="inline-cta project-cta"
                        {...(dictionary.projects.featured.external
                          ? { target: '_blank', rel: 'noreferrer' }
                          : {})}
                      >
                        {dictionary.projects.featured.cta}
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>

              <div className="project-side-stack">
                {dictionary.projects.side.map((project, index) => (
                  <motion.article
                    key={`project-side-${index}`}
                    className="project-showcase project-showcase-compact"
                    variants={cardReveal(reducedMotion)}
                    {...cardMotion}
                  >
                    <div className="project-card-shell">
                      <div className="project-card-topline">
                        <p className="project-category">{project.category}</p>
                        <span className="project-metric">{project.metric}</span>
                      </div>

                      <div className="project-preview project-preview-compact">
                        <div className="preview-mini-grid">
                          <div className="preview-chip" />
                          <div className="preview-chip" />
                          <div className="preview-chip wide" />
                        </div>
                      </div>

                      <div className="project-copy-block">
                        <h4 className="project-title">{project.title}</h4>
                        <p className="body-copy project-copy">{project.copy}</p>

                        <div className="pill-row">
                          {project.tags.map((item) => (
                            <span key={item} className="pill">
                              {item}
                            </span>
                          ))}
                        </div>

                        <motion.div className="inline-flex" {...buttonMotion}>
                          <Link
                            href={project.href}
                            className="inline-cta project-cta"
                            {...(project.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                          >
                            {project.cta}
                            <ArrowRight size={16} />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.article
                className="project-showcase project-showcase-wide"
                variants={cardReveal(reducedMotion)}
                {...cardMotion}
              >
                <div className="project-card-shell project-card-shell-wide">
                  <div className="project-copy-block">
                    <p className="project-category">{dictionary.projects.wide.category}</p>
                    <h4 className="project-title">{dictionary.projects.wide.title}</h4>
                    <p className="body-copy project-copy">{dictionary.projects.wide.copy}</p>

                    <div className="pill-row">
                      {dictionary.projects.wide.tags.map((item) => (
                        <span key={item} className="pill pill-accent-soft">
                          {item}
                        </span>
                      ))}
                    </div>

                    <motion.div className="inline-flex" {...buttonMotion}>
                      <Link
                        href={dictionary.projects.wide.href}
                        className="inline-cta project-cta"
                        {...(dictionary.projects.wide.external
                          ? { target: '_blank', rel: 'noreferrer' }
                          : {})}
                      >
                        {dictionary.projects.wide.cta}
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </div>

                  <div className="wide-stats-grid">
                    {dictionary.projects.wide.stats.map((stat, index) => (
                      <div key={`wide-stat-${index}`} className="wide-stat-card">
                        <span className="wide-stat-value">{stat.value}</span>
                        <span className="wide-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerGroup>
          </div>
        </section>

        <section className="section-break section-break-deep">
          <main className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-9">
            <section
              id="certifications"
              className="anchor-section section-shell px-4 pt-4 sm:px-10 lg:px-12"
            >
              <Reveal className="section-header">
                <p className="eyebrow text-xs">{dictionary.certifications.eyebrow}</p>
                <div className="section-heading-copy">
                  <h3 className="section-title">{dictionary.certifications.title}</h3>
                  <p className="section-copy">{dictionary.certifications.copy}</p>
                </div>
              </Reveal>

              <div className="certification-layout">
                <motion.article
                  className="certificate-hero-card certificate-hero-card-wide"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardReveal(reducedMotion)}
                >
                  <div className="certificate-hero-copy">
                    <p className="learning-subtitle">{dictionary.certifications.hero.subtitle}</p>
                    <h4 className="certificate-hero-title">
                      {dictionary.certifications.hero.title}
                    </h4>
                    <p className="body-copy learning-copy">
                      {dictionary.certifications.hero.copy}
                    </p>
                  </div>

                  <div className="certificate-hero-meta">
                    {dictionary.certifications.hero.meta.map((item, index) => (
                      <div key={`certificate-meta-${index}`} className="certificate-meta-card">
                        <span className="certificate-meta-label">{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </motion.article>

                <StaggerGroup
                  className="certificate-grid certificate-grid-shelf"
                  amount={0.18}
                  stagger={reducedMotion ? 0.04 : 0.08}
                >
                  {dictionary.certifications.cards.map((item, index) => (
                    <motion.article
                      key={item.credentialId || `certificate-${index}`}
                      className="certificate-card"
                      variants={cardReveal(reducedMotion)}
                      {...cardMotion}
                    >
                      <div className="certificate-card-header">
                        <div className="certificate-mark" aria-hidden="true">
                          <span className="certificate-mark-shape" />
                        </div>

                        <div className="certificate-card-heading">
                          <div className="certificate-card-topline">
                            <span className="certificate-badge">{item.provider}</span>
                          </div>
                          <h4 className="learning-title">{item.title}</h4>
                        </div>
                      </div>

                      <div className="certificate-details">
                        <p className="certificate-detail-row">
                          <span className="certificate-detail-label">
                            {dictionary.certifications.issuedLabel}:
                          </span>{' '}
                          {item.issuedAt}
                        </p>
                        <p className="certificate-detail-row">
                          <span className="certificate-detail-label">
                            {dictionary.certifications.credentialIdLabel}:
                          </span>{' '}
                          {item.credentialId}
                        </p>
                      </div>

                      {item.href ? (
                        <motion.div className="inline-flex" {...buttonMotion}>
                          <Link
                            href={item.href}
                            className="credential-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {dictionary.certifications.ctaLabel}
                            <ExternalLink size={15} />
                          </Link>
                        </motion.div>
                      ) : (
                        <span className="credential-link credential-link-disabled">
                          {dictionary.certifications.ctaLabel}
                          <ExternalLink size={15} />
                        </span>
                      )}
                    </motion.article>
                  ))}
                </StaggerGroup>
              </div>
            </section>

            <div className="section-dark-divider" aria-hidden="true" />

            <section
              id="skills"
              className="anchor-section section-shell px-4 pt-12 sm:px-10 lg:px-12"
            >
              <Reveal className="section-header">
                <p className="eyebrow text-xs">{dictionary.skills.eyebrow}</p>
                <div className="section-heading-copy">
                  <h3 className="section-title">{dictionary.skills.title}</h3>
                  <p className="section-copy">{dictionary.skills.copy}</p>
                </div>
              </Reveal>

              <div className="skills-stage">
                <StaggerGroup
                  className="tool-logo-grid"
                  amount={0.2}
                  stagger={reducedMotion ? 0.03 : 0.06}
                >
                  {dictionary.skills.tools.map((tool, index) => {
                    const Icon = toolIconMap[tool.icon]

                    return (
                      <motion.div
                        key={`${tool.icon}-${index}`}
                        className="tool-logo-item tool-logo-item-large"
                        variants={fadeIn(0, 0.34)}
                        {...iconMotion}
                      >
                        <Icon className="tool-logo-icon tool-logo-icon-large" aria-hidden="true" />
                        <div className="tool-logo-copy tool-logo-copy-centered">
                          <span className="tool-logo-name tool-logo-name-large">{tool.name}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </StaggerGroup>

                <Reveal className="strengths-block" delay={0.04}>
                  <p className="learning-subtitle">{dictionary.skills.strengthsSubtitle}</p>
                  <motion.ul
                    className="strengths-bullets"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerContainer(reducedMotion ? 0.03 : 0.05)}
                  >
                    {dictionary.skills.capabilities.map((item, index) => (
                      <motion.li
                        key={`capability-${index}`}
                        className="strengths-bullet"
                        variants={fadeIn(0, 0.3)}
                      >
                        <span className="strengths-bullet-title">{item.title}.</span>{' '}
                        <span className="body-copy">{item.copy}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </Reveal>
              </div>
            </section>
          </main>
        </section>

        <section className="section-break section-break-black">
          <main className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-9">
            <section
              id="contact"
              className="anchor-section section-shell px-4 pb-6 pt-4 sm:px-10 lg:px-12"
            >
              <motion.article
                className="contact-panel contact-panel-accent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardReveal(reducedMotion)}
              >
                <div className="contact-copy-block">
                  <p className="eyebrow text-xs">{dictionary.contact.eyebrow}</p>
                  <h3 className="section-title max-w-[12ch]">{dictionary.contact.title}</h3>
                  <p className="section-copy contact-copy">{dictionary.contact.copy}</p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <motion.div {...buttonMotion}>
                      <Link
                        href="mailto:aguilaresau630@gmail.com"
                        className="button-primary"
                      >
                        {dictionary.contact.primaryCta}
                      </Link>
                    </motion.div>

                    <motion.div {...buttonMotion}>
                      <Link href="#projects" className="button-secondary">
                        {dictionary.contact.secondaryCta}
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <div className="contact-points">
                  {dictionary.contact.details.map((point, index) => (
                    <article key={`contact-point-${index}`} className="contact-point">
                      <p className="contact-point-label">{point.label}</p>
                      <p className="contact-point-value">{point.value}</p>
                    </article>
                  ))}
                </div>
              </motion.article>
            </section>
          </main>
        </section>
      </section>

      <Footer />
    </div>
  )
}
