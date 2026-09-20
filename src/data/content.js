/** Career start — experience years are derived from this, not hardcoded. */
export const WORK_STARTED = new Date(2023, 7, 1) // 1 Aug 2023

/** Birth date — age is derived from this, not hardcoded. */
export const BORN = new Date(2000, 3, 17) // 17 Apr 2000

export function getYearsExperience(now = new Date()) {
  let months =
    (now.getFullYear() - WORK_STARTED.getFullYear()) * 12 +
    (now.getMonth() - WORK_STARTED.getMonth())
  if (now.getDate() < WORK_STARTED.getDate()) months -= 1
  const years = Math.max(0, months / 12)
  const rounded = Math.floor(years * 10) / 10
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1)
}

export function getAge(now = new Date()) {
  let age = now.getFullYear() - BORN.getFullYear()
  const monthDiff = now.getMonth() - BORN.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < BORN.getDate())) age -= 1
  return Math.max(0, age)
}

const AGE_WORDS = {
  20: 'Twenty',
  21: 'Twenty-one',
  22: 'Twenty-two',
  23: 'Twenty-three',
  24: 'Twenty-four',
  25: 'Twenty-five',
  26: 'Twenty-six',
  27: 'Twenty-seven',
  28: 'Twenty-eight',
  29: 'Twenty-nine',
  30: 'Thirty',
  31: 'Thirty-one',
  32: 'Thirty-two',
  33: 'Thirty-three',
  34: 'Thirty-four',
  35: 'Thirty-five',
}

export function getAgeWords(now = new Date()) {
  const age = getAge(now)
  return AGE_WORDS[age] ?? String(age)
}

export const person = {
  name: 'Punith Gowda',
  firstName: 'Punith',
  lastName: 'Gowda',
  displayName: 'PUNITH GOWDA',
  role: 'Software engineer',
  location: 'Bengaluru',
  get micro() {
    return `${getYearsExperience()}+ years shipping products · Bengaluru`
  },
  email: 'punithgsp.partha@gmail.com',
  github: 'https://github.com/i-punithgowda',
  linkedin: 'https://www.linkedin.com/in/punith-gowda-s-p-7452391b8',
}

export const hero = {
  kicker: 'Software engineer · Bengaluru',
  line: 'I ship products end to end — systems, AI, and the interface. Fast when it matters; careful where it counts.',
  watermark: ['SOFTWARE', 'ENGINEER'],
  primaryCta: { href: '#work', label: 'See the work' },
  secondaryCta: { href: '#contact', label: 'Contact' },
  stats: [
    { id: 'years', suffix: '+', label: 'Years exp.' },
    { id: 'products', value: '5', suffix: '+', label: 'Products' },
    { id: 'awards', value: '5', suffix: '', label: 'Awards' },
  ],
}

export const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#recognition', label: 'Awards' },
  { href: '#about', label: 'About' },
  // { href: '#places', label: 'Reach' },
  { href: '#contact', label: 'Contact' },
]

export const intro = {
  kicker: 'Available to build · Bengaluru',
  heading:
    'From messy requirements to production systems — architecture, review, and the parts that usually slip.',
  stats: [
    { id: 'years', suffix: '+', label: 'Years shipping products', ring: 'var(--color-sun)' },
    { id: 'products', value: 5, suffix: '', label: 'Products launched, from MVP to scale', ring: 'var(--color-sky)' },
    { id: 'problems', display: '∞', suffix: '', label: 'Problems solved along the way', ring: 'var(--color-coral)' },
  ],
}

export const crafts = [
  { id: 'devices', title: 'Web + mobile', accent: '#ff8a3c' },
  { id: 'pay', title: 'Payments', accent: '#f5e211' },
  { id: 'live', title: 'Realtime', accent: '#FF007F' },
  { id: 'data', title: 'Data', accent: '#2ba0ff' },
  { id: 'migrate', title: 'Migration', accent: '#1e201b' },
  { id: 'cloud', title: 'Cloud', accent: '#7c5cff' },
]

