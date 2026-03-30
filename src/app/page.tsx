'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { SiAffinitydesigner } from 'react-icons/si'
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobeXd,
  TbBrandFigma,
  TbBrandGithubCopilot,
  TbBrandOpenai,
  TbBrandVscode,
} from 'react-icons/tb'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Footer from '@/components/organisms/Footer'
import Navbar from '@/components/organisms/Navbar'

const socialLinks = [
  { href: '#', label: 'Instagram', iconPath: '/social/Instagram.svg' },
  { href: '#', label: 'LinkedIn', iconPath: '/social/LinkedIn.svg' },
  { href: '#', label: 'GitHub', iconPath: '/social/GitHub.svg' },
]

const toolIconMap = {
  illustrator: TbBrandAdobeIllustrator,
  figma: TbBrandFigma,
  affinity: SiAffinitydesigner,
  xd: TbBrandAdobeXd,
  vscode: TbBrandVscode,
  copilot: TbBrandGithubCopilot,
  openai: TbBrandOpenai,
}

export default function Home() {
  const { dictionary } = useLanguage()

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

            <div className="hero-content mx-auto max-w-[1248px] text-center">
              <div className="mx-auto mt-24 max-w-[1248px]">
                <h1 className="hero-quote hidden md:block text-[38px] lg:text-[44px] xl:text-[48px]">
                  {dictionary.hero.quoteLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <h1 className="hero-quote md:hidden text-[30px] leading-[1.08]">
                  {dictionary.hero.quoteMobile}
                </h1>
              </div>

              <p className="hero-author mt-14 text-[18px]">{dictionary.hero.author}</p>
            </div>
          </section>
        </main>
      </section>

      <section className="content-band">
        <main className="relative z-10 mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-9">
          <section className="cards-stage px-4 sm:px-10 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              {dictionary.stats.map((stat) => (
                <article
                  key={stat.label}
                  className={`stats-card ${stat.accent ? 'stats-card-accent' : 'stats-card-default'}`}
                >
                  <p className="stats-value">{stat.value}</p>
                  <h2 className="stats-label">{stat.label}</h2>
                  <Link href={stat.href} className="stats-link inline-cta">
                    {stat.cta}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
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

            <div className="relative z-10 max-w-[760px]">
              <h2 className="about-title">{dictionary.about.title}</h2>

              <div className="body-copy mt-10 space-y-5 text-[1rem] sm:text-[1.08rem]">
                {dictionary.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="social-button transition-transform duration-200 hover:-translate-y-0.5"
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
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="#about" className="button-primary">
                  {dictionary.about.primaryCta}
                </Link>
                <Link href="#contact" className="button-secondary">
                  {dictionary.about.secondaryCta}
                  <Download size={18} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <section id="projects" className="anchor-section projects-band">
          <div className="projects-band-shell">
            <div className="section-header project-band-header">
              <p className="eyebrow text-xs">{dictionary.projects.eyebrow}</p>
              <div className="section-heading-copy project-band-copy">
                <h3 className="section-title">{dictionary.projects.title}</h3>
                <p className="section-copy">{dictionary.projects.copy}</p>
              </div>
            </div>

            <div className="project-gallery project-gallery-fullbleed">
              <article className="project-showcase project-showcase-featured project-showcase-accent">
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

                    <Link href="#contact" className="inline-cta project-cta">
                      {dictionary.projects.featured.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>

              <div className="project-side-stack">
                {dictionary.projects.side.map((project) => (
                  <article key={project.title} className="project-showcase project-showcase-compact">
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

                        <Link href="#contact" className="inline-cta project-cta">
                          {project.cta}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <article className="project-showcase project-showcase-wide">
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
                  </div>

                  <div className="wide-stats-grid">
                    {dictionary.projects.wide.stats.map((stat) => (
                      <div key={stat.label} className="wide-stat-card">
                        <span className="wide-stat-value">{stat.value}</span>
                        <span className="wide-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-break section-break-deep">
          <main className="relative z-10 mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-9">
            <section
              id="certifications"
              className="anchor-section section-shell px-4 pt-4 sm:px-10 lg:px-12"
            >
              <div className="section-header">
                <p className="eyebrow text-xs">{dictionary.certifications.eyebrow}</p>
                <div className="section-heading-copy">
                  <h3 className="section-title">{dictionary.certifications.title}</h3>
                  <p className="section-copy">{dictionary.certifications.copy}</p>
                </div>
              </div>

              <div className="certification-layout">
                <article className="certificate-hero-card certificate-hero-card-wide">
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
                    {dictionary.certifications.hero.meta.map((item) => (
                      <div key={item.label} className="certificate-meta-card">
                        <span className="certificate-meta-label">{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="certificate-grid certificate-grid-shelf">
                  {dictionary.certifications.cards.map((item) => (
                    <article key={item.title} className="certificate-card">
                      <div className="certificate-card-topline">
                        <span className="certificate-badge">{item.provider}</span>
                        <span className="certificate-year">{item.year}</span>
                      </div>
                      <h4 className="learning-title">{item.title}</h4>
                      <p className="body-copy learning-copy">{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <div className="section-dark-divider" aria-hidden="true" />

            <section
              id="skills"
              className="anchor-section section-shell px-4 pt-12 sm:px-10 lg:px-12"
            >
              <div className="section-header">
                <p className="eyebrow text-xs">{dictionary.skills.eyebrow}</p>
                <div className="section-heading-copy">
                  <h3 className="section-title">{dictionary.skills.title}</h3>
                  <p className="section-copy">{dictionary.skills.copy}</p>
                </div>
              </div>

              <div className="skills-layout">
                <article className="skills-summary-card">
                  <p className="learning-subtitle">{dictionary.skills.strengthsSubtitle}</p>
                  <h4 className="certificate-hero-title">{dictionary.skills.strengthsTitle}</h4>
                  <div className="capability-list">
                    {dictionary.skills.capabilities.map((item) => (
                      <div key={item.title} className="capability-item">
                        <h5 className="capability-title">{item.title}</h5>
                        <p className="body-copy capability-copy">{item.copy}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="skills-inline-stage">
                  <div className="skills-inline-copy">
                    <p className="learning-subtitle">{dictionary.skills.toolsSubtitle}</p>
                    <p className="section-copy skills-tools-copy">
                      {dictionary.skills.toolsCopy}
                    </p>
                  </div>

                  <div className="tool-logo-row">
                    {dictionary.skills.tools.map((tool) => {
                      const Icon = toolIconMap[tool.icon]

                      return (
                        <div key={tool.name} className="tool-logo-item">
                          <Icon className="tool-logo-icon" aria-hidden="true" />
                          <div className="tool-logo-copy">
                            <span className="tool-logo-name">{tool.name}</span>
                            <span className="tool-logo-caption">{tool.group}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
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
              <article className="contact-panel contact-panel-accent">
                <div className="contact-copy-block">
                  <p className="eyebrow text-xs">{dictionary.contact.eyebrow}</p>
                  <h3 className="section-title max-w-[12ch]">{dictionary.contact.title}</h3>
                  <p className="section-copy contact-copy">{dictionary.contact.copy}</p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link href="mailto:hello@portfolio.dev" className="button-primary">
                      {dictionary.contact.primaryCta}
                    </Link>
                    <Link href="#projects" className="button-secondary">
                      {dictionary.contact.secondaryCta}
                    </Link>
                  </div>
                </div>

                <div className="contact-points">
                  {dictionary.contact.details.map((point) => (
                    <article key={point.label} className="contact-point">
                      <p className="contact-point-label">{point.label}</p>
                      <p className="contact-point-value">{point.value}</p>
                    </article>
                  ))}
                </div>
              </article>
            </section>
          </main>
        </section>
      </section>

      <Footer />
    </div>
  )
}
