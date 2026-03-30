export type ToolIconKey =
  | 'illustrator'
  | 'figma'
  | 'affinity'
  | 'xd'
  | 'vscode'
  | 'copilot'
  | 'openai'

type Translation = {
  nav: {
    about: string
    projects: string
    certifications: string
    skills: string
    contact: string
    languageSwitch: string
  }
  hero: {
    quoteLines: string[]
    quoteMobile: string
    author: string
  }
  stats: Array<{
    value: string
    label: string
    href: string
    cta: string
    accent: boolean
  }>
  about: {
    title: string
    paragraphs: string[]
    primaryCta: string
    secondaryCta: string
  }
  projects: {
    eyebrow: string
    title: string
    copy: string
    featured: {
      title: string
      category: string
      metric: string
      copy: string
      tags: string[]
      cta: string
    }
    side: Array<{
      title: string
      category: string
      metric: string
      copy: string
      tags: string[]
      cta: string
    }>
    wide: {
      title: string
      category: string
      copy: string
      tags: string[]
      stats: Array<{
        label: string
        value: string
      }>
    }
  }
  certifications: {
    eyebrow: string
    title: string
    copy: string
    hero: {
      subtitle: string
      title: string
      copy: string
      meta: Array<{
        label: string
        value: string
      }>
    }
    cards: Array<{
      title: string
      provider: string
      year: string
      copy: string
    }>
  }
  skills: {
    eyebrow: string
    title: string
    copy: string
    strengthsSubtitle: string
    strengthsTitle: string
    capabilities: Array<{
      title: string
      copy: string
    }>
    toolsSubtitle: string
    toolsCopy: string
    tools: Array<{
      name: string
      group: string
      icon: ToolIconKey
    }>
  }
  contact: {
    eyebrow: string
    title: string
    copy: string
    primaryCta: string
    secondaryCta: string
    details: Array<{
      label: string
      value: string
    }>
  }
  footer: {
    line1: string
    line2: string
  }
}

