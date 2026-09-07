export type Link = {
  label: string
  href: string
}

export type Intro = {
  name: string
  title: string
  eyebrow: string
  description: string
  email: string
  profileImage: string
  resumeUrl: string
  socialLinks: Link[]
}

export type Project = {
  name: string
  description: string
  githubUrl: string
  importantTechnologies: string[]
  otherTechnologies: string[]
  highlights: string[]
  image?: string
  imageAlt?: string
}

export type Experience = {
  role: string
  organization: string
  dates: string
  accomplishments: string[]
}

export type SkillGroup = {
  category: string
  skills: Array<{ name: string; description?: string }>
}

export type Education = {
  university: string
  degree: string
  graduation: string
  gpa: string
  courses: Array<{ name: string; description: string }>
}

// All copy below is presentation-only placeholder content. Replace it with verified
// personal information; no component or stylesheet changes are required.
export const intro: Intro = {
  name: 'Student Name',
  title: 'Computer Science Student',
  eyebrow: 'Aspiring software engineer · Open to internships',
  description:
    'I build thoughtful, dependable software and enjoy turning complex problems into clear, useful experiences.',
  email: 'student@example.com',
  profileImage: '/profile-placeholder.svg',
  resumeUrl: '/resume-placeholder.pdf',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

export const projects: Project[] = [
  {
    name: 'Project Atlas',
    description:
      'A collaborative planning app that turns a large goal into focused, trackable milestones.',
    githubUrl: 'https://github.com/',
    importantTechnologies: ['React', 'TypeScript'],
    otherTechnologies: ['Vite', 'CSS', 'Vitest'],
    highlights: [
      'Designed a component model that keeps planning data separate from presentation logic.',
      'Added keyboard-friendly interactions and responsive layouts for mobile and desktop use.',
      'Established automated tests around the highest-risk planning workflows.',
    ],
  },
  {
    name: 'Signal CLI',
    description:
      'A command-line toolkit for inspecting system health and turning raw logs into useful summaries.',
    githubUrl: 'https://github.com/',
    importantTechnologies: ['Python', 'Linux'],
    otherTechnologies: ['Click', 'Pytest', 'GitHub Actions'],
    highlights: [
      'Built a composable command structure so new diagnostic checks can be added independently.',
      'Created clear error states and machine-readable output for use in automation.',
    ],
  },
  {
    name: 'Coursework Visualizer',
    description:
      'An interactive tool for exploring prerequisite paths across a computer science curriculum.',
    githubUrl: 'https://github.com/',
    importantTechnologies: ['JavaScript', 'Algorithms'],
    otherTechnologies: ['HTML', 'CSS', 'Graph traversal'],
    highlights: [
      'Modeled course dependencies as a directed graph with cycle detection.',
      'Reduced visual clutter through progressive disclosure and focused path highlighting.',
    ],
  },
]

export const experience: Experience[] = [
  {
    role: 'Software Engineering Intern',
    organization: 'Example Technology Company',
    dates: 'May 2025 — August 2025',
    accomplishments: [
      'Built and shipped an internal workflow that reduced a recurring manual task.',
      'Collaborated with engineers to review code, investigate defects, and document decisions.',
      'Presented the completed project and measured results to technical stakeholders.',
    ],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    organization: 'Example University',
    dates: 'August 2024 — May 2025',
    accomplishments: [
      'Supported students in introductory programming labs and weekly office hours.',
      'Explained debugging strategies, data structures, and foundational software design concepts.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', description: 'Typed application development for reliable web interfaces.' },
      { name: 'Python', description: 'Automation, data processing, and backend fundamentals.' },
      { name: 'Java', description: 'Object-oriented design and data structures.' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Web & Tools',
    skills: [
      { name: 'React', description: 'Composable, accessible user interface development.' },
      { name: 'Git', description: 'Version control, collaboration, and review workflows.' },
      { name: 'AWS', description: 'Foundational cloud infrastructure and static web hosting.' },
      { name: 'Linux' },
    ],
  },
  {
    category: 'Foundations',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Testing', description: 'Unit and integration tests focused on meaningful behavior.' },
      { name: 'Accessible UI', description: 'Inclusive interfaces built for keyboard and assistive technology users.' },
    ],
  },
]

export const education: Education = {
  university: 'Example University',
  degree: 'Bachelor of Science in Computer Science',
  graduation: 'Expected May 2027',
  gpa: 'GPA: 0.00 / 4.00',
  courses: [
    { name: 'Data Structures & Algorithms', description: 'Analysis and implementation of foundational algorithms and structures.' },
    { name: 'Software Engineering', description: 'Team-based design, testing, version control, and delivery practices.' },
    { name: 'Operating Systems', description: 'Processes, concurrency, memory, and file-system concepts.' },
    { name: 'Database Systems', description: 'Relational modeling, SQL, normalization, and transactions.' },
  ],
}

export const about =
  'I am a computer science student who enjoys learning how systems work and improving the experience of the people who use them. Away from the keyboard, add a few details here that show your interests, values, and personality.'