export const projects = [
  {
    id: 'summarize',
    title: 'ReviewPulse',
    status: 'Present',
    accent: '#7c5cff',
    ink: '#2c2e2a',
    role: 'Builder',
    period: 'July 2025 – Present',
    summary:
      'Local-first code review assistant — Git branch diffs, per-file Gemini insights, and rule-based checks.',
    stack: ['FastAPI', 'React', 'Python', 'Gemini 2.5 Flash', 'Docker'],
    architecture: [
      { label: 'Git', icon: 'Git' },
      { label: 'FastAPI', icon: 'FastAPI' },
      { label: 'Gemini', icon: 'Gemini' },
      { label: 'React', icon: 'React' },
    ],
    points: [
      'Local-first tool that analyzes Git branch changes and generates structured, per-file review insights with Gemini 2.5 Flash.',
      'FastAPI backend computes diffs, extracts file-level changes, and orchestrates automated review workflows.',
      'Rule-based checks flag coding-standard violations with clear, actionable recommendations.',
      'PR-style diff views with highlighted changes and annotations cut manual review time by about 30%.',
    ],
  },
  {
    id: 'eatozone',
    title: 'Eatozone',
    status: 'Present',
    accent: '#ff8a3c',
    ink: '#2c2e2a',
    role: 'Senior Software Engineer',
    period: 'Aug 2023 – Present',
    summary:
      'Multi-tenant restaurant & cafeteria SaaS — React dashboard, QR ordering, React Native apps, real-time KOT.',
    stack: ['Java', 'Spring Boot', 'Node.js', 'React', 'React Native', 'PostgreSQL', 'Redis', 'AWS'],
    architecture: [
      { label: 'Java', icon: 'Java' },
      { label: 'React', icon: 'React' },
      { label: 'PostgreSQL', icon: 'PostgreSQL' },
      { label: 'AWS', icon: 'AWS' },
    ],
    points: [
      'Multi-tenant platform for 25+ restaurant and cafeteria tenants — React dashboard, QR-ordering site, and two React Native apps on Java/Spring Boot and Node.js services.',
      'PostgreSQL multi-tenancy with tenant-resolution middleware, schema provisioning, and Liquibase migrations — new-tenant setup from 3 days to under 4 hours.',
      'Ledger batch service on Java virtual threads for 20 tenants; pluggable payment gateways for Razorpay, PhonePe, and PayU.',
      'AWS SQS notification pipeline delivering 80K+ email, SMS, and push messages per month with retry safeguards.',
      'Cut p95 on high-traffic read APIs from 500–1,000 ms to under 100 ms at 200 concurrent users via Redis, SQL tuning, and KOT list virtualization.',
      'Secured 20+ tenant accounts with Firebase Auth, JWT, entity-level RBAC, and Cognito-backed SSO.',
    ],
  },
  {
    id: 'ifaclick',
    title: 'IFAclick',
    status: 'Present',
    accent: '#0d9488',
    ink: '#2c2e2a',
    role: 'Senior Software Engineer',
    period: 'Aug 2023 – Present',
    summary:
      'Multi-tenant mutual fund CRM — portfolios, SIPs, RTA ingestion, and insurance workflows for 40+ MFDs.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    architecture: [
      { label: 'Next.js', icon: 'Next.js' },
      { label: 'Node.js', icon: 'Node.js' },
      { label: 'PostgreSQL', icon: 'PostgreSQL' },
      { label: 'Python', icon: 'Python' },
    ],
    points: [
      'Multi-tenant SaaS CRM for 40+ Mutual Fund Distributors — clients, portfolios, SIP tracking, risk profiling, documents, and RTA-fed data.',
      'End-to-end CAMS/KFin RTA ingestion with Python, Node.js, and PostgreSQL — up to 200K transactions per sync, S3 archival, and folio/SIP sync.',
      'Moved high-volume RTA sync from HTTP processing to direct PostgreSQL writes with staging, batches, and advisory locks — 60% faster imports.',
      'Investment and SIP workflows on Node.js/Express and Next.js for 25K+ investor accounts with live RTA-backed metrics.',
      'Insurance workflows covering 3,000+ policies — PDF field extraction, claims views, renewals, and follow-ups.',
      'CRM UI in Next.js, TypeScript, React, and TanStack Query — dashboards, multi-tab leads, and org-level workflows.',
    ],
  },
  {
    id: 'mentoring',
    title: 'Rexx — University Mentoring',
    status: 'Shipped',
    accent: '#2ba0ff',
    ink: '#2c2e2a',
    role: 'Product engineer',
    period: 'June 2024 – Jan 2025',
    summary:
      'Multi-university mentoring, exams, live chat, and student progress — GPA, EPA, logbooks.',
    stack: ['React', 'Node.js', 'MySQL', 'Sequelize', 'WebSockets'],
    architecture: [
      { label: 'React', icon: 'React' },
      { label: 'Node.js', icon: 'Node.js' },
      { label: 'WebSockets', icon: 'WebSockets' },
      { label: 'MySQL', icon: 'MySQL' },
    ],
    points: [
      'Multi-university system for student records, online exams, scores, logbooks, EPA, and assessments across 12+ universities.',
      'Mentoring module with appointment timeslots, live chat over WebSockets, and performance views (GPA, GPAX, semester marks) for 5,000+ students.',
      'Singleton DB connection so one backend can reach multiple university databases through a master DB.',
      'Admin settings for phases, academic years, and mentor-to-student assignments.',
      'Admin dashboard for Logbook, EPA Progress, Longitudinal Pool, and Excellence metrics for 150+ mentors and admins.',
    ],
  },
  {
    id: 'edtech',
    title: 'EdTech Performance',
    status: 'Shipped',
    accent: '#6345ED',
    ink: '#2c2e2a',
    role: 'Backend developer',
    period: 'Dec 2023 – May 2024',
    summary:
      'Profiled a legacy PHP backend, rewrote the hot path, and moved core modules to Node.js — minutes down to seconds.',
    stack: ['Node.js', 'PHP', 'MySQL'],
    architecture: [
      { label: 'PHP', icon: 'PHP' },
      { label: 'MySQL', icon: 'MySQL' },
      { label: 'Node.js', icon: 'Node.js' },
    ],
    points: [
      'Identified and fixed critical bottlenecks on a production ed-tech platform — dashboard loads from 4–5 minutes to under 10 seconds.',
      'Complex SQL and stored procedures stabilized dashboards over 50K+ student records without first-load crashes.',
      'Moved core backend modules from PHP to Node.js for maintainability and async handling.',
      'Data fetching and filtering scaled to thousands of student records after the migration.',
    ],
  },
]

