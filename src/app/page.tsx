import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import Footer from '@/components/organisms/Footer'
import Navbar from '@/components/organisms/Navbar'

const stats = [
  { value: '+15', label: 'UI projects', accent: false },
  { value: '+2k', label: 'Users impacted', accent: true },
  { value: '+6', label: 'Design tools', accent: false },
]

const socialLinks = [
  { href: '#', label: 'Instagram', iconPath: '/social/Instagram.svg' },
  { href: '#', label: 'LinkedIn', iconPath: '/social/LinkedIn.svg' },
  { href: '#', label: 'GitHub', iconPath: '/social/GitHub.svg' },
]

const placeholderSections = [
  {
    id: 'projects',
    eyebrow: 'Projects',
    title: 'Space ready for your case studies',
    copy:
      'This section already has the visual language applied so you can continue matching the Figma without redefining colors or typography.',
  },
  {
    id: 'certifications',
    eyebrow: 'Certifications',
    title: 'A clean section for achievements and credentials',
    copy:
      'Use this block for certificates, courses, and credibility elements. The anchor is already connected from the navigation.',
  },
  {
    id: 'skills',
    eyebrow: 'Skills & Tools',
    title: 'Prepared for tools, workflows, and design systems',
    copy:
      'The card system and text hierarchy are already in place. You can swap this content with logos, tags, or grouped capabilities.',
  },
  {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'Reserve this section for your final CTA',
    copy:
      'When you pass the final copy and assets, this can become the closing block with contact links, form, or downloadable CV.',
  },
]

export default function Home() {
  return (
    <div className="site-shell">
      <section className="hero-band">
        <Navbar />

        <main className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-9">
          <section className="section-divider hero-stage overflow-hidden px-4 sm:px-10 lg:px-12">
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
                  <span className="block">&quot;Design is not just what it looks like and</span>
                  <span className="block">feels like. Design is how it works.&quot;</span>
                </h1>

                <h1 className="hero-quote md:hidden text-[30px] leading-[1.08]">
                  &quot;Design is not just what it looks like and feels like.
                  Design is how it works.&quot;
                </h1>
              </div>

              <p className="hero-author mt-14 text-[18px]">- Steve Jobs</p>
            </div>
          </section>
        </main>
      </section>

      <section className="content-band">
        <main className="relative z-10 mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-9">
          <section className="cards-stage px-4 sm:px-10 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className={`stats-card ${stat.accent ? 'stats-card-accent' : 'stats-card-default'}`}
                >
                  <p className="stats-value">{stat.value}</p>
                  <h2 className="stats-label">{stat.label}</h2>
                  <Link
                    href={stat.label === 'UI projects' ? '#projects' : '#contact'}
                    className="stats-link"
                  >
                    View more
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="about-stage relative overflow-hidden px-4 pb-8 pt-16 sm:px-10 lg:px-12 lg:pb-12 lg:pt-20"
          >
            <Image
              src="/patterns/pattern1.svg"
              alt=""
              aria-hidden="true"
              width={1025}
              height={1211}
              className="about-pattern about-pattern-left"
            />
            <Image
              src="/patterns/pattern2.svg"
              alt=""
              aria-hidden="true"
              width={481}
              height={713}
              className="about-pattern about-pattern-right"
            />

            <div className="relative z-10 max-w-[760px]">
              <h2 className="about-title">Hi! I&apos;m Esaú</h2>

              <div className="body-copy mt-10 space-y-5 text-[1rem] sm:text-[1.08rem]">
                <p>
                  UX/UI Designer passionate about creating intuitive and
                  human-centered digital experiences.
                </p>
                <p>
                  I specialize in turning complex problems into simple, elegant
                  solutions, blending user research, strategy, and visual design
                  to craft products that truly work.
                </p>
                <p>
                  From wireframes to polished interfaces, I believe design is not
                  just how things look, but how they feel and function.
                </p>
                <p>Let&apos;s build experiences that users love.</p>
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
                  About me
                </Link>
                <Link href="#" className="button-secondary">
                  Download my CV
                  <Download size={18} />
                </Link>
              </div>
            </div>
          </section>

          <section className="space-y-6 px-4 pt-10 sm:px-10 lg:px-12">
            {placeholderSections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="brand-card rounded-[1.75rem] px-6 py-8 sm:px-8 sm:py-10"
              >
                <p className="eyebrow text-xs">{section.eyebrow}</p>
                <h3 className="font-title mt-4 text-[clamp(1.7rem,2.6vw,3rem)] leading-tight tracking-[-0.03em]">
                  {section.title}
                </h3>
                <p className="body-copy mt-4 max-w-[780px] text-[0.98rem] sm:text-[1.04rem]">
                  {section.copy}
                </p>
              </article>
            ))}
          </section>
        </main>
      </section>

      <Footer />
    </div>
  )
}