const en: Translation = {
  nav: {
    about: 'About me',
    projects: 'Projects',
    certifications: 'Certifications',
    skills: 'Skills & Tools',
    contact: 'Contact',
    languageSwitch: 'Language switch',
  },
  hero: {
    quoteLines: [
      '"Design is not just what it looks like and',
      'feels like. Design is how it works."',
    ],
    quoteMobile:
      '"Design is not just what it looks like and feels like. Design is how it works."',
    author: '- Steve Jobs',
  },
  stats: [
    {
      value: '+15',
      label: 'UI projects',
      href: '#projects',
      cta: 'View more',
      accent: false,
    },
    {
      value: '+2k',
      label: 'Users impacted',
      href: '#contact',
      cta: 'View more',
      accent: true,
    },
    {
      value: '+6',
      label: 'Design tools',
      href: '#skills',
      cta: 'View more',
      accent: false,
    },
  ],
  about: {
    title: "Hi! I'm Esaú",
    paragraphs: [
      'UX/UI Designer passionate about creating intuitive and human-centered digital experiences.',
      'I specialize in turning complex problems into simple, elegant solutions, blending user research, strategy, and visual design to craft products that truly work.',
      'From wireframes to polished interfaces, I believe design is not just how things look, but how they feel and function.',
      "Let's build experiences that users love.",
    ],
    primaryCta: 'About me',
    secondaryCta: 'Download my CV',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'A full-width gallery built to let your strongest UX/UI work take over the screen.',
    copy:
      'The project area should feel like the visual centerpiece of the SPA: broader, brighter, and more editorial so the work reads like a premium gallery instead of a stack of generic cards.',
    featured: {
      title: 'Mercury Wallet redesign',
      category: 'Product redesign',
      metric: '-38% onboarding friction',
      copy:
        'A fintech onboarding experience rebuilt to feel trustworthy, clear, and operationally efficient across identity steps and product entry points.',
      tags: ['Research synthesis', 'Flow redesign', 'Interface system'],
      cta: 'Open case study',
    },
    side: [
      {
        title: 'Analytics command center',
        category: 'Dashboard UI',
        metric: '+27% task clarity',
        copy:
          'Dense data reframed into a cleaner decision layer for internal operations and product teams.',
        tags: ['Hierarchy', 'Scannability', 'Responsive states'],
        cta: 'View project',
      },
      {
        title: 'Boutique commerce landing',
        category: 'Marketing experience',
        metric: '+19% click depth',
        copy:
          'Editorial visuals and conversion blocks aligned into a premium, high-trust landing experience.',
        tags: ['Visual direction', 'Storytelling', 'CTA flow'],
        cta: 'View project',
      },
    ],
    wide: {
      title: 'Portfolio system and design direction',
      category: 'Brand + frontend execution',
      copy:
        'A modular portfolio language that connects typography, storytelling, and frontend implementation so the visual experience feels intentional from top to bottom.',
      tags: ['Design systems', 'Frontend implementation', 'Content architecture'],
      stats: [
        { label: 'Case studies', value: '03' },
        { label: 'Systems built', value: '06' },
        { label: 'Design stages', value: 'End to end' },
      ],
    },
  },
  certifications: {
    eyebrow: 'Certifications',
    title: 'A cleaner certification shelf focused on Platzi, credibility, and visible professional growth.',
    copy:
      'This section now behaves like a premium credential area. It gives context to your learning path first, then presents each certificate with enough hierarchy to feel intentional instead of improvised.',
    hero: {
      subtitle: 'Platzi learning path',
      title: 'Continuous learning in research, product systems, and interface craft.',
      copy:
        'Use this opening panel to frame your certifications as part of an evolving UX/UI practice, not as disconnected badges.',
      meta: [
        { label: 'Provider', value: 'Platzi' },
        { label: 'Focus', value: 'UX/UI + Product' },
        { label: 'Format', value: 'Continuous learning' },
      ],
    },
    cards: [
      {
        title: 'UX Research Fundamentals',
        provider: 'Platzi',
        year: '2024',
        copy:
          'A focused foundation in user interviews, problem framing, synthesis, and actionable research outputs.',
      },
      {
        title: 'UI Design Systems',
        provider: 'Platzi',
        year: '2024',
        copy:
          'Interface consistency, reusable patterns, components, and visual rules designed for scalable product teams.',
      },
      {
        title: 'Product Design Workflow',
        provider: 'Platzi',
        year: '2025',
        copy:
          'A process-oriented path combining research, ideation, wireframing, prototyping, validation, and delivery.',
      },
    ],
  },
  skills: {
    eyebrow: 'Skills & Tools',
    title: 'Tools, software, and professional strengths arranged with the same dark premium language as the rest of the portfolio.',
    copy:
      'The software now lives in one cleaner visual strip so it feels integrated, while the adjacent block summarizes the business and collaboration skills that strengthen your design work.',
    strengthsSubtitle: 'Professional strengths',
    strengthsTitle:
      'Design execution supported by business awareness, communication, and responsible AI use.',
    capabilities: [
      {
        title: 'Design leadership',
        copy:
          'Direction for visual systems, project priorities, and design execution with clear ownership.',
      },
      {
        title: 'Client communication',
        copy:
          'Clear stakeholder conversations, feedback translation, and collaborative decision-making.',
      },
      {
        title: 'Professional AI usage',
        copy:
          'AI integrated into ideation, content structuring, research support, and faster design iteration.',
      },
      {
        title: 'Project coordination',
        copy:
          'Organized workflows that connect design quality, timelines, and implementation handoff.',
      },
    ],
    toolsSubtitle: 'Daily toolkit',
    toolsCopy:
      'A direct, single-line strip of the software you use most often for interface design, prototyping, delivery, and AI-assisted execution.',
    tools: [
      { name: 'Adobe Illustrator', group: 'Vector design', icon: 'illustrator' },
      { name: 'Figma', group: 'UI / Prototyping', icon: 'figma' },
      { name: 'Affinity', group: 'Creative suite', icon: 'affinity' },
      { name: 'Adobe XD', group: 'Wireframing', icon: 'xd' },
      { name: 'VS Code', group: 'Code editor', icon: 'vscode' },
      { name: 'GitHub Copilot', group: 'AI pair-programming', icon: 'copilot' },
      { name: 'OpenAI', group: 'Professional AI usage', icon: 'openai' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'A large contact card that closes the SPA with clarity and confidence.',
    copy:
      'This closing block is designed to feel like a real final CTA instead of a placeholder. Replace the generic information below with your actual contact data when you are ready.',
    primaryCta: 'Send email',
    secondaryCta: 'View projects',
    details: [
      { label: 'Email', value: 'hello@portfolio.dev' },
      { label: 'Location', value: 'Remote / Mexico' },
      { label: 'Availability', value: 'Open to freelance and full-time opportunities' },
      { label: 'Response time', value: 'Usually within 24-48 hours' },
    ],
  },
  footer: {
    line1: 'Esaú Aguilar. UX/UI Designer and frontend-minded product builder.',
    line2: 'Portfolio SPA crafted to showcase process, polish, and clear navigation.',
  },
}

const es: typeof en = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    certifications: 'Certificaciones',
    skills: 'Skills & Tools',
    contact: 'Contacto',
    languageSwitch: 'Cambio de idioma',
  },
  hero: {
    quoteLines: [
      '"Design is not just what it looks like and',
      'feels like. Design is how it works."',
    ],
    quoteMobile:
      '"Design is not just what it looks like and feels like. Design is how it works."',
    author: '- Steve Jobs',
  },
  stats: [
    {
      value: '+15',
      label: 'Proyectos UI',
      href: '#projects',
      cta: 'Ver más',
      accent: false,
    },
    {
      value: '+2k',
      label: 'Usuarios impactados',
      href: '#contact',
      cta: 'Ver más',
      accent: true,
    },
    {
      value: '+6',
      label: 'Herramientas de diseño',
      href: '#skills',
      cta: 'Ver más',
      accent: false,
    },
  ],
  about: {
    title: 'Hi! I’m Esaú',
    paragraphs: [
      'Diseñador UX/UI apasionado por crear experiencias digitales intuitivas y centradas en las personas.',
      'Me especializo en convertir problemas complejos en soluciones simples y elegantes, combinando investigación de usuarios, estrategia y diseño visual para crear productos que realmente funcionan.',
      'Desde wireframes hasta interfaces pulidas, creo que el diseño no solo trata de cómo se ve algo, sino de cómo se siente y funciona.',
      'Construyamos experiencias que las personas disfruten usar.',
    ],
    primaryCta: 'Sobre mí',
    secondaryCta: 'Descargar CV',
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Una galería a pantalla completa pensada para que tu mejor trabajo UX/UI domine la vista.',
    copy:
      'Esta sección debe sentirse como el centro visual de la SPA: más amplia, más marcada y con una composición editorial para que el trabajo luzca como una galería premium y no como tarjetas genéricas apiladas.',
    featured: {
      title: 'Rediseño de Mercury Wallet',
      category: 'Rediseño de producto',
      metric: '-38% fricción en onboarding',
      copy:
        'Una experiencia fintech de onboarding replanteada para sentirse confiable, clara y operativamente eficiente en pasos de identidad y entrada al producto.',
      tags: ['Síntesis de research', 'Rediseño de flujo', 'Sistema de interfaz'],
      cta: 'Abrir caso de estudio',
    },
    side: [
      {
        title: 'Centro de mando analítico',
        category: 'Dashboard UI',
        metric: '+27% claridad de tareas',
        copy:
          'Datos densos convertidos en una capa de decisión más limpia para equipos internos de operaciones y producto.',
        tags: ['Jerarquía', 'Escaneabilidad', 'Estados responsive'],
        cta: 'Ver proyecto',
      },
      {
        title: 'Landing boutique de e-commerce',
        category: 'Experiencia de marketing',
        metric: '+19% profundidad de clic',
        copy:
          'Visuales editoriales y bloques de conversión alineados en una experiencia de landing premium y de alta confianza.',
        tags: ['Dirección visual', 'Storytelling', 'Flujo de CTA'],
        cta: 'Ver proyecto',
      },
    ],
    wide: {
      title: 'Sistema de portfolio y dirección de diseño',
      category: 'Marca + ejecución frontend',
      copy:
        'Un lenguaje modular de portfolio que conecta tipografía, narrativa e implementación frontend para que la experiencia visual se sienta intencional de inicio a fin.',
      tags: ['Design systems', 'Implementación frontend', 'Arquitectura de contenido'],
      stats: [
        { label: 'Casos de estudio', value: '03' },
        { label: 'Sistemas construidos', value: '06' },
        { label: 'Etapas de diseño', value: 'End to end' },
      ],
    },
  },
  certifications: {
    eyebrow: 'Certificaciones',
    title: 'Una vitrina de certificaciones más limpia, enfocada en Platzi, credibilidad y crecimiento profesional visible.',
    copy:
      'Ahora esta sección se comporta como un área premium de credenciales. Primero da contexto a tu ruta de aprendizaje y luego presenta cada certificado con la jerarquía suficiente para sentirse intencional.',
    hero: {
      subtitle: 'Ruta de aprendizaje Platzi',
      title: 'Aprendizaje continuo en research, sistemas de producto y craft de interfaces.',
      copy:
        'Usa este panel principal para enmarcar tus certificaciones como parte de una práctica UX/UI en evolución, no como insignias desconectadas.',
      meta: [
        { label: 'Proveedor', value: 'Platzi' },
        { label: 'Enfoque', value: 'UX/UI + Producto' },
        { label: 'Formato', value: 'Aprendizaje continuo' },
      ],
    },
    cards: [
      {
        title: 'Fundamentos de UX Research',
        provider: 'Platzi',
        year: '2024',
        copy:
          'Una base enfocada en entrevistas a usuarios, definición de problemas, síntesis y hallazgos accionables.',
      },
      {
        title: 'Sistemas de Diseño UI',
        provider: 'Platzi',
        year: '2024',
        copy:
          'Consistencia de interfaces, patrones reutilizables, componentes y reglas visuales pensadas para equipos escalables.',
      },
      {
        title: 'Flujo de trabajo en Product Design',
        provider: 'Platzi',
        year: '2025',
        copy:
          'Una ruta orientada al proceso que combina research, ideación, wireframing, prototipado, validación y entrega.',
      },
    ],
  },
  skills: {
    eyebrow: 'Skills & Tools',
    title: 'Herramientas, software y fortalezas profesionales organizadas con el mismo lenguaje visual premium del resto del portfolio.',
    copy:
      'El software ahora vive en una sola franja visual más limpia para sentirse integrado, mientras el bloque contiguo resume las habilidades de negocio y colaboración que fortalecen tu trabajo de diseño.',
    strengthsSubtitle: 'Fortalezas profesionales',
    strengthsTitle:
      'Ejecución de diseño respaldada por visión de negocio, comunicación y uso responsable de IA.',
    capabilities: [
      {
        title: 'Liderazgo de diseño',
        copy:
          'Dirección de sistemas visuales, prioridades de proyecto y ejecución de diseño con ownership claro.',
      },
      {
        title: 'Comunicación con clientes',
        copy:
          'Conversaciones claras con stakeholders, traducción de feedback y toma de decisiones colaborativa.',
      },
      {
        title: 'Uso profesional de IA',
        copy:
          'IA integrada en ideación, estructuración de contenido, soporte de research y aceleración de iteración.',
      },
      {
        title: 'Coordinación de proyectos',
        copy:
          'Workflows organizados que conectan calidad de diseño, tiempos de entrega y handoff a implementación.',
      },
    ],
    toolsSubtitle: 'Toolkit diario',
    toolsCopy:
      'Una sola línea directa con el software que más usas para diseño de interfaces, prototipado, entrega e implementación asistida por IA.',
    tools: [
      { name: 'Adobe Illustrator', group: 'Diseño vectorial', icon: 'illustrator' },
      { name: 'Figma', group: 'UI / Prototipado', icon: 'figma' },
      { name: 'Affinity', group: 'Suite creativa', icon: 'affinity' },
      { name: 'Adobe XD', group: 'Wireframing', icon: 'xd' },
      { name: 'VS Code', group: 'Editor de código', icon: 'vscode' },
      { name: 'GitHub Copilot', group: 'Programación asistida por IA', icon: 'copilot' },
      { name: 'OpenAI', group: 'Uso profesional de IA', icon: 'openai' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Una gran card de contacto que cierra la SPA con claridad y confianza.',
    copy:
      'Este bloque final está diseñado para sentirse como un CTA real y no como un placeholder. Reemplaza la información genérica de abajo por tus datos reales cuando quieras.',
    primaryCta: 'Enviar correo',
    secondaryCta: 'Ver proyectos',
    details: [
      { label: 'Correo', value: 'hello@portfolio.dev' },
      { label: 'Ubicación', value: 'Remoto / México' },
      { label: 'Disponibilidad', value: 'Abierto a freelance y oportunidades full-time' },
      { label: 'Tiempo de respuesta', value: 'Normalmente en 24-48 horas' },
    ],
  },
  footer: {
    line1: 'Esaú Aguilar. Diseñador UX/UI y constructor de producto con mentalidad frontend.',
    line2: 'Portfolio SPA creado para mostrar proceso, detalle visual y navegación clara.',
  },
}

export const dictionaries: Record<'en' | 'es', Translation> = { en, es }

export type Language = keyof typeof dictionaries
export type Dictionary = Translation

export const defaultLanguage: Language = 'en'