export const skills = {
  kicker: 'The stack',
  heading: 'The toolbox.',
  filters: [
    { id: 'all', label: 'All', color: 'bg-ink' },
    { id: 'ai', label: 'AI & LLM', color: 'bg-sky' },
    { id: 'agents', label: 'Agents & retrieval', color: 'bg-sun' },
    { id: 'languages', label: 'Languages', color: 'bg-magenta' },
    { id: 'backend', label: 'Backend & cloud', color: 'bg-coral' },
    { id: 'frontend', label: 'Frontend', color: 'bg-sun' },
    { id: 'ops', label: 'Mobile & ops', color: 'bg-sky' },
    { id: 'design', label: 'Design', color: 'bg-coral' },
  ],
  items: [
    { name: 'Claude', group: 'ai' },
    { name: 'GPT', group: 'ai' },
    { name: 'Llama', group: 'ai' },
    { name: 'RAG pipelines', group: 'ai' },
    { name: 'Tool calling', group: 'ai' },
    { name: 'Prompt engineering', group: 'ai' },
    { name: 'Workflow automation', group: 'ai' },
    { name: 'Model Context Protocol', group: 'agents' },
    { name: 'LangChain', group: 'agents' },
    { name: 'LangGraph', group: 'agents' },
    { name: 'Langflow', group: 'agents' },
    { name: 'Ollama', group: 'agents' },
    { name: 'Qdrant', group: 'agents' },
    { name: 'Sub-agents', group: 'agents' },
    { name: 'Connectors', group: 'agents' },
    { name: 'Claude Code', group: 'agents' },
    { name: 'Claude Fable', group: 'agents' },
    { name: 'Claude Cowork', group: 'agents' },
    { name: 'Codex', group: 'agents' },
    { name: 'Antigravity', group: 'agents' },
    { name: 'Python', group: 'languages' },
    { name: 'JavaScript', group: 'languages' },
    { name: 'TypeScript', group: 'languages' },
    { name: 'Java', group: 'languages' },
    { name: 'SQL', group: 'languages' },
    { name: 'HTML', group: 'languages' },
    { name: 'CSS3', group: 'languages' },
    { name: 'PHP', group: 'languages' },
    { name: 'FastAPI', group: 'backend' },
    { name: 'Node.js', group: 'backend' },
    { name: 'Express', group: 'backend' },
    { name: 'Flask', group: 'backend' },
    { name: 'REST APIs', group: 'backend' },
    { name: 'WebSockets', group: 'backend' },
    { name: 'PostgreSQL', group: 'backend' },
    { name: 'MySQL', group: 'backend' },
    { name: 'MongoDB', group: 'backend' },
    { name: 'Redis', group: 'backend' },
    { name: 'Sequelize', group: 'backend' },
    { name: 'Firebase', group: 'backend' },
    { name: 'Google Cloud', group: 'backend' },
    { name: 'AWS', group: 'backend' },
    { name: 'Vercel', group: 'backend' },
    { name: 'React', group: 'frontend' },
    { name: 'React Native', group: 'frontend' },
    { name: 'Next.js', group: 'frontend' },
    { name: 'Vite', group: 'frontend' },
    { name: 'Tailwind CSS', group: 'frontend' },
    { name: 'Redux', group: 'frontend' },
    { name: 'Zustand', group: 'frontend' },
    { name: 'GSAP', group: 'frontend' },
    { name: 'Framer', group: 'frontend' },
    { name: 'Three.js', group: 'frontend' },
    { name: 'Flutter', group: 'ops' },
    { name: 'Git', group: 'ops' },
    { name: 'GitHub Actions', group: 'ops' },
    { name: 'Docker', group: 'ops' },
    { name: 'Nginx', group: 'ops' },
    { name: 'Postman', group: 'ops' },
    { name: 'Domains & DNS', group: 'ops' },
    { name: 'Search Console', group: 'ops' },
    { name: 'Canva', group: 'design' },
    { name: 'Brand systems', group: 'design' },
    { name: 'Print collateral', group: 'design' },
    { name: 'Logo vectorisation', group: 'design' },
  ],
}

