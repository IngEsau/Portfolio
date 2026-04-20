export type ToolIconKey =
  | 'figma'
  | 'nextjs'
  | 'react'
  | 'typescript'
  | 'tailwind'
  | 'vscode'
  | 'framer'
  | 'github'

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
      href: string
      external?: boolean
    }
    side: Array<{
      title: string
      category: string
      metric: string
      copy: string
      tags: string[]
      cta: string
      href: string
      external?: boolean
    }>
    wide: {
      title: string
      category: string
      copy: string
      tags: string[]
      cta: string
      href: string
      external?: boolean
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
    issuedLabel: string
    credentialIdLabel: string
    ctaLabel: string
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
      issuedAt: string
      credentialId: string
      href?: string
    }>
  }
  skills: {
    eyebrow: string
    title: string
    copy: string
    strengthsSubtitle: string
    capabilities: Array<{
      title: string
      copy: string
    }>
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
      value: '03',
      label: 'Selected projects',
      href: '#projects',
      cta: 'View projects',
      accent: false,
    },
    {
      value: 'UX/UI',
      label: 'Optimized product flows',
      href: '#projects',
      cta: 'See work',
      accent: true,
    },
    {
      value: '04',
      label: 'Verified credentials',
      href: '#certifications',
      cta: 'View credentials',
      accent: false,
    },
  ],
  about: {
    title: "Hi! I'm Esaú",
    paragraphs: [
      'UX/UI Designer passionate about creating intuitive and human-centered digital experiences.',
      'I work across research, interface design, prototyping, and frontend implementation to turn complex needs into clear user flows and well-structured products.',
      'My approach combines visual polish with measurable business impact, from improving conversions and productivity to making digital systems easier to understand and use.',
      'From wireframes to polished interfaces, I focus on products that not only look good, but also feel coherent, useful, and efficient.',
      "I'm especially interested in projects where UX, UI, and product strategy need to work together to move real results.",
    ],
    primaryCta: 'View projects',
    secondaryCta: 'Download my CV',
  },
  projects: {
    eyebrow: 'Projects',
    title:
      'Selected UX/UI work focused on clarity, systems, and interfaces that feel intentional from the first screen.',
    copy:
      'These projects reflect the way I solve problems through UX/UI: improving clarity, supporting real workflows, and turning digital products into more effective experiences for businesses and users.',
    featured: {
      title: 'Bandas Asesoría y Montaje S.A. de C.V.',
      category: 'Website redesign + SEO + e-commerce',
      metric: 'More sales and qualified leads',
      copy:
        'A complete website redesign in WordPress focused on improving structure, search visibility, and the shopping experience. The result was a stronger digital presence with better SEO, more clients, and higher sales through the integrated e-commerce flow.',
      tags: ['WordPress', 'SEO improvement', 'E-commerce UX'],
      cta: 'Visit website',
      href: 'https://bandasyasesoria.com.mx/',
      external: true,
    },
    side: [
      {
        title: 'Montblan mobile system',
        category: 'Mobile + web workflow optimization',
        metric: '+80% productivity in order capture',
        copy:
          'I improved the overall UX/UI to make core business flows more efficient and easier to navigate. The redesign helped the team capture orders faster and move through operational tasks with better continuity across web and mobile contexts.',
        tags: ['Flow efficiency', 'UX/UI redesign', 'Operational productivity'],
        cta: 'View live system',
        href: 'https://montblan-mobile.netlify.app/',
        external: true,
      },
      {
        title: 'Sociograma UTP',
        category: 'Educational system + social analysis',
        metric: 'Faster group insight detection',
        copy:
          'A system developed for the Universidad Tecnológica de Puebla to identify isolated people in groups more quickly. I contributed mainly to the Figma design and part of the implementation so the interface could support faster interpretation and clearer decision-making.',
        tags: ['Figma UI', 'System design', 'Educational product'],
        cta: 'Open live project',
        href: 'https://sociograma-utp.pages.dev/login',
        external: true,
      },
    ],
    wide: {
      title: 'Backstabber',
      category: 'Desktop interface for security tooling',
      copy:
        'A modular penetration testing toolkit written in Python with a PyQt5 interface. What makes this project stand out in my portfolio is the interface work: the structure, visual hierarchy, and control patterns were designed to keep a technically dense tool understandable and usable through UX principles and Nielsen heuristics.',
      tags: ['PyQt5 UI', 'Nielsen heuristics', 'Information hierarchy'],
      cta: 'View repository',
      href: 'https://github.com/IngEsau/Backstabber',
      external: true,
      stats: [
        { label: 'Platform', value: 'Desktop' },
        { label: 'Stack', value: 'Python + PyQt5' },
        { label: 'Focus', value: 'Usable technical UI' },
      ],
    },
  },
  certifications: {
    eyebrow: 'Certifications',
    title:
      'Verified learning focused on frontend foundations, mobile-first thinking, and interface design execution.',
    copy:
      'These credentials support the way I work: with attention to usability, responsiveness, and the details that make digital products easier to understand and use.',
    issuedLabel: 'Issued',
    credentialIdLabel: 'Credential ID',
    ctaLabel: 'View credential',
    hero: {
      subtitle: 'Platzi learning path',
      title:
        'A learning path built around frontend, mobile-first design, and cleaner interface decisions.',
      copy:
        'Each course reinforces practical areas of my process: how interfaces are structured, how they behave on smaller screens, and how design decisions translate into production-ready experiences.',
      meta: [
        { label: 'Provider', value: 'Platzi' },
        { label: 'Credentials', value: '04 verified' },
        { label: 'Focus', value: 'Frontend + Mobile UI' },
      ],
    },
    cards: [
      {
        title: 'Curso de Frontend Developer',
        provider: 'Platzi',
        issuedAt: 'Jun 2025',
        credentialId: 'b9fe0905-9cc0-4e3b-8df7-f7fe75c9b02b',
        href: 'https://platzi.com/p/a86988708/curso/1235-course/diploma/detalle/',
      },
      {
        title: 'Curso de Diseño Mobile First: Prototipos',
        provider: 'Platzi',
        issuedAt: 'Jun 2025',
        credentialId: 'c2c4e528-1f5e-4536-8bb3-8a67cdd98c63',
        href: 'https://platzi.com/p/a86988708/curso/1997-course/diploma/detalle/',
      },
      {
        title: 'Curso de Diseño de Interfaces Móviles',
        provider: 'Platzi',
        issuedAt: 'Jun 2025',
        credentialId: '60ad522c-1d61-45a1-9139-572ec2ddc030',
        href: 'https://platzi.com/p/a86988708/curso/1906-course/diploma/detalle/',
      },
      {
        title: 'Curso de Diseño para Developers',
        provider: 'Platzi',
        issuedAt: 'Jun 2025',
        credentialId: '06702c5a-da7e-491f-8716-cf0557a9d491',
        href: 'https://platzi.com/p/a86988708/curso/2467-course/diploma/detalle/',
      },
    ],
  },
  skills: {
    eyebrow: 'Skills & Tools',
    title:
      'Tools and professional strengths that support the way I design, prototype, and ship interfaces.',
    copy:
      'My process combines interface design, frontend implementation, communication, and product thinking to move projects with clarity from concept to handoff.',
    strengthsSubtitle: 'Professional strengths',
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
    tools: [
      { name: 'Figma', group: 'UI / Prototyping', icon: 'figma' },
      { name: 'Next.js', group: 'App Router', icon: 'nextjs' },
      { name: 'React', group: 'UI library', icon: 'react' },
      { name: 'TypeScript', group: 'Typed frontend', icon: 'typescript' },
      { name: 'Tailwind CSS', group: 'Design system styling', icon: 'tailwind' },
      { name: 'VS Code', group: 'Code editor', icon: 'vscode' },
      { name: 'Framer Motion', group: 'Motion library', icon: 'framer' },
      { name: 'GitHub', group: 'Version control', icon: 'github' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build a digital experience that feels clear, useful, and well crafted.',
    copy:
      'I’m open to conversations about UX/UI design, product work, redesigns, and frontend-minded collaboration. If you have a project in mind, I’d be glad to talk.',
    primaryCta: 'Send email',
    secondaryCta: 'View projects',
    details: [
      { label: 'Email', value: 'aguilaresau630@gmail.com' },
      { label: 'LinkedIn', value: 'linkedin.com/in/esauaguilar' },
      { label: 'GitHub', value: 'github.com/IngEsau' },
      { label: 'Availability', value: 'Monday to Friday, from 9:00 a.m. to 11:30 p.m.' },
    ],
  },
  footer: {
    line1:
      'Daniel Esaú Negrete Aguilar. UX/UI Designer focused on digital products, interface systems, and frontend-minded execution. All rights reserved 2026.'
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
      value: '03',
      label: 'Proyectos seleccionados',
      href: '#projects',
      cta: 'Ver proyectos',
      accent: false,
    },
    {
      value: 'UX/UI',
      label: 'Flujos de producto optimizados',
      href: '#projects',
      cta: 'Ver trabajo',
      accent: true,
    },
    {
      value: '04',
      label: 'Credenciales verificadas',
      href: '#certifications',
      cta: 'Ver credenciales',
      accent: false,
    },
  ],
  about: {
    title: 'Hola, soy Esaú',
    paragraphs: [
      'Diseñador UX/UI apasionado por crear experiencias digitales intuitivas y centradas en las personas.',
      'Trabajo entre research, diseño de interfaces, prototipado e implementación frontend para convertir necesidades complejas en flujos claros y productos bien estructurados.',
      'Mi enfoque combina pulido visual con impacto real de negocio, desde mejorar conversiones y productividad hasta hacer que los sistemas digitales sean más fáciles de entender y usar.',
      'Desde wireframes hasta interfaces pulidas, me enfoco en productos que no solo se vean bien, sino que también se sientan coherentes, útiles y eficientes.',
      'Me interesan especialmente los proyectos donde UX, UI y estrategia de producto deben trabajar juntas para generar resultados reales.',
    ],
    primaryCta: 'Ver proyectos',
    secondaryCta: 'Descargar CV',
  },
  projects: {
    eyebrow: 'Proyectos',
    title:
      'Trabajo UX/UI seleccionado con foco en claridad, sistemas e interfaces que se sienten intencionales desde la primera pantalla.',
    copy:
      'Estos proyectos muestran cómo resuelvo problemas desde UX/UI: mejorando claridad, apoyando flujos reales de trabajo y convirtiendo productos digitales en experiencias más efectivas para negocios y personas usuarias.',
    featured: {
      title: 'Bandas Asesoría y Montaje S.A. de C.V.',
      category: 'Rediseño web + SEO + e-commerce',
      metric: 'Más ventas y clientes calificados',
      copy:
        'Realicé un rediseño completo del sitio en WordPress con foco en mejorar estructura, visibilidad en buscadores y experiencia de compra. El resultado fue una presencia digital más sólida, mejor SEO, más clientes y mayor volumen de ventas a través del flujo e-commerce integrado.',
      tags: ['WordPress', 'Mejora SEO', 'UX para e-commerce'],
      cta: 'Visitar sitio',
      href: 'https://bandasyasesoria.com.mx/',
      external: true,
    },
    side: [
      {
        title: 'Sistema mobile de Montblan',
        category: 'Optimización de flujo mobile + web',
        metric: '+80% productividad en captura de pedidos',
        copy:
          'Mejoré la UX/UI general para que los flujos clave fueran más eficientes y fáciles de recorrer. El rediseño ayudó a que el equipo capturara pedidos más rápido y trabajara con mejor continuidad entre contextos web y mobile.',
        tags: ['Eficiencia de flujos', 'Rediseño UX/UI', 'Productividad operativa'],
        cta: 'Ver sistema en vivo',
        href: 'https://montblan-mobile.netlify.app/',
        external: true,
      },
      {
        title: 'Sociograma UTP',
        category: 'Sistema educativo + análisis social',
        metric: 'Detección más rápida de relaciones de grupo',
        copy:
          'Un sistema desarrollado para la Universidad Tecnológica de Puebla que permite identificar con mayor rapidez a personas aisladas dentro de grupos. Mi aporte estuvo principalmente en el diseño en Figma y parte de la implementación para facilitar lectura e interpretación de la información.',
        tags: ['UI en Figma', 'Diseño de sistema', 'Producto educativo'],
        cta: 'Abrir proyecto en vivo',
        href: 'https://sociograma-utp.pages.dev/login',
        external: true,
      },
    ],
    wide: {
      title: 'Backstabber',
      category: 'Interfaz desktop para herramientas de seguridad',
      copy:
        'Un conjunto modular de herramientas para pruebas de penetración escrito en Python con interfaz PyQt5. Lo relevante dentro de mi portfolio es la parte visual y de interacción: la estructura, jerarquía y patrones de control se trabajaron para que una herramienta técnicamente densa se sintiera más comprensible y usable a partir de principios UX y heurísticas de Nielsen.',
      tags: ['UI en PyQt5', 'Heurísticas de Nielsen', 'Jerarquía de información'],
      cta: 'Ver repositorio',
      href: 'https://github.com/IngEsau/Backstabber',
      external: true,
      stats: [
        { label: 'Plataforma', value: 'Desktop' },
        { label: 'Stack', value: 'Python + PyQt5' },
        { label: 'Enfoque', value: 'UI técnica usable' },
      ],
    },
  },
  certifications: {
    eyebrow: 'Certificaciones',
    title:
      'Aprendizaje verificado con enfoque en fundamentos frontend, pensamiento mobile-first y ejecución de interfaces.',
    copy:
      'Estas credenciales respaldan la forma en la que trabajo: con atención a la usabilidad, la respuesta en distintos dispositivos y los detalles que hacen una interfaz más clara de usar.',
    issuedLabel: 'Expedición',
    credentialIdLabel: 'ID de la credencial',
    ctaLabel: 'Mostrar credencial',
    hero: {
      subtitle: 'Ruta de aprendizaje Platzi',
      title:
        'Una ruta de aprendizaje construida alrededor de frontend, diseño mobile-first y mejores decisiones de interfaz.',
      copy:
        'Cada curso refuerza áreas prácticas de mi proceso: cómo se estructuran las interfaces, cómo responden en pantallas pequeñas y cómo las decisiones de diseño se traducen en experiencias listas para producción.',
      meta: [
        { label: 'Proveedor', value: 'Platzi' },
        { label: 'Credenciales', value: '04 verificadas' },
        { label: 'Enfoque', value: 'Frontend + UI móvil' },
      ],
    },
    cards: [
      {
        title: 'Curso de Frontend Developer',
        provider: 'Platzi',
        issuedAt: 'jun. 2025',
        credentialId: 'b9fe0905-9cc0-4e3b-8df7-f7fe75c9b02b',
        href: 'https://platzi.com/p/a86988708/curso/1235-course/diploma/detalle/',
      },
      {
        title: 'Curso de Diseño Mobile First: Prototipos',
        provider: 'Platzi',
        issuedAt: 'jun. 2025',
        credentialId: 'c2c4e528-1f5e-4536-8bb3-8a67cdd98c63',
        href: 'https://platzi.com/p/a86988708/curso/1997-course/diploma/detalle/',
      },
      {
        title: 'Curso de Diseño de Interfaces Móviles',
        provider: 'Platzi',
        issuedAt: 'jun. 2025',
        credentialId: '60ad522c-1d61-45a1-9139-572ec2ddc030',
        href: 'https://platzi.com/p/a86988708/curso/1906-course/diploma/detalle/',
      },
      {
        title: 'Curso de Diseño para Developers',
        provider: 'Platzi',
        issuedAt: 'jun. 2025',
        credentialId: '06702c5a-da7e-491f-8716-cf0557a9d491',
        href: 'https://platzi.com/p/a86988708/curso/2467-course/diploma/detalle/',
      },
    ],
  },
  skills: {
    eyebrow: 'Skills & Tools',
    title:
      'Herramientas y fortalezas profesionales que respaldan la forma en la que diseño, prototipo y llevo interfaces a producción.',
    copy:
      'Mi proceso combina diseño de interfaz, implementación frontend, comunicación y pensamiento de producto para mover proyectos con claridad desde la idea hasta el handoff.',
    strengthsSubtitle: 'Fortalezas profesionales',
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
    tools: [
      { name: 'Figma', group: 'UI / Prototipado', icon: 'figma' },
      { name: 'Next.js', group: 'App Router', icon: 'nextjs' },
      { name: 'React', group: 'Librería UI', icon: 'react' },
      { name: 'TypeScript', group: 'Frontend tipado', icon: 'typescript' },
      { name: 'Tailwind CSS', group: 'Styling de sistema', icon: 'tailwind' },
      { name: 'VS Code', group: 'Editor de código', icon: 'vscode' },
      { name: 'Framer Motion', group: 'Librería de motion', icon: 'framer' },
      { name: 'GitHub', group: 'Control de versiones', icon: 'github' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos sobre una experiencia digital clara, útil y bien cuidada.',
    copy:
      'Estoy abierto a conversaciones sobre UX/UI, producto, rediseños y colaboración con enfoque frontend. Si tienes un proyecto en mente, será un gusto hablar.',
    primaryCta: 'Enviar correo',
    secondaryCta: 'Ver proyectos',
    details: [
      { label: 'Correo', value: 'aguilaresau630@gmail.com' },
      { label: 'LinkedIn', value: 'linkedin.com/in/esauaguilar' },
      { label: 'GitHub', value: 'github.com/IngEsau' },
      { label: 'Disponibilidad', value: 'Lunes a viernes, de 9:00 a.m. a 11:30 p.m.' },
    ],  
  },
  footer: {
    line1:
      'Daniel Esaú Negrete Aguilar. Diseñador UX/UI enfocado en productos digitales, sistemas de interfaz y ejecución con mentalidad frontend. Todos los derechos reservados 2026.',
  },
}

export const dictionaries: Record<'en' | 'es', Translation> = { en, es }

export type Language = keyof typeof dictionaries
export type Dictionary = Translation

export const defaultLanguage: Language = 'en'