export const experience = [
  {
    when: 'Aug 2023',
    year: '2023',
    range: 'Aug 2023 – Apr 2024',
    title: 'Software Developer',
    place: 'Techcanopy',
    mark: null,
  },
  {
    when: 'Apr 2024',
    year: '2024',
    range: 'Apr 2024 – Apr 2026',
    title: 'Software Engineer',
    place: 'Techcanopy',
    mark: null,
  },
  {
    when: 'Apr 2026',
    year: '2026',
    range: 'Apr 2026 – Present',
    title: 'Senior Software Engineer I',
    place: 'Techcanopy',
    mark: 'Now',
  },
]

export const about = {
  kicker: 'About',
  get heading() {
    return `${getAgeWords()}, from Bengaluru. Building products and systems for startups — AI included — while keeping them calm under load.`
  },
  timeline: [
    {
      title: 'Senior Software Engineer I',
      place: 'Techcanopy, Bengaluru',
      meta: 'Apr 2026 – Present',
    },
    {
      title: 'Master of Computer Applications',
      place: 'R V College of Engineering',
      meta: 'Feb 2022 – Aug 2023 · CGPA 8.58',
    },
    {
      title: 'Bachelor of Computer Applications',
      place: 'Global Institute of Management Sciences',
      meta: 'Jun 2018 – Sep 2021 · CGPA 8.05',
    },
  ],
  offer: {
    title: 'What I take on',
    copy: 'Platform hardening, product engineering, and AI-assisted developer tools — shipped as real systems, not demos.',
    items: [
      'Performance & query work',
      'Web & product builds',
      'Local-first AI tooling',
    ],
  },
}

export const awards = [
  {
    id: 'pat-on-the-back',
    title: 'Pat on the Back',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q2 2023',
    mark: 'First',
    accent: '#f5e211',
    copy: 'Timely delivery with unwavering enthusiasm — whether a simple task or a complex project.',
  },
  {
    id: 'team-impact',
    title: 'Team Impact',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q3 2024',
    mark: 'Team',
    accent: '#2ba0ff',
    copy: 'Career Portal, Access Management, and Finzy — impact that moved the whole team.',
  },
  {
    id: 'rising-star',
    title: 'Rising Star',
    kind: 'photo',
    org: 'Techcanopy · IGNITE',
    when: '2024',
    mark: null,
    accent: '#f5e211',
    copy: '',
  },
  {
    id: 'consistent-contributor',
    title: 'Consistent Contributor',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q4 2024',
    mark: 'Rexx',
    accent: '#ff8a3c',
    copy: 'Exemplary dedication on Rexx — meeting and often exceeding the bar, every sprint.',
  },
  {
    id: 'standout-performer',
    title: 'Standout Performer',
    kind: 'certificate',
    org: 'Techcanopy',
    when: 'Q1 2025',
    mark: 'Client',
    accent: '#f5e211',
    copy: 'Individual work that made the team shine — noticed and appreciated by the client.',
  },
]

export const credentials = [
  {
    id: 'claude',
    issuer: 'Anthropic',
    title: 'Claude Certified Architect',
    detail: 'Foundations',
    href: 'https://www.credly.com/badges/c4f2be8c-c722-4d68-b4de-9c4bfeebbaca',
    hrefLabel: 'Verify',
    icon: 'Anthropic',
    accent: '#1e201b',
    ink: '#f5f1e4',
  },
  {
    id: 'azure',
    issuer: 'Microsoft · Coursera',
    title: 'Azure Fundamentals AZ-900',
    detail: 'Exam prep specialization · 2023',
    href: 'https://coursera.org/verify/specialization/ZUH79C2UHZGH',
    hrefLabel: 'Verify',
    icon: 'Azure',
    accent: '#2ba0ff',
    ink: '#2c2e2a',
  },
]

export const reach = {
  kicker: 'The work commutes',
  heading: 'India, UAE, and Thailand.',
  places: [{ name: 'India' }, { name: 'UAE' }, { name: 'Thailand' }],
}

export const contact = {
  kicker: 'Open for work · Bengaluru',
  heading: 'Let’s build.',
}
